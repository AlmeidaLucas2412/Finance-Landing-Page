import { Heading } from "@/components/heading";
import Image from "next/image";

export const StudiesSection = () => {
  return (
    <section className="flex flex-col p-4 gap-y-4">
      <Heading
        introduction="Case Studies"
        title="We Take Every Case Studies Very Seriously"
      />
      <div className="flex flex-col">
        <div className="relative flex flex-col items-center justify-end -mx-4 overflow-hidden">
          <div className="absolute inset-0 bg-foreground/20">{""}</div>
          <Image
            src="/workteam-1.jpg"
            alt="hero"
            width={500}
            height={500}
            className="object-cover w-full"
          />
          <span className="absolute text-xl font-semibold text-background bottom-2">
            Business Finance Consulting
          </span>
        </div>
        <div className="relative flex flex-col items-center justify-end -mx-4 overflow-hidden">
          <div className="absolute inset-0 bg-foreground/20">{""}</div>
          <Image
            src="/workteam-2.jpg"
            alt="hero"
            width={500}
            height={500}
            className="object-cover w-full"
          />
          <span className="absolute text-xl font-semibold text-background bottom-2">
            Business Finance Consulting
          </span>
        </div>
        <div className="relative flex flex-col items-center justify-end -mx-4 overflow-hidden">
          <div className="absolute inset-0 bg-foreground/20">{""}</div>
          <Image
            src="/workteam-3.jpg"
            alt="hero"
            width={500}
            height={500}
            className="object-cover w-full"
          />
          <span className="absolute text-xl font-semibold text-background bottom-2">
            Business Finance Consulting
          </span>
        </div>
        <div className="relative flex flex-col items-center justify-end -mx-4 overflow-hidden">
          <div className="absolute inset-0 bg-foreground/20">{""}</div>
          <Image
            src="/workteam-4.jpg"
            alt="hero"
            width={500}
            height={500}
            className="object-cover w-full"
          />
          <span className="absolute text-xl font-semibold text-background bottom-2">
            Business Finance Consulting
          </span>
        </div>
      </div>
    </section>
  );
};
