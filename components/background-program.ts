import { Program } from "ogl";
import type { UniformInfo } from "ogl";

// OGL's constructor immediately queries LINK_STATUS, blocking until shaders
// compile. Defer reflection until KHR_parallel_shader_compile reports readiness.
export class BackgroundProgram extends Program {
  setShaders({ vertex, fragment }: { vertex: string; fragment: string }) {
    this.gl.shaderSource(this.vertexShader, vertex);
    this.gl.compileShader(this.vertexShader);
    this.gl.shaderSource(this.fragmentShader, fragment);
    this.gl.compileShader(this.fragmentShader);
    this.gl.linkProgram(this.program);
  }

  async prepare(signal: AbortSignal) {
    const gl = this.gl;
    const extension = gl.getExtension("KHR_parallel_shader_compile");
    // Decorative motion must not risk blocking on unsupported browsers.
    if (!extension) throw new Error("Parallel shader compilation unavailable");

    const deadline = performance.now() + 15000;
    while (!signal.aborted) {
      if (gl.isContextLost()) throw new Error("Background context lost");
      if (gl.getProgramParameter(this.program, extension.COMPLETION_STATUS_KHR)) break;
      if (performance.now() > deadline) throw new Error("Background compilation timed out");
      await new Promise<void>((resolve) => setTimeout(resolve, 32));
    }
    if (signal.aborted) return;
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(this.program) || "Background shader failed");
    }

    this.uniformLocations = new Map();
    const uniformCount = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
    for (let index = 0; index < uniformCount; index++) {
      const active = gl.getActiveUniform(this.program, index);
      if (!active) continue;
      const parts = active.name.match(/(\w+)/g) || [];
      const uniform = Object.assign(active, {
        uniformName: parts[0],
        nameComponents: parts.slice(1),
      }) as UniformInfo;
      const location = gl.getUniformLocation(this.program, active.name);
      if (location !== null) this.uniformLocations.set(uniform, location);
    }

    this.attributeLocations = new Map();
    const names: string[] = [];
    const attributeCount = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);
    for (let index = 0; index < attributeCount; index++) {
      const attribute = gl.getActiveAttrib(this.program, index);
      if (!attribute) continue;
      const location = gl.getAttribLocation(this.program, attribute.name);
      if (location === -1) continue;
      names[location] = attribute.name;
      this.attributeLocations.set(attribute, location);
    }
    this.attributeOrder = names.join("");
  }
}
