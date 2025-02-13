import { Button } from "@/components/ui/button";

export const TakeoffSection = () => {
  return (
    <section
      className="relative flex flex-col items-center px-4 py-8 text-background md:py-12"
      style={{
        backgroundImage: "url(/workteam-3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-10 bg-emphasis/90">{""}</div>
      <div className="z-20 flex flex-col gap-y-6 md:flex-row md:gap-x-8 md:items-center">
        <div className="flex flex-col gap-y-2">
          <span className="text-sm font-bold uppercase text-background tracing-wide">
            Prepare for takeoff
          </span>
          <h2 className="text-4xl font-semibold md:text-2xl">
            Looking for business opportunity?
          </h2>
        </div>
        <Button variant="secondary" className="p-6 w-fit md:p-8">
          <span>Get Started</span>
        </Button>
      </div>
    </section>
  );
};
