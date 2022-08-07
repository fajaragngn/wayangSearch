import Head from "next/head";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center h-screen ">
      <Head>
        <title>Wayang</title>
        <meta
          name="WayangSearch"
          content="Kata kominfo kita harus buat search engine yg bisa menyaingi google, ya walaupun pakai API Google wkwk."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*body*/}
      <form className="flex flex-col items-center pt-3 flex-grow w-4/5">
        <Image
          src="../public/wayang.png"
          height={207}
          width={700}
          priority
        />

        <div
          className="flex w-full mt-5 pt-1 pb-1 hover:shadow-lg focus-within:shadow-lg max-w-md 
      border border-purple-600 px-1 py-3 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <button onClick={search}>
            <SearchIcon className="h-5 mr-3 text-gray-700" />
          </button>
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 font-Ubuntu">
          
            
        </div>
      </form>
    </div>
  );
}
