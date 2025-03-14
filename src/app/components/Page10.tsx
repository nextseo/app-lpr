import React from "react";

interface pageProps {
  setPage: (test: number) => void;
}
const Page10: React.FC<pageProps> = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Card 1 */}
      <div className=" w-80 mt-8  border border-gray-400 rounded-md px-4 py-4 text-start text-sm">
        <p className="font-medium">Active</p>

        <span className="flex items-center gap-2 mt-2">
          <input type="checkbox" /> Breathing exercise
        </span>
        <span className="flex items-center gap-2 mt-2">
          <input type="checkbox" /> Cough/Huff
        </span>
        <span className="flex items-center gap-2 mt-2">
          <input type="checkbox" /> Assisted coughing
        </span>
        <span className="flex items-center gap-2 mt-2">
          <input type="checkbox" /> Forced expiratory technique
        </span>
      </div>

      {/* Card 2 */}
      <div className=" w-80 mt-8  border border-gray-400 rounded-md px-4 py-4 text-start text-sm">
        <p className="font-medium">Device</p>

        <span className="flex items-center gap-2 mt-2">
          <input type="checkbox" /> Non-invasive ventilation (insufflator)
        </span>
        <span className="flex items-center gap-2 mt-2">
          <input type="checkbox" /> Exsufflator / Cough assist
        </span>
        <span className="flex items-center gap-2 mt-2">
          <input type="checkbox" /> Mechanical vibration
        </span>
        <span className="flex items-center gap-2 mt-2">
          <input type="checkbox" /> HFO/IPV/Flutter
        </span>
        <span className="flex items-center gap-2 mt-2">
          <input type="checkbox" /> CPAP
        </span>
        <span className="flex items-center gap-2 mt-2">
          <input type="checkbox" /> PEP
        </span>
      </div>

      {/* Card 3 */}
      <div className=" w-80 mt-8  border border-gray-400 rounded-md px-4 py-4 text-start text-sm">
        <p className="font-medium">Passive</p>

        <span className="flex items-center gap-2 mt-2">
          <input type="checkbox" /> Mobilization
        </span>
        <span className="flex items-center gap-2 mt-2">
          <input type="checkbox" /> Postural drainage
        </span>
        <span className="flex items-center gap-2 mt-2">
          <input type="checkbox" /> Manual/Ventilator hyperinfation
        </span>
        <span className="flex items-center gap-2 mt-2">
          <input type="checkbox" /> Airway suctioning
        </span>
        <span className="flex items-center gap-2 mt-2">
          <input type="checkbox" /> Percussion
        </span>
      </div>
    </div>
  );
};

export default Page10;
