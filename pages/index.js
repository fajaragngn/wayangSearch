import Head from "next/head";
// import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import Darkmode from "../components/Darkmode";
// import { ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/outline";
// import Image from "next/image";
import { useRef } from "react";
// import {Helmet} from "react-helmet";
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

    <div className="opa" >
      <div className="flex bgg opa flex-col items-center h-screen ">
        <Head>
          <title>Wayang</title>
          <meta
            name="WayangSearch"
            content="Kata kominfo kita harus buat search engine yg bisa menyaingi google, ya walaupun pakai API Google wkwk."
          />
          <link rel="icon" href="/favicon.ico" />
          <script src="/js/darkmode.js" type="text/javascript" />
        </Head>


        {/* header */}

        <header className="flex w-full p-5 justify-between text-sm text-gray-800">
          {/*left section*/}
          <div className="flex space-x-4 items-center font-Ubuntu">

          </div>

          {/*right section*/}
          <Darkmode />
        </header>





        {/*body*/}
        <form className="flex flex-col items-center pt-20 mt-20 flex-grow w-4/5">

          <img width="400" src="wayang2.png" className=" px-1" />

          <div
            className="flex w-full mt-5 pt-1 pb-1 hover:shadow-lg focus-within:shadow-sm max-w-md 
      border border-red-600 px-1 py-3 items-center sm:max-w-xl lg:max-w-2xl"
          >
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Cari yang gak ada . . ."
              className="flex-grow focus:outline-none"
            />
            <button onClick={search}>
              <SearchIcon className="icons h-5 mr-3 text-gray-700" />
            </button>
          </div>
          <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 font-Ubuntu">


          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
}
