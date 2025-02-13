import { BlogCard } from "@/components/blog-card";
import { Heading } from "@/components/heading";

export const BlogSection = () => {
  return (
    <section className="flex flex-col px-4 py-8 gap-y-6">
      <Heading introduction="Our blog" title="Recent From Blog" />
      <div className="flex flex-col gap-y-8 md:flex-row md:flex-wrap md:justify-evenly">
        <BlogCard
          image="/workteam-1.jpg"
          postedBy="Admin"
          date="Feb. 13, 2025"
          comments="3"
          title="Incorporation is a Big Milestone for Your Business"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <BlogCard
          image="/workteam-2.jpg"
          postedBy="Admin"
          date="Feb. 14, 2025"
          comments="4"
          title="Incorporation is a Big Milestone for Your Business"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <BlogCard
          image="/workteam-3.jpg"
          postedBy="Admin"
          date="Feb. 15, 2025"
          comments="5"
          title="Incorporation is a Big Milestone for Your Business"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <BlogCard
          image="/workteam-4.jpg"
          postedBy="Admin"
          date="Feb. 16, 2025"
          comments="6"
          title="Incorporation is a Big Milestone for Your Business"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
    </section>
  );
};
