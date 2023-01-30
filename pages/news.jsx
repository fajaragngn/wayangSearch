/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi';
// import SearchResult from '../components/SearchResult';
// import Pagination from '../components/Pagination';
import NotFound from '../components/notFound';
import Footer from '../components/Footer';
import User from '../components/User';
import HeadMeta from '../components/Head';
import { event } from '../lib/ga';
import randomString from '../lib/randomString';
// import Panelnya from '../components/Panelnya';
// import PeopleAlsoSearch from '../components/PeopleAlsoSearch';
// import RelatedSearch from '../components/RelatedSearch';
import NewsResults from '../components/News/NewsResults';

export function getServerSideProps(ctx) {
  const page = ctx.query.page || 1;
  const { q } = ctx.query;
  return { props: { q, page } };
}

export default function news(props) {
  const router = useRouter();

  const { q, page } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [input, setInput] = useState(props.q || q);

  const getSearch = async (q, pages) => {
    let get = await fetch(`/api/news?q=${q}`, {
      method: 'GET',
      headers: {
        'X-CSRF-TOKEN': randomString(32).toString(),
      },
    });
    if (get.ok) {
      let res = await get.json();
      return res;
    } else {
      return { status: 'failed' };
    }
  };

  useEffect(() => {
    if (!q) {
      router.push('/');
    }
    setIsLoading(true);
    getSearch(q, page).then((res) => {
      if (res.status === 'success') {
        setSearch(res);
        setInput(props.q);
        setIsLoading(false);
      } else {
        setSearch({ results: '' });
        setIsLoading(false);
      }
    });
  }, [router]);

  const handleSearch = (e) => {
    e.preventDefault();
    event({
      action: 'search2',
      params: {
        search_term: input,
      },
    });
    router.push({ query: { q: input, page: 1 } });
  };

  console.log(search);

  return (
    <>
      <HeadMeta title={q + ' | Gatotkaca Search'} />
      <div className="min-h-screen flex flex-col justify-between">
        <div className="px-3 pt-6 md:px-[2rem]">
          <div className="flex flex-col md:flex-row justify-between gap-6 text-center items-center  w-full">
            <div className="form-group flex flex-col md:flex-row items-center gap-4 md:gap-12 relative w-full">
              <Link href="/" passHref>
                <a href="#" className="text-2xl font-semibold">
                  GatotKaca
                </a>
              </Link>
              <form
                onSubmit={(e) => handleSearch(e)}
                className="w-full md:w-2/3 relative"
              >
                {/* <input
                  type="text"
                  className="h-12 w-full pl-5 pr-[3rem] py-2 bg-white rounded-full text-sm border border-slate-200 shadow-md focus:border focus:border-slate-500 focus:outline-none"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                /> */}
                <button
                  type="submit"
                  className="text-blue-700 absolute right-4 text-2xl b bottom-3 hover:text-blue-200"
                >
                  <FiSearch />
                </button>
              </form>
            </div>
            {/* <User /> */}
          </div>
          <div className="flex flex-row gap-6 text-sm mt-7 border-b border-slate-200">
            <a href={`/semua?q=${q}&page=1`} className="text-slate-400">
              Semua
            </a>
            <a href={`/images?q=${q}&page=1`} className="text-slate-400">
              Gambar
            </a>
            <a href="#" className="border-b-2 border-slate-500">
              Berita
            </a>
          </div>
        </div>
        {isLoading ? (
          <>
            <h2>Loading...</h2>
            <img
              src="data:image/jpeg;base64,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"
              className="text-center absolute left-[40%] top-[45%] w-24 md:w-48"
              alt="loading"
            />
          </>
        ) : search.results.length !== 0 ? (
          <>
            <div className="w-full min-h-screen md:px-3 py-6 md:px-[2rem] md:bg-[#f7f8fc]">
              <NewsResults data={search.results} />
            </div>
          </>
        ) : (
          <NotFound />
        )}
        <div className="pb-2">
          <Footer />
        </div>
      </div>
    </>
  );
}
