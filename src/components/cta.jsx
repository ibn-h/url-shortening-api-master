export default function CTA() {
  return (
    <section className="px-(--padding-x-mobile) py-(--padding-y-mobile) bg-primary-purple text-white bg-[url('src/assets/bg-boost-desktop.svg')]  lg:bg-[url('src/assets/bg-boost-mobile.png')] bg-no-repeat bg-cover">
      <div className="flex items-center flex-col justify-center text-center gap-4">
        <h2 className="text-2xl font-bold">Boost your links today</h2>
        <a
          href="/"
          className="bg-primary-blue text-white px-7 py-2.5 rounded-3xl"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
