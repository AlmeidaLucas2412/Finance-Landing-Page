"use client";

import { Heading } from "@/components/heading";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const TestimonialSection = () => {
  return (
    <section className="flex flex-col p-8 gap-y-8">
      <Heading introduction="Testimonial" title="Happy Customers" />
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000 })]}
        className="shadow-md border-b p-2 "
      >
        <CarouselContent>
          <CarouselItem>
            <TestimonialCard
              image="/robert.jpg"
              feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis velit quae voluptas minus laborum consequatur voluptates."
              name="Robert Smith"
              position="Marketing Manager"
            />
          </CarouselItem>
          <CarouselItem>
            <TestimonialCard
              image="/joshua.jpg"
              feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis velit quae voluptas minus laborum consequatur voluptates."
              name="Joshua Stone"
              position="Sales Manager"
            />
          </CarouselItem>
          <CarouselItem>
            <TestimonialCard
              image="/nicholas.jpg"
              feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis velit quae voluptas minus laborum consequatur voluptates."
              name="Nicholas Lewis"
              position="Product Manager"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};
