export default function BenefitCard({ title, description, icon }) {
  return (
    <div className="flex items-center justify-center flex-col text-center bg-white px-4 pb-12 py-16 relative z-10">
      <div className="bg-primary-purple p-6 rounded-full flex items-center justify-center absolute -top-11">
        <img src={icon} alt={title} />
      </div>
      <div className="flex items-center justify-center gap-4 flex-col">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
