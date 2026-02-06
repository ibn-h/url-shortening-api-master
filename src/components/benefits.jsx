import BenefitCard from "./benefitCard";

export default function Benefits() {
  return (
    <section className="px-(--padding-x-mobile) bg-gray-100 py-(--padding-y-mobile)">
      <div className="flex items-center justify-center flex-col gap-25 overflow-hidden">
        <div className="flex items-center justify-center flex-col text-center gap-6">
          <h2 className="text-2xl font-bold">Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with out advanced
            statistics dashboard.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-25 relative">
          <BenefitCard
            icon="src/assets/icon-brand-recognition.svg"
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          />

          <div className="bg-primary-blue h-full w-2 absolute top-20 z-9"></div>

          <BenefitCard
            icon="src/assets/icon-detailed-records.svg"
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />

          <BenefitCard
            icon="src/assets/icon-fully-customizable.svg"
            title="Fully Customizable"
            description="Customize the appearance of your links to match your brand identity. Make your links stand out with a unique look."
          />
        </div>
      </div>
    </section>
  );
}
