export default function CTA() {
  return (
    <section className="desktop:px-(--padding-x-desktop) desktop:py-(--padding-y-desktop) px-(--padding-x-mobile) py-(--padding-y-mobile) bg-primary-purple text-white bg-[url('src/assets/bg-boost-desktop.svg')] bg-no-repeat bg-cover">
      <div className="flex items-center flex-col justify-center text-center gap-4 desktop:gap-8">
        <h2 className="text-2xl font-bold desktop:text-4xl">
          Boost your links today
        </h2>
        <a
          href="/"
          className="buttonHover bg-primary-blue text-white px-7 py-2.5 rounded-3xl"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
