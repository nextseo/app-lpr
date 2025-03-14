import React from "react";
interface pageProps {
  setPage: (test: number) => void;
}
const Page7: React.FC<pageProps> = () => {
  return (
    <div className="">
      <img src={`/images/login_2.png`} width={1000} height={1000} alt="" className="w-80 " />
    </div>
  );
};

export default Page7;
