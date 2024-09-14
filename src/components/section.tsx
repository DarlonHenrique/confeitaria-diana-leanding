import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLDivElement> & {
  heading: string;
};

const Section = ({ heading, className, children, ...props }: SectionProps) => {
  return (
    <section
      className={cn(
        "flex flex-col text-center container mx-auto gap-8 py-8 sm:gap-16 sm:py-16",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-serif text-accent font-bold">{heading}</h2>
      <div className="px-4 sm:px-0 text-left">{children}</div>
    </section>
  );
};

export { Section };
