import { IconCloudData } from "@/components/Home/skills/IconCloudData";

export default function Skills() {
  // Skills Data

  return (
    <div className="relative flex h-fit w-full border lg:h-screen">
      <section className="relative mx-auto flex w-11/12 flex-col items-center gap-6 p-4">
        <div>
          {/* Title */}
          <h1 className="text-3xl font-bold text-neutral-800 lg:text-4xl dark:text-neutral-200">
            💻 What’s in My Dev Arsenal?
          </h1>
          <IconCloudData />
        </div>

        {/* Skills Grid */}
        <section className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"></section>
      </section>
    </div>
  );
}
