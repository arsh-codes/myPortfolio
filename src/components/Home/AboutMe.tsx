import aboutMeImage from "@/assets/media/aboutMeImage.jpg";

export default function AboutMe() {
  return (
    <div
      className="relative flex h-fit w-full items-center justify-center lg:h-screen"
      id="about"
    >
      <div className="relative mx-auto flex h-full w-11/12 flex-col gap-10 py-12 lg:flex-row lg:items-center">
        {/* Image Section */}
        <section className="relative flex w-full flex-col items-center justify-center lg:w-1/3">
          <div className="relative">
            <div className="absolute -right-3 -bottom-3 h-full w-full rounded-lg bg-gradient-to-r from-emerald to-cyan opacity-70"></div>
            <img
              src={aboutMeImage}
              alt="Arshdeep Singh"
              className="relative w-72 rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02] lg:w-80"
            />
          </div>
        </section>
        {/* Text section */}
        <section className="relative flex w-full flex-col items-center justify-center p-4 text-left lg:w-2/3">
          <h2 className="text-2xl font-bold text-neutral-800 lg:text-3xl dark:text-neutral-200">
            ⚡ Powered by Code, Sustained by Coffee ☕, Driven by Curiosity! 🚀
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Hey there! 👋 I'm{" "}
              <span className="text-emerald font-semibold">Arshdeep Singh</span>
              , a Full Stack Developer from India who writes code, fixes bugs
              🐛, and occasionally questions reality when things break for no
              reason.
            </p>
            <p>
              I work with{" "}
              <span className="text-cyan font-semibold">
                MongoDB, Express, React, Node.js, TypeScript, and Tailwind CSS
              </span>{" "}
              🛠️, building clean, efficient, and user-friendly applications.
              Whether it's crafting smooth UIs or making sure the backend
              doesn't catch fire, I enjoy the challenge.
            </p>
            <p>
              Outside of coding, I believe in{" "}
              <span className="text-emerald font-semibold">
                staying active, eating well, and staying at my best, inside and
                out
              </span>
              . You'll find me at the gym 🏋🏽, learning something new 📚, or
              having conversations with interesting people—I love hearing
              different perspectives and stories. 🎙️
            </p>
            <p>
              When I’m not staring at a screen full of errors, I’m probably
              tinkering with a side project 💻, catching up on tech trends 📈,
              gaming 🎮, or listening to podcasts 🎧.
            </p>
            <p className="font-medium italic">
              Also, coffee. Lots of coffee. ☕❣️
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
