export default function ShortenForm() {
  return (
    <div className="w-full p-6 bg-primary-purple text-white rounded-lg gap-3 flex items-center justify-center flex-col bg-[url('src/assets/bg-shorten-mobile.svg')] bg-no-repeat bg-top-right">
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="w-full bg-white text-gray-600 p-3 rounded-lg text-left"
      />
      <button className="bg-primary-blue text-white p-3 rounded-lg w-full font-semibold">
        Shorten It!
      </button>
    </div>
  );
}
