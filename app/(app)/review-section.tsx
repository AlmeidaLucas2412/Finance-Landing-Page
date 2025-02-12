export const ReviewSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center py-20 -my-4 text-center text-background"
      style={{
        backgroundImage: "url(/hands.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-10 bg-emphasis/90">{""}</div>
      <span className="z-20 font-semibold uppercase">
        Great reviews for our services
      </span>
      <h2 className="z-20 text-4xl font-semibold">Technical Statistics</h2>
      <div className="z-20 flex flex-col mt-6 gap-y-4">
        <div className="flex flex-col gap-y-1">
          <span className="text-5xl font-bold tracking-wide">60</span>
          <span className="text-xs font-bold uppercase">
            Year of Experience
          </span>
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="text-5xl font-bold tracking-wide">9,200</span>
          <span className="text-xs font-bold uppercase">
            Satisfied Customers
          </span>
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="text-5xl font-bold tracking-wide">5,800</span>
          <span className="text-xs font-bold uppercase">Project Completed</span>
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="text-5xl font-bold tracking-wide">100</span>
          <span className="text-xs font-bold uppercase">Get Awards</span>
        </div>
      </div>
    </section>
  );
};
