
'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";
interface pageProps {
  setPage: (test: number) => void;
}

interface selectNumberType {
  onChange : (value : string, name : string)=>void 
  name : string
}

// Select Component
const SelectNumber: React.FC<selectNumberType> = ({onChange, name})=>{

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value, name); 
  };

  return (
    <select onChange={handleChange}  className="w-full rounded-md border border-gray-400 px-2 py-0.5" defaultValue="0">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  )
}

const Page5: React.FC<pageProps> = () => {

  // Systems
  const users_id = localStorage.getItem('icu_id')


  const dataTable = [
    { id: 0, scoure: 0, desc: "No visible contraction" },
    {
      id: 1,
      scoure: 1,
      desc: "Visible muscle contraction, but no limb movement",
    },
    { id: 2, scoure: 2, desc: "Active movement, but not against gravity" },
    { id: 3, scoure: 3, desc: "Active movement against gravity " },
    {
      id: 4,
      scoure: 4,
      desc: "Active movement against gravity and resistance",
    },
    { id: 5, scoure: 5, desc: "Active movement against full resistance " },
  ];

  const [inPutData , setInputData] = useState({
    input_1: 0 , 
    input_2 : 0,
    input_3 : 0,
    input_4: 0,
    input_5 : 0 , 
    input_6: 0 , 
    input_7 : 0,
    input_8 : 0,
    input_9: 0,
    input_10 : 0
  })

  const [sum1, setSum1] = useState(0)
  const [sum2, setSum2] = useState(0)
  const [myBBB , setMyBBB] = useState(0)



  const handleChange = (value: string, name: string) => {
    setInputData((prevData) => ({
      ...prevData,
      [name]: Number(value),  // อัพเดทค่า input ตามชื่อ
    }));
  };


  const calculate = ()=>{
    const totalSum1 = inPutData.input_1 + inPutData.input_2 + inPutData.input_3 + inPutData.input_4 + inPutData.input_5
    setSum1(totalSum1)

    const totalSum2 = inPutData.input_1 + inPutData.input_2 + inPutData.input_3 + inPutData.input_4 + inPutData.input_5 + inPutData.input_6 + inPutData.input_7 + inPutData.input_8 + inPutData.input_9 + inPutData.input_10
    setSum2(totalSum2)

  }

  const handleSave = async()=>{
    try {
      const data = {
        total_1 : sum1,
        total_2 : sum2 , 
        users_id
      }

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_PATH}/api/users/page_5`, data)

      if(res.status === 200){
       await  handleChangePage()
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const handleChangePage = async()=>{
    try {

      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_PATH}/api/users/${users_id}`)
      if(res.status === 200){
        console.log(res.data);
        const score = res.data.score || 0
        if(score === 0 ) setMyBBB(0)
        if(score === 1  )setMyBBB(1)
        if(score === 2  )setMyBBB(2)
        if(score === 3  || score === 4  )setMyBBB(3)
        if(score === 5 || score === 6  || score === 7 )setMyBBB(4)
        if(score === 8 || score === 9  || score === 10 )setMyBBB(5)
 
        
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
if(inPutData){
  calculate()
}
  },[inPutData])

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <section className="w-full">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-200    ">
            <tr className=" ">
              <th className="px-4 py-2 text-center border border-gray-400 ">
                Score myBBB :  {myBBB}
              </th>
              <th className="px-4 py-2 text-start  border border-gray-400  ">
                Description
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {dataTable &&
              dataTable.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2  text-center w-2/12 ">
                    {item.scoure}
                  </td>

                  <td className="px-4 py-2  text-start w-7/12 ">{item.desc}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
      <section className="w-full ">
        {/* row 1 */}
        <div className="flex gap-4 justify-start items-center">
          <div className="w-6/12 text-start "></div>
          <div className="w-3/12 text-start">Score Le (0-5)</div>
          <div className="w-3/12 text-start">Score Ri (0-5)</div>
        </div>
        {/* row 2 */}
        <div className="flex gap-4 justify-start items-center mt-4">
          <div className="w-6/12 text-start ">Abducation shoulder</div>
          <div className="w-3/12 text-start">
          <SelectNumber onChange={handleChange} name="input_1" />
          </div>
          <div className="w-3/12 text-start">
          <SelectNumber onChange={handleChange} name="input_6" />
          </div>
        </div>
        {/* row 3 */}
        <div className="flex gap-4 justify-start items-center mt-4">
          <div className="w-6/12 text-start ">Wrist extension</div>
          <div className="w-3/12 text-start">
          <SelectNumber onChange={handleChange} name="input_2" />
          </div>
          <div className="w-3/12 text-start">
          <SelectNumber onChange={handleChange} name="input_7" />
          </div>
        </div>
        {/* row 4 */}
        <div className="flex gap-4 justify-start items-center mt-4">
          <div className="w-6/12 text-start ">Hip flexion</div>
          <div className="w-3/12 text-start">
          <SelectNumber onChange={handleChange} name="input_3" />
          </div>
          <div className="w-3/12 text-start">
          <SelectNumber onChange={handleChange} name="input_8" />
          </div>
        </div>
        {/* row 5 */}
        <div className="flex gap-4 justify-start items-center mt-4">
          <div className="w-6/12 text-start ">knee extension</div>
          <div className="w-3/12 text-start">
          <SelectNumber onChange={handleChange} name="input_4" />
          </div>
          <div className="w-3/12 text-start">
          <SelectNumber onChange={handleChange} name="input_9" />
          </div>
        </div>
        {/* row 6 */}
        <div className="flex gap-4 justify-start items-center mt-4">
          <div className="w-6/12 text-start ">Dorsiflexion ankle</div>
          <div className="w-3/12 text-start">
          <SelectNumber onChange={handleChange} name="input_5" />
          </div>
          <div className="w-3/12 text-start">
          <SelectNumber onChange={handleChange} name="input_10" />
          </div>
        </div>
        {/* row 7 */}
        <div className="flex gap-4 justify-start items-center mt-4">
          <div className="w-6/12 text-start ">MRCsum Score</div>
          <div className="w-6/12 text-start">
            <input
              type="number"
              disabled
              className="bg-gray-300 border border-gray-400 rounded-md w-full px-4"
              value={sum1}
            />
          </div>
  
        </div>
        {/* row 8 */}
        <div className="flex gap-4 justify-start items-center mt-4">
          <div className="w-6/12 text-start ">MRCsum Lower Limb</div>
          <div className="w-6/12 text-start">
            <input
              type="number"
              disabled
              className="bg-gray-300 border border-gray-400 rounded-md w-full px-4"
              value={sum2}
            />
          </div>
    
        </div>
        {/* Button */}
        <button onClick={handleSave} className=" mt-6 border bg-gray-200 border-gray-600 px-4 py-2 rounded-md">
            บันทึก
        </button>
      </section>
    </div>
  );
};

export default Page5;
