import Footer from "@/components/Footer";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "JetStream Mailer | Best bulk mailing software with 90% inboxing",
  description:
    "JetStream Mailer ensures 90% inboxing for your bulk emails with seamless integrations.",
};

export default function Home() {
  return (
    <main>
      <NavbarDemo />
      <Hero />
      <Footer />
    </main>
  );
}
