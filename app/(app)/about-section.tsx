import { Card } from "@/components/card";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { ChartNoAxesCombined, HandCoins, Receipt, Factory } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="flex flex-col px-4 py-8 gap-y-8" id="about">
      <Heading
        introduction="About Consul Corporation"
        title="More than 40M+ Trusted Our Financial & Consultation Instituition"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis velit quae voluptas minus laborum consequatur voluptates, voluptatibus quos, quia repellendus, quibusdam asperiores quas."
        start
      />
      <Button className="p-6 w-fit">
        <span>Learn More</span>
      </Button>
      <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-2">
        <Card
          icon={HandCoins}
          title="Professional Consultants"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit,"
        />
        <Card
          icon={ChartNoAxesCombined}
          title="Comprehensive Services"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit,"
          main
        />
        <Card
          icon={Receipt}
          title="A culture that Delivers"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit,"
        />
        <Card
          icon={Factory}
          title="Industry Experience"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit,"
        />
      </div>
      <div
        className="relative flex -m-4 gap-y-4 px-4 py-8"
        style={{
          backgroundImage: "url(/happy.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-foreground/60 z-10">{""}</div>
        <div className="z-20">
          <Heading
            introduction="About Consul Corporation"
            title="Quality Makes the Belief for Customers"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis velit quae voluptas minus laborum consequatur voluptates, voluptatibus quos, quia repellendus, quibusdam asperiores quas."
            emphasize
            start
          />
        </div>
      </div>
    </section>
  );
};
