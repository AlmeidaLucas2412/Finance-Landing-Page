import { cn } from "@/lib/utils";

type Props = {
  introduction: string;
  title: string;
  description?: string;
  start?: boolean;
  emphasize?: boolean;
};

export const Heading = ({
  introduction,
  title,
  description,
  start,
  emphasize,
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-4 items-center text-center",
        start && "items-start text-start"
      )}
    >
      <span
        className={cn(
          "text-sm font-bold uppercase text-description",
          emphasize && "text-background"
        )}
      >
        {introduction}
      </span>
      <h2
        className={cn("text-4xl font-semibold", emphasize && "text-emphasis")}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("text-description", emphasize && "text-background")}>
          {description}
        </p>
      )}
    </div>
  );
};
