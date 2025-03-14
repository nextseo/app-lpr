import React from "react";
interface pageProps {
  setPage: (test: number) => void;
}
const Page6: React.FC<pageProps> = () => {
  return (
    <div>
      <h2 className="text-2xl">
        โปรแกรมแสดง Level ของการออกกำลังกายที่ผู้ป่วยได้
      </h2>

      <div className="flex flex-col justify-center items-center ">
        {/* Card 1 */}
        <div className=" w-80 mt-8 bg-gray-200 border border-gray-400 rounded-md px-4 py-4 text-start text-sm">
          <p className="font-medium">Body position</p>

          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" disabled placeholder="xxx" /> Active transfer
            bed to chair
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" disabled placeholder="xxx" /> Sitting out of
            bed
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" disabled placeholder="xxx" /> Standing
          </span>
        </div>

        {/* Card 2 */}
        <div className=" mt-4 w-80  bg-gray-50 border border-gray-400 rounded-md px-4 py-4 text-start text-sm">
          <p className="font-medium">Physiotherapy</p>

          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" placeholder="xxx" /> Passive ROM
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" placeholder="xxx" /> Arm Cycling in bed or chair
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" placeholder="xxx" /> Walking with assistances
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" placeholder="xxx" /> NMES
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" placeholder="xxx" /> ADL
          </span>
        </div>

        {/* Card 3 */}
        <div className=" mt-4 w-80  bg-gray-50 border border-gray-400 rounded-md px-4 py-4 text-start text-sm">
          <p className="font-medium">MRCsum {`>`} 36 MRCsumLL {`>`} 18</p>

          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" placeholder="xxx" /> Active ROM
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" placeholder="xxx" /> Resistance training arms and lege
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" placeholder="xxx" /> Active leg
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" placeholder="xxx" /> Walking without assistances
          </span>
          <span className="flex items-center gap-2 mt-2">
            <input type="checkbox" placeholder="xxx" /> ADL
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page6;
