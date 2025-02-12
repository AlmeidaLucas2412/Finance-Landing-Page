import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  main?: boolean;
  services?: boolean;
};

export const Card = ({
  icon: Icon,
  title,
  description,
  main,
  services,
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-4 p-4 rounded-md shadow-md",
        main && "bg-emphasis",
        services && "items-center text-center"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-full size-16 bg-emphasis/20",
          main && "bg-background/20",
          services && "bg-transparent"
        )}
      >
        <Icon
          className={cn(
            "stroke-current size-8 text-emphasis",
            main && "text-background",
            services && "size-14"
          )}
          strokeWidth={1}
        />
      </div>
      <span className={cn("text-xl font-semibold", main && "text-background")}>
        {title}
      </span>
      <p className={cn("text-description", main && "text-background")}>
        {description}
      </p>
    </div>
  );
};
