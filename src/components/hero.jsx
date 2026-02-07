export default function Hero() {
  return (
    <section className="px-(--padding-x-mobile) py-(--padding-y-mobile) overflow-hidden desktop:px-(--padding-x-desktop) desktop:py-(--padding-y-desktop)">
      <div className="flex flex-col items-center justify-center gap-10 w-full desktop:gap-30">
        <div className="flex items-center justify-center flex-col w-full desktop:flex-row-reverse desktop:w-full desktop:justify-between desktop:gap-20">
          <div className="flex items-center justify-center">
            <img
              src="/src/assets/illustration-working.svg"
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

        <div className="w-full p-6 desktop:p-10 desktop:px-12 bg-primary-purple text-white rounded-lg gap-3 flex items-center justify-center flex-col bg-[url('src/assets/bg-shorten-mobile.svg')] bg-no-repeat bg-top-right desktop:flex-row desktop:bg-[url('src/assets/bg-shorten-desktop.svg')] desktop:bg-cover">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="focus:ring-primary-blue focus:outline-none focus:ring-2 w-full bg-white text-gray-600 p-3 rounded-lg text-left desktop:w-auto desktop:flex-1 desktop:px-5 desktop:py-3"
          />
          <button className="buttonHover bg-primary-blue text-white p-3 rounded-lg w-full font-semibold desktop:w-fit desktop:px-7 desktop:py-3 cursor-pointer">
            Shorten It!
          </button>
        </div>
      </div>
    </section>
  );
}
