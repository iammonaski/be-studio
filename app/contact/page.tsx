import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with our branding experts to discuss your project, request a proposal, or book a discovery call.",
  openGraph: {
    title: "Contact",
    description:
      "Get in touch with our branding experts to discuss your project, request a proposal, or book a discovery call.",
    url: "https://be-studio.vercel.app/contact",
  },
};

const Page = () => {
  return (
    <div className="bg-white">
      <ContactForm />
    </div>
  );
};

export default Page;
