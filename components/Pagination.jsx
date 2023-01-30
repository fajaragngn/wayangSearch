import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Pagination() {
  const router = useRouter();
  const { q, page } = router.query;

  const [pages, setPages] = useState(page || 0);

  useEffect(() => {
    const { q, page } = router.query;
    if (page < 1) {
      handlePagination(1);
    }
    setPages(page);
  });

  const handlePagination = (e) => {
    router.push({ query: { q: q, page: e } });
  };

  return (
    <>
      <nav className="flex justify-center">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          {page > 1 && (
            <li>
              <button
                onClick={(e) => handlePagination(parseInt(pages) - 1)}
                className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid hover:text-white hover:bg-blue-400"
              >
                <FiChevronsLeft />
              </button>
            </li>
          )}

          <li>
            <button className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 items-center justify-center leading-tight relative border border-solid border-blue-400 text-black ">
              <h2>{!page ? 1 : pages}</h2>
            </button>
          </li>

          <li>
            <button
              onClick={(e) => handlePagination(parseInt(pages) + 1)}
              className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blue-400 text-black-400 hover:text-white hover:bg-blue-400"
            >
              <FiChevronsRight />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
