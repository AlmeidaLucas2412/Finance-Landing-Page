import { CalendarDays, MessageCircle, User } from "lucide-react";
import Image from "next/image";

type Props = {
  image: string;
  postedBy: string;
  date: string;
  comments: string;
  title: string;
  subtitle: string;
};

export const BlogCard = ({
  image,
  postedBy,
  date,
  comments,
  title,
  subtitle,
}: Props) => {
  return (
    <div className="flex flex-col gap-y-4 md:w-[45%]">
      <Image src={image} alt={title} width={500} height={500} />
      <div className="flex flex-col p-4 gap-y-3">
        <div className="flex m:gap-x-3 gap-x-2">
          <div className="flex m:gap-x-1 gap-x-0">
            <User className="stroke-current size-4 text-emphasis fill-emphasis" />
            <span className="text-xs uppercase text-description">
              {postedBy}
            </span>
          </div>
          <div className="flex m:gap-x-1 gap-x-0">
            <CalendarDays className="stroke-current size-4 text-emphasis" />
            <span className="text-xs text-description">{date}</span>
          </div>
          <div className="flex m:gap-x-1 gap-x-0">
            <MessageCircle className="stroke-current size-4 text-emphasis fill-emphasis" />
            <span className="text-xs uppercase text-description">
              {comments} comments
            </span>
          </div>
        </div>
        <h2 className="text-xl font-medium">{title}</h2>
        <span className="text-sm text-description">{subtitle}</span>
      </div>
    </div>
  );
};
