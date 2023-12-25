import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    console.log(search);
    try {
      const res = await axios.get(`https://app-lpr-api.vercel.app/cars?search=${search}`);
      console.log(res.data.data);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleExcel = async()=>{
    try {
      const res = await axios.get(`https://app-lpr-api.vercel.app/excel` , {
        responseType: 'blob'
      })

       const link = document.createElement('a');
       link.href = window.URL.createObjectURL(new Blob([res.data]));
       link.download = 'exported_data.xlsx';
       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [search]);
  return (
    <div className="px-10 py-10 bg-gray-100">

    
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <h1 className="text-3xl font-bold ">ระบบตรวจจับป้ายทะเบียน LPR</h1>
         
        </div>
        <div className="flex flex-col md:flex-row gap-4">
        <input
            className="bg-gray-100 border border-gray-300 px-5 py-2  rounded-md "
            type="text"
            name=""
            id=""
            placeholder="ค้นหาป้ายทะเบียน"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-green-500 px-4 py-2 text-white rounded-lg hover:bg-green-700" onClick={handleExcel}>
            EXCEL{" "}
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-lg hover:bg-gray-200 rounded-md"
          >
            <img
              src={`https://otopthaishop.com/app-images/${item.img_lp}`}
              alt=""
              className="w-full object-cover"
            />
            <p className="mt-2">ป้ายทะเบียน : {item?.lp}</p>
            <p>วันที่ {item?.date}</p>
            <p>เวลา {item?.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
