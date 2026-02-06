export default function Header() {
  return (
    <header className="px-(--padding-x-mobile) py-10">
      <div className="flex items-center w-full justify-between">
        <a href="">
          <img src="/src/assets/logo.svg" alt="Logo" />
        </a>

        <div className="w-8 h-8 flex flex-col justify-center items-center cursor-pointer gap-1.5">
          <div className="bg-gray-400 h-1 w-full"></div>
          <div className="bg-gray-400 h-1 w-full"></div>
          <div className="bg-gray-400 h-1 w-full"></div>
        </div>
      </div>
    </header>
  );
}
