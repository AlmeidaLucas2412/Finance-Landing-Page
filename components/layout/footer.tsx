import { ArrowRight, CalendarDays, Mail, Map, Phone, User } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer
      className="relative flex flex-col px-4 py-8 gap-y-6 text-background"
      style={{
        backgroundImage: "url(/coworkers.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-10 bg-foreground/80">{""}</div>
      <div className="z-20 flex flex-col gap-y-8 xl:flex-row xl:justify-center xl:gap-x-10">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col gap-y-1">
            <h1 className="text-2xl font-bold tracking-wide">
              Consul<span className="text-emphasis">Corp.</span>
            </h1>
            <span className="text-xs uppercase text-description">
              Finance & Consultation
            </span>
          </div>
          <p className="z-20">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
            quo!
          </p>
          <div className="flex gap-x-1">
            <div className="flex items-center justify-center rounded-md size-8 bg-emphasis">
              <a href="#">
                <Image
                  src="/twitter.svg"
                  alt="twitter"
                  width={20}
                  height={20}
                  className="object-cover p-1 size-6"
                  style={{ filter: "invert(1)" }}
                />
              </a>
            </div>
            <div className="flex items-center justify-center rounded-md size-8 bg-emphasis">
              <a href="#">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                  className="object-cover p-1 size-6"
                  style={{ filter: "invert(1)" }}
                />
              </a>
            </div>
            <div className="flex items-center justify-center rounded-md size-8 bg-emphasis">
              <a href="#">
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  width={20}
                  height={20}
                  className="object-cover p-1 size-8"
                  style={{ filter: "invert(1)" }}
                />
              </a>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-y-2">
          <span className="font-semibold">Services</span>
          <li className="flex items-center gap-x-2">
            <ArrowRight className="size-4" />
            <a href="#">Financial Planning</a>
          </li>
          <li className="flex items-center gap-x-2">
            <ArrowRight className="size-4" />
            <a href="#">Investments Management</a>
          </li>
          <li className="flex items-center gap-x-2">
            <ArrowRight className="size-4" />
            <a href="#">Business Loan</a>
          </li>
          <li className="flex items-center gap-x-2">
            <ArrowRight className="size-4" />
            <a href="#">Taxes Consulting</a>
          </li>
          <li className="flex items-center gap-x-2">
            <ArrowRight className="size-4" />
            <a href="#">Insurance Consulting</a>
          </li>
          <li className="flex items-center gap-x-2">
            <ArrowRight className="size-4" />
            <a href="#">Risk Management</a>
          </li>
        </ul>
        <div className="flex flex-col gap-y-3">
          <span className="font-semibold">Recent Posts</span>
          <div className="flex items-center gap-x-4">
            <Image
              src="/workteam-1.jpg"
              alt="workteam"
              width={70}
              height={70}
              className="object-cover rounded-md size-12"
            />
            <div className="flex flex-col gap-y-1">
              <div className="flex gap-x-1 text-background/70">
                <CalendarDays className="size-4" />
                <span className="text-xs">Jan. 28, 2025</span>
                <User className="size-4" />
                <span className="text-xs">Admin</span>
              </div>
              <span className="text-sm font-medium">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <Image
              src="/workteam-2.jpg"
              alt="workteam"
              width={70}
              height={70}
              className="object-cover rounded-md size-12"
            />
            <div className="flex flex-col gap-y-1">
              <div className="flex gap-x-1 text-background/70">
                <CalendarDays className="size-4" />
                <span className="text-xs">Jan. 28, 2025</span>
                <User className="size-4" />
                <span className="text-xs">Admin</span>
              </div>
              <span className="text-sm font-medium">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <span className="font-semibold">Have a question?</span>
          <div className="flex items-center gap-x-4">
            <Map className="size-4" />
            <span className="text-sm">
              123 Street, New York, NY 10012, United States
            </span>
          </div>
          <div className="flex items-center gap-x-4">
            <Phone className="size-4" />
            <span className="text-sm">+1 123 456 7890</span>
          </div>
          <div className="flex items-center gap-x-4">
            <Mail className="size-4" />
            <span className="text-sm">info@consul.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
