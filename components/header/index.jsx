import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 h-[13vh] flex justify-center items-center">
      <div className="container mx-auto flex items-center justify-between	">
        <Link
          href={"/"}
          className="text-white text-xl hover:text-yellow-400 transition-all duration-200"
        >
          Nazanin
        </Link>
        <nav>
          <ul className="flex justify-start items-center gap-8">
            <li>
              <Link
                className="transition-all duration-200 hover:bg-yellow-500 hover:text-black bg-white text-blue-500 flex justify-center items-center w-20 h-8 rounded-md"
                href={"/"}
              >
                خانه
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-200 hover:bg-yellow-500 hover:text-black bg-white text-blue-500 flex justify-center items-center w-20 h-8  rounded-md"
                href={"/movies"}
              >
                فیلم ها
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
