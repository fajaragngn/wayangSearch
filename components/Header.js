import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <h1>Wayang</h1>

        <form className="flex flex-grow px-5 py-3 ml-10 mr-5 border boder-gray-200 rounded-full shadow-lg max-w-3xl items-center ">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none "
            type="text"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer tarnsition duration-100 transform hover:scale-125 "
            onClick={() => [(searchInputRef.current.value = "")]}
          />
          <button type="submit" onClick={search}>
            <SearchIcon className=" mb-1 h-5 hidden sm:inline-flex text-gray-500 tarnsition duration-100 transform hover:scale-125 " />
          </button>
        </form>
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
