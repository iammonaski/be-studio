import { BookCallButton } from "@/components/BookCallButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface DarkCTAProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  footnote?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function DarkCTA({
  title,
  description,
  buttonText = "Book a discovery call",
  buttonHref,
  footnote,
  children,
  className = "",
}: DarkCTAProps) {
  return (
    <section className={`bg-white px-4 pb-12 sm:px-8 md:pb-16 ${className}`}>
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-dark-accent md:rounded-[3rem]">
        <div
          aria-hidden
          className="absolute inset-0 bg-[url('/images/blue-abstract.png')] bg-cover bg-center opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-br from-dark-accent/90 via-dark-accent/80 to-dark-accent/95"
        />
        <div className="relative px-6 py-16 text-center md:py-24">
          <h2 className="font-heading mx-auto max-w-3xl text-2xl leading-tight font-bold tracking-tight text-white sm:text-3xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {description}
            </p>
          )}

          {children}

          {buttonHref ? (
            <Button
              asChild
              size="lg"
              className="group mt-8 h-12 rounded-full bg-blue-accent px-7 text-sm font-bold text-white shadow-lg shadow-blue-accent/20 hover:bg-[#3ac8dd]"
            >
              <Link href={buttonHref}>
                {buttonText}
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Button>
          ) : (
            <BookCallButton
              text={buttonText}
              className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-blue-accent px-7 text-sm font-bold text-white! transition-colors hover:bg-[#3ac8dd]!"
            >
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </BookCallButton>
          )}

          {footnote && <p className="mt-5 text-xs text-slate-400">{footnote}</p>}
        </div>
      </div>
    </section>
  );
}
