"use client";
import { useState } from "react";
import Page1 from "./components/Page1";
import Page3 from "./components/Page3";
import Page2 from "./components/Page2";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";
import Page9 from "./components/Page9";
import Page10 from "./components/Page10";
import Page11 from "./components/Page11";
import Page12 from "./components/Page12";
import Page13 from "./components/Page13";
import Page14 from "./components/Page14";


export default function Home() {
  const [page, setPage] = useState<number>(0);

  const handleBack = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < 14) {
      setPage(page + 1);
    } else {
      setPage(14);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-full   container mx-auto my-10 ">
        {page > 0 && (
          <div className=" mb-5 flex gap-4 items-center">
            <p className=" text-lg ">หน้าที่ : {page} / 13</p>
            <button
              onClick={handleBack}
              className=" border-2 hover:bg-blue-200 border-blue-500 px-4 py-1 rounded-md"
            >
              กลับก่อนหน้านี้
            </button>
            {page !== 1 && page !== 2 &&  page !== 3 && page !== 4 && page !== 5 && page !== 8 && page !== 13 && page !== 14  && (
              <button
                onClick={handleNext}
                className=" border-2 hover:bg-red-700 bg-red-500 text-white border-red-500 px-4 py-1 rounded-md"
              >
                หน้าถัดไป
              </button>
            )}
          </div>
        )}

        <div className="border w-10/12 border-gray-300 px-6 lg:px-14 py-6 lg:py-14 bg-gray-100 rounded-md  text-center  ">
          {page === 0 && (
            <div className="flex flex-col gap-4 items-center justify-center  ">
              <h1 className="text-4xl font-bold ">
                ICU Physical Therapy Protocol
              </h1>
              <button
                onClick={() => setPage(1)}
                className="mt-10 border-2 hover:bg-red-200 border-red-500 px-4 py-2 rounded-md"
              >
                Start Protocol
              </button>
            </div>
          )}
          {/* Page 1 */}
          {page === 1 && <Page1 setPage={setPage} />}
          {/* Page 2 */}
          {page === 2 && <Page2 setPage={setPage} />}
          {/* Page 3 */}
          {page === 3 && <Page3 setPage={setPage} />}

          {/* Page 4 */}
          {page === 4 && <Page4 setPage={setPage} />}
          {/* Page 5 */}
          {page === 5 && <Page5 setPage={setPage} />}
          {/* Page 6 */}
          {page === 6 && <Page6 setPage={setPage} />}
          {/* Page 7 */}
          {page === 7 && <Page7 setPage={setPage} />}
          {/* Page 8 */}
          {page === 8 && <Page8 setPage={setPage} />}
          {/* Page 9 */}
          {page === 9 && <Page9 setPage={setPage} />}
          {/* Page 10 */}
          {page === 10 && <Page10 setPage={setPage} />}
          {/* Page 11 */}
          {page === 11 && <Page11 setPage={setPage} />}
          {/* Page 12 */}
          {page === 12 && <Page12 setPage={setPage} />}
          {/* Page 13 */}
          {page === 13 && <Page13 setPage={setPage} />}
          {/* Page 14 */}
          {page === 14 && <Page14 />}
        </div>
      </div>
    </div>
  );
}
