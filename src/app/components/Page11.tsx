import React from "react";
interface pageProps {
  setPage: (test: number) => void;
}
const Page11: React.FC<pageProps> = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <section className="w-full border border-gray-400 rounded-md py-8 px-4">
        <h2>สรุปการรักษาทางด้าน Mobility (การเคลื่อนไหว)</h2>
        <ul>
          <li>1 . xxxxxxx</li>
          <li>2 . xxxxxxx</li>
          <li>3 . xxxxxxx</li>
          <li>4 . xxxxxxx</li>
        </ul>

        <button className=" mt-6 border bg-gray-200 border-gray-600 px-4 py-2 rounded-md">
          Tretment
        </button>
      </section>

      <section className="w-full border border-gray-400 rounded-md py-8 px-4">
        <h2>สรุปการรักษาทางด้าน Respiratory (หายใจ)</h2>
        <ul>
          <li>1 . xxxxxxx</li>
          <li>2 . xxxxxxx</li>
          <li>3 . xxxxxxx</li>
          <li>4 . xxxxxxx</li>
        </ul>

        <button className=" mt-6 border bg-gray-200 border-gray-600 px-4 py-2 rounded-md">
          Tretment
        </button>
      </section>
    </div>
  );
};

export default Page11;
