import { Header } from "@/components/layout/header";
import { Hero } from "./hero";
import { AboutSection } from "./about-section";
import { ServicesSection } from "./services-section";
import { StudiesSection } from "./studies-section";
import { ReviewSection } from "./review-section";
import { LeaderShipSection } from "./leadership-section";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StudiesSection />
      <ReviewSection />
      <LeaderShipSection />
    </>
  );
}
