import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { MobileStickyCTA } from "@/components/site/mobile-cta";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
