import Image from "next/image";

type Props = {
  image: string;
  name: string;
  position: string;
  description: string;
};

export const LeadershipCard = ({
  image,
  name,
  position,
  description,
}: Props) => {
  return (
    <div className="flex flex-col items-center p-6 mt-10 text-center rounded-md gap-y-3 bg-emphasis md:w-[45%]">
      <div className="flex items-center justify-center p-1 -mt-20 rounded-full size-36 bg-background">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="object-cover rounded-full size-32"
        />
      </div>
      <div className="flex flex-col mt-4 text-center gap-y-1">
        <span className="text-xl text-background">{name}</span>
        <span className="text-xs tracking-wider uppercase text-background">
          {position}
        </span>
      </div>
      <div className="flex gap-x-2">
        <div className="flex items-center justify-center rounded-full size-8 bg-background/20">
          <a href="#">
            <Image
              src="/twitter.svg"
              alt="Twitter"
              width={20}
              height={20}
              style={{ filter: "invert(1)" }}
            />
          </a>
        </div>
        <div className="flex items-center justify-center rounded-full size-8 bg-background/20">
          <a href="#">
            <Image
              src="/facebook.svg"
              alt="Facebook"
              width={20}
              height={20}
              style={{ filter: "invert(1)" }}
            />
          </a>
        </div>
        <div className="flex items-center justify-center rounded-full size-8 bg-background/20">
          <a href="#">
            <Image
              src="/google.svg"
              alt="Google"
              width={24}
              height={24}
              style={{ filter: "invert(1)" }}
            />
          </a>
        </div>
        <div className="flex items-center justify-center rounded-full size-8 bg-background/20">
          <a href="#">
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={28}
              height={28}
              style={{ filter: "invert(1)" }}
            />
          </a>
        </div>
      </div>
      <p className="text-background/70">{description}</p>
    </div>
  );
};
