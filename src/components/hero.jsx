export default function Hero() {
  return (
    <section className="px-(--padding-x-mobile) py-(--padding-y-mobile) overflow-hidden desktop:px-(--padding-x-desktop) desktop:py-(--padding-y-desktop)">
      <div className="flex flex-col items-center justify-center gap-10 w-full desktop:gap-30">
        <div className="flex items-center justify-center flex-col w-full desktop:flex-row-reverse desktop:w-full desktop:justify-between desktop:gap-20">
          <div className="flex items-center justify-center">
            <img
              src="src/assets/illustration-working.svg"
              alt="Person working on desk"
              className="w-115 left-15 relative h-auto max-w-none desktop:w-175"
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-6 desktop:items-start desktop:text-left desktop:justify-start desktop:max-w-125">
            <h1 className="text-4xl font-bold desktop:text-6xl desktop:leading-tight">
              More than just shorter links
            </h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <a
              href="/"
              className="bg-primary-blue text-white px-7 py-2.5 rounded-3xl"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
