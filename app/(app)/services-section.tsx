import { Card } from "@/components/card";
import { Heading } from "@/components/heading";
import {
  BadgePercent,
  Calculator,
  ChartCandlestick,
  ChartNoAxesCombined,
  Handshake,
  ShieldCheck,
} from "lucide-react";

export const ServicesSection = () => {
  return (
    <section className="flex flex-col p-4 gap-y-4">
      <Heading introduction="Services" title="Our Exclusive Services" />
      <div className="flex flex-col gap-y-4 md:flex-row md:flex-wrap">
        <Card
          icon={Calculator}
          title="Financial Planning"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          services
        />
        <Card
          icon={ChartCandlestick}
          title="Investments Management"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          services
        />
        <Card
          icon={Handshake}
          title="Business Loan"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          services
        />
        <Card
          icon={BadgePercent}
          title="Taxes Consulting"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          services
        />
        <Card
          icon={ShieldCheck}
          title="Insurance Consulting"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          services
        />
        <Card
          icon={ChartNoAxesCombined}
          title="Risk Management"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          services
        />
      </div>
    </section>
  );
};
