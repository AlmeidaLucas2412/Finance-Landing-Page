import { Hero } from "./hero";
import { AboutSection } from "./about-section";
import { ServicesSection } from "./services-section";
import { StudiesSection } from "./studies-section";
import { ReviewSection } from "./review-section";
import { LeaderShipSection } from "./leadership-section";
import { TestimonialSection } from "./testimonial-section";
import { BlogSection } from "./blog-section";
import { TakeoffSection } from "./takeoff-section";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StudiesSection />
      <ReviewSection />
      <LeaderShipSection />
      <TestimonialSection />
      <BlogSection />
      <TakeoffSection />
    </>
  );
}
