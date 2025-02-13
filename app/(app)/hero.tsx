"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export const Hero = () => {
  return (
    <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 5000 })]}>
      <CarouselContent>
        <CarouselItem>
          <div className="relative flex">
            <Image
              src="/hero-image_1.jpg"
              alt="hero"
              width={500}
              height={500}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-header/50">{""}</div>
            <div className="absolute z-50 flex flex-col self-center p-5 mx-auto gap-y-4 md:px-8">
              <h1 className="text-4xl text-background md:text-6xl">
                We&apos;re Always Here To Give Financial Help!
              </h1>
              <p className="text-sm text-background/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quis velit quae voluptas minus laborum.
              </p>
              <Button
                variant="secondary"
                className="p-6 md:w-fit md:self-center"
              >
                <span>Get Started</span>
                <ArrowRight />
              </Button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative flex flex-col justify-center text-center">
            <Image
              src="/hero-image_2.jpg"
              alt="hero"
              width={500}
              height={500}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-header/50">{""}</div>
            <div className="absolute z-50 flex flex-col self-center p-5 mx-auto gap-y-4 md:px-8">
              <h1 className="text-4xl text-background md:text-6xl">
                Build Your Financial Plan With Our Specialists
              </h1>
              <p className="text-sm text-background/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quis velit quae voluptas minus laborum.
              </p>
              <Button
                variant="secondary"
                className="p-6 md:w-fit md:self-center"
              >
                <span>Get Started</span>
                <ArrowRight />
              </Button>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
