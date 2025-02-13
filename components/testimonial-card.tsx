import { Quote } from "lucide-react";
import Image from "next/image";

type Props = {
  image: string;
  feedback: string;
  name: string;
  position: string;
};

export const TestimonialCard = ({ image, feedback, name, position }: Props) => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex items-center justify-center rounded-full size-10 bg-emphasis">
        <Quote stroke="white" fill="white" className="p-1" />
      </div>
      <span className="text-description">{feedback}</span>
      <div className="flex items-center gap-x-4">
        <Image
          src={image}
          alt={name}
          width={70}
          height={70}
          className="object-cover rounded-full"
        />
        <div className="flex flex-col gap-y-1">
          <span className="text-lg font-medium text-emphasis">{name}</span>
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
};
