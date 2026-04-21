import { Metadata } from "next";
import { pageSeo, courseJsonLd } from "@/lib/seo";
import { additionalTrainingCourses } from "@/lib/content/training";
import { CoursePageTemplate } from "@/components/academy/CoursePageTemplate";

const course = additionalTrainingCourses.find(
  (c) => c.slug === "energy-audit-essentials",
)!;

export const metadata: Metadata = pageSeo({
  title: course.title,
  description: course.description.slice(0, 155),
  path: "/academy/energy-audit-essentials",
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            courseJsonLd(course.title, course.description),
          ),
        }}
      />
      <CoursePageTemplate course={course} />
    </>
  );
}
