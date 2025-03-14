import React from "react";
import Swal from "sweetalert2";
interface pageProps {
  setPage: (test: number) => void;
}
const Page13: React.FC<pageProps> = ({ setPage }) => {

  const data = [
    { id: 0, image: "/images/page_8.webp" },
    { id: 1, image: "/images/page_8.webp" },
    { id: 2, image: "/images/page_8.webp" },
    { id: 3, image: "/images/page_8.webp" },
    { id: 4, image: "/images/page_8.webp" },
  ];

  const handleClick = ()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "Your Choose Light sedation Team",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "gray",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        setPage(14);
      }
    });
  }
  return (
    <div className="p-4">
      {/* ใช้ Grid 6 คอลัมน์ */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  ">
        {data.map((item) => (
          <div key={item.id} className="w-full">
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <button onClick={handleClick} className=" mt-6 border bg-gray-200 border-gray-600 px-4 py-2 rounded-md">
              This Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page13;
