const benefitsContent = [
  {
    icon: "src/assets/icon-brand-recognition.svg",
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: "src/assets/icon-detailed-records.svg",
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    icon: "src/assets/icon-fully-customizable.svg",
    title: "Fully Customizable",
    description:
      "Customize the appearance of your links to match your brand identity. Make your links stand out with a unique look.",
  },
];

export default function Benefits() {
  return (
    <section className="px-(--padding-x-mobile) bg-gray-100 py-(--padding-y-mobile) relative desktop:px-(--padding-x-desktop) desktop:py-40">
      <div className="flex items-center justify-center flex-col gap-25 overflow-hidden">
        <div className="flex items-center justify-center flex-col text-center gap-6">
          <h2 className="text-2xl font-bold desktop:text-4xl">
            Advanced Statistics
          </h2>
          <p>
            Track how your links are performing across the web with out advanced
            statistics dashboard.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center relative gap-25 desktop:flex-row desktop:items-start desktop:gap-15">
          <div className="bg-primary-blue w-2 h-screen absolute desktop:w-full desktop:h-2 z-10 top-0 desktop:top-1/3"></div>
          {benefitsContent.map((benefit, index) => (
            <div
              key={index}
              style={{ "--offset": `${index * 40}px` }}
              className="desktop:mt-(--offset) min-h-72.75 rounded-lg flex items-center justify-center flex-col text-center bg-white px-4 pb-12 py-16 relative z-10 desktop:px-8 desktop:text-left desktop:items-start desktop:justify-end"
            >
              <div className="bg-primary-purple p-6 rounded-full flex items-center justify-center absolute -top-11">
                <img src={benefit.icon} alt={benefit.title} />
              </div>
              <div className="flex items-center justify-center gap-4 flex-col desktop:items-start desktop:justify-start">
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
