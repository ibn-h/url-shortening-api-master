export default function ShortenerForm() {
  return (
    <section className="px-(--padding-x-mobile) relative top-10 z-10">
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
    </section>
  );
}
