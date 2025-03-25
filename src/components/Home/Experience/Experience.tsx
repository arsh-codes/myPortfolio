import { Timeline } from "./Timeline";
import timelineData from "@/assets/data/timelineData";
export default function Experience() {
  return (
    <div className="mb-10 h-fit w-full">
      <section className="mx-auto flex w-11/12 flex-col gap-0">
        {/* Heading container */}
        <div className="bg-background flex flex-col gap-2 px-10 pt-10">
          <h1 className="text-3xl font-bold lg:text-4xl">How I Got Here</h1>
          <p className="text-muted-foreground text-lg">
            A Timeline of My Professional and Academic Milestones
          </p>
        </div>
        <div>
          <Timeline data={timelineData} />
        </div>
      </section>
    </div>
  );
}
