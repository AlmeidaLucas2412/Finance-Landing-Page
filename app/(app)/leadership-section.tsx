import { Heading } from "@/components/heading";
import { LeadershipCard } from "@/components/leadership-card";

export const LeaderShipSection = () => {
  return (
    <section className="flex flex-col px-4 py-8 gap-y-10">
      <Heading
        introduction="Meet our brillian minds"
        title="Our Leadership Team"
      />
      <div className="flex flex-col gap-y-8 md:flex-row md:flex-wrap md:justify-around">
        <LeadershipCard
          image="/jason.jpg"
          name="Jason Smith"
          position="President & CEO"
          description="I am an ambitious workaholic, but apart from that, pretty simple person."
        />
        <LeadershipCard
          image="/jeffrey.jpg"
          name="Jeffrey Rockenson"
          position="Executive vice president"
          description="I am an ambitious workaholic, but apart from that, pretty simple person."
        />
        <LeadershipCard
          image="/maria.jpg"
          name="Maria Simpson"
          position="General Manager"
          description="I am an ambitious workaholic, but apart from that, pretty simple person."
        />
        <LeadershipCard
          image="/tom.jpg"
          name="Tom Hills"
          position="Strategic Consultant"
          description="I am an ambitious workaholic, but apart from that, pretty simple person."
        />
      </div>
    </section>
  );
};
