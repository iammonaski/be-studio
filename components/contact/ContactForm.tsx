"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookCallButton } from "../BookCallButton";
import { SectionEyebrow } from "@/components/services/SectionEyebrow";
import { ArrowRight, Check, X } from "lucide-react";

const fieldClasses =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-blue-accent focus:bg-white focus:outline-none";

const selectClasses = `${fieldClasses} cursor-pointer appearance-none pr-10`;

const chevronStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%230E7490' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 1rem center",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    service: "",
    timeline: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log("sending form data:", formData);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("response from form submit:", res);

      if (!res.ok) {
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          website: "",
          service: "",
          timeline: "",
          message: "",
        });
        setSubmitStatus(null);
      }, 4000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: COPY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8 lg:col-span-5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-700 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-cyan-700" />
              </span>
              <SectionEyebrow>Available for new projects</SectionEyebrow>
            </motion.div>

            <div>
              <SectionEyebrow>Let&apos;s talk</SectionEyebrow>
              <h1 className="font-heading mt-3 text-[2.2rem] leading-[1.1] font-bold tracking-tight text-slate-900 sm:text-4xl md:text-[2.8rem]">
                Let&apos;s build something
                <span className="mt-1 block text-cyan-700">
                  worth scaling.
                </span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 md:text-lg">
                Tell us about your business, your goals, and where you&apos;re
                feeling stuck. We&apos;ll review your message and suggest the
                best next step.
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-accent/10 text-cyan-700 transition-colors hover:bg-blue-accent/15">
                  <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-slate-900">
                    Quick Response Time
                  </h4>
                  <p className="text-sm text-slate-600">
                    Typically respond within 24-48 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-accent/10 text-cyan-700 transition-colors hover:bg-blue-accent/15">
                  <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-slate-900">
                    No Obligation
                  </h4>
                  <p className="text-sm text-slate-600">
                    Free consultation with zero commitment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-accent/10 text-cyan-700 transition-colors hover:bg-blue-accent/15">
                  <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-slate-900">
                    Privacy Protected
                  </h4>
                  <p className="text-sm text-slate-600">
                    Your information stays confidential
                  </p>
                </div>
              </div>
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-2 border-t border-slate-100 pt-6">
              <span className="flex size-6 items-center justify-center rounded-full bg-blue-accent/10 text-cyan-700">
                <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
              </span>
              <p className="text-sm font-medium text-slate-600">
                <span className="font-bold text-slate-900">
                  50+ brands transformed
                </span>
              </p>
            </div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-blue-accent/40 md:col-span-7 md:p-8"
          >
            {/* Form header */}
            <div className="mb-8 border-b border-slate-100 pb-6">
              <h3 className="font-heading mb-2 text-xl font-semibold text-slate-900">
                Start Your Project
              </h3>
              <p className="text-sm text-slate-600">
                Fill out the form below and we&apos;ll get back to you shortly
              </p>
            </div>

            <div className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Full Name <span className="text-cyan-700">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Jane Smith"
                      className={fieldClasses}
                    />
                    {focusedField === "name" && (
                      <motion.div
                        layoutId="focus-ring"
                        className="absolute -inset-[3px] -z-10 rounded-xl bg-blue-accent/10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Email Address <span className="text-cyan-700">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="jane@company.com"
                      className={fieldClasses}
                    />
                    {focusedField === "email" && (
                      <motion.div
                        layoutId="focus-ring"
                        className="absolute -inset-[3px] -z-10 rounded-xl bg-blue-accent/10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Company & Website Row */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Company */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Company / Brand
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Company Inc."
                      className={fieldClasses}
                    />
                    {focusedField === "company" && (
                      <motion.div
                        layoutId="focus-ring"
                        className="absolute -inset-[3px] -z-10 rounded-xl bg-blue-accent/10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Website */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Website (if applicable)
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("website")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="www.yourcompany.com"
                      className={fieldClasses}
                    />
                    {focusedField === "website" && (
                      <motion.div
                        layoutId="focus-ring"
                        className="absolute -inset-[3px] -z-10 rounded-xl bg-blue-accent/10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Service & Timeline Row */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Service */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Service Needed <span className="text-cyan-700">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("service")}
                      onBlur={() => setFocusedField(null)}
                      className={selectClasses}
                      style={chevronStyle}
                    >
                      <option value="">Select a service</option>
                      <option value="full-brand-build">Full Brand Build</option>
                      <option value="brand-analysis">Brand Analysis</option>
                      <option value="brand-strategy">Brand Strategy</option>
                      <option value="brand-identity-system">
                        Brand Identity System
                      </option>
                      <option value="brand-repositioning">
                        Brand Repositioning
                      </option>
                      <option value="brand-growth-assets">
                        Brand Growth Assets
                      </option>
                      <option value="other">Other</option>
                    </select>
                    {focusedField === "service" && (
                      <motion.div
                        layoutId="focus-ring"
                        className="absolute -inset-[3px] -z-10 rounded-xl bg-blue-accent/10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Project Timeline
                  </label>
                  <div className="relative">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("timeline")}
                      onBlur={() => setFocusedField(null)}
                      className={selectClasses}
                      style={chevronStyle}
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (1-2 weeks)</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="flexible">
                        Flexible / Just exploring
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Project Details <span className="text-cyan-700">*</span>
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your goals, challenges, and what success looks like for your brand..."
                    className={`${fieldClasses} resize-none placeholder:text-xs md:placeholder:text-sm`}
                  />
                  {focusedField === "message" && (
                    <motion.div
                      layoutId="focus-ring"
                      className="absolute -inset-[3px] -z-10 rounded-xl bg-blue-accent/10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </div>
                <p className="mt-1.5 text-xs text-slate-500">
                  The more details you share, the better we can help
                </p>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === "success"}
                  className="group relative inline-flex items-center justify-center rounded-full bg-blue-accent px-4 py-2.5 text-sm font-semibold text-white transition-all hover:cursor-pointer hover:bg-blue-accent/90 md:px-8 md:py-3.5 md:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-accent"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="size-5 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : submitStatus === "success" ? (
                      <>
                        <svg
                          className="size-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </button>

                <span className="mt-2 text-sm text-slate-500">
                  Or{" "}
                  <BookCallButton
                    text="book a call"
                    className="bg-transparent! px-0! text-cyan-700! underline! hover:text-cyan-800!"
                  />{" "}
                  if you prefer
                </span>
              </div>

              {/* SUCCESS */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="rounded-2xl border border-green-200 bg-green-50 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-green-500">
                      <Check
                        className="size-5 text-white"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-semibold text-green-900">
                        Thanks for reaching out!
                      </h4>
                      <p className="text-sm text-green-700">
                        We&apos;ve received your message and will get back to
                        you within 24 hours.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ERROR */}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="rounded-2xl border border-red-200 bg-red-50 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-red-500">
                      <X
                        className="size-5 text-white"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-semibold text-red-900">
                        Something went wrong
                      </h4>
                      <p className="text-sm text-red-700">
                        Your message couldn&apos;t be sent. Please try again in
                        a moment.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
