import React from "react";
interface pageProps {
  setPage: (test: number) => void;
}
const Page8: React.FC<pageProps> = ({ setPage }) => {
  const handleClick = ()=>{
    setPage(9)
  }
  
    return (
    <div className="">
      <div className="flex justify-center">
        <img
          src={`/images/page_8.webp`}
          width={1000}
          height={1000}
          alt=""
          className="w-80 "
        />
      </div>

      <div className="flex flex-row gap-4 justify-center">
        <button onClick={handleClick} className=" mt-6 border bg-gray-200 border-gray-600 px-4 py-2 rounded-md">
          YES
        </button>
        <button onClick={handleClick} className=" mt-6 border bg-gray-200 border-gray-600 px-4 py-2 rounded-md">
          NO
        </button>
      </div>
    </div>
  );
};

export default Page8;
