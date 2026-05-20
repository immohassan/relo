import { Hero } from "@/components/site/sections/hero";
import { DayInLife } from "@/components/site/sections/day-in-life";
import { HowItWorks } from "@/components/site/sections/how-it-works";
import { Shift } from "@/components/site/sections/shift";
import { Bonuses } from "@/components/site/sections/bonuses";
import { Proof } from "@/components/site/sections/proof";
import { FAQ } from "@/components/site/sections/faq";
import { WaitlistCTA } from "@/components/site/sections/waitlist-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DayInLife />
      <HowItWorks />
      <Shift />
      <Bonuses />
      <Proof />
      <FAQ />
      <WaitlistCTA />
    </>
  );
}
