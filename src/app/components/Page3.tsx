import axios, { AxiosError } from "axios";
import React, { useState } from "react";

interface pageProps {
  setPage: (test: number) => void;
}
interface inputDataType {
  [key: string]: boolean;
}

const Page3: React.FC<pageProps> = ({ setPage }) => {

  // Systems
  const users_id = localStorage.getItem('icu_id')

  const [data, setData] = useState<inputDataType>({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
    checkbox11: false,
    checkbox12: false,
    checkbox13: false,
    checkbox14: false,
    checkbox15: false,
    checkbox16: false,
    checkbox17: false,
    checkbox18: false,
    checkbox19: false,
    checkbox20: false,
    checkbox21: false,
    checkbox22: false,
    checkbox23: false,
    checkbox24: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };


  const handleClear = () => {
    setData({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checkbox9: false,
      checkbox10: false,
      checkbox11: false,
      checkbox12: false,
      checkbox13: false,
      checkbox14: false,
      checkbox15: false,
      checkbox16: false,
      checkbox17: false,
      checkbox18: false,
      checkbox19: false,
      checkbox20: false,
      checkbox21: false,
      checkbox22: false,
      checkbox23: false,
      checkbox24: false,
    });
  };

  const handleClick = async() => {

    await handleSave()

    // เลือก
    const requiredCheckboxes_1 =  new Set([1, 2, 3, 4, 6, 7, 8, 9, 10, 
      11, 12, 14, 15, 16, 17, 18, 19, 
      20, 21, 22, 23, 24])
      const requiredCheckboxes_2 = new Set([5,6,7,9,10,11,12,14,15,16,17,22])

      const checkedSet = new Set<number>()
      const unCheckedSet = new Set<number>()
      let anyChecked = false

      for(const key in data) {
        if(key.startsWith("checkbox")&& data[key]){
          anyChecked = true
          const num = parseInt(key.replace("checkbox", ""), 10)
          checkedSet.add(num)
        }else if (key.startsWith('checkbox')){
          const num = parseInt(key.replace('checkbox', ''), 10)
          unCheckedSet.add(num)
        }
      }

      if(!anyChecked){
        setPage(4)
       
        return
      }

      if([...requiredCheckboxes_1].every(num => checkedSet.has(num)) && [...checkedSet].every(num => requiredCheckboxes_1.has(num)) ){
        alert('ไปหน้า 11')
        return
      }

      if([...requiredCheckboxes_2].every(num => checkedSet.has(num)) && [...checkedSet].every(num => requiredCheckboxes_2.has(num)) ){
       setPage(0)
        return
      }

  }

  const handleSave = async()=>{
    try {

      const sendData: Record<string , number> = {}

      for (let i = 1; i <= 24; i ++){
        sendData[`checkbox${i}`] = data[`checkbox${i}`] ? 1 : 0
      }
      sendData.users_id = Number(users_id)

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_PATH}/api/users/page_3`, sendData)
      if(res.status === 200){
        alert('บันทึกสำเร็จ')
      }

    } 
    catch (error: unknown) {
      if (error instanceof AxiosError) {
        // เมื่อ error เป็น AxiosError
        console.log(error);
        alert(error.response?.data?.message || "เกิดข้อผิดพลาด");
      } else {
        // ถ้า error ไม่ใช่ AxiosError
        console.log(error);
        alert("เกิดข้อผิดพลาด");
      }
    }
  }
  return (
    <div>
      {/* test : {JSON.stringify(data)} */}
      <div className="flex flex-col lg:flex-row gap-4 text-sm ">
        <section className="w-full">
          {/* Card 1 */}
          <div className="bg-gray-50 border border-gray-400 rounded-md px-4 py-4 text-start">
            <p className="font-medium">Hemodynamically</p>

            <span className="flex items-center gap-2 mt-5">
              <input
                onChange={handleChange}
                checked={data.checkbox1}
                name="checkbox1"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              Hemodynamically unstable
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox2}
                name="checkbox2"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              Resting heart rate {`>`} 50% age predicted maximum heart rate or
              HR {`>`} 130; {`<`} 40 BPM
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox3}
                name="checkbox3"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              Blood pressure {`>`} 20% variable recently or SBP {`>`} 170; {`<`}{" "}
              90 mmHg
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox4}
                name="checkbox4"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              Temp {`>`} 40 oC
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox5}
                name="checkbox5"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              Oxygen saturaion {`<`} 88 %
            </span>
          </div>

          {/* Card 2 */}
          <div className=" mt-5 bg-gray-50 border border-gray-400 rounded-md px-4 py-4 text-start">
            <p className="font-medium">Cardiorespiratory</p>

            <span className="flex items-center gap-2 mt-5">
              <input
                onChange={handleChange}
                checked={data.checkbox6}
                name="checkbox6"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              MAP {`<`} 65; {`>`} 110 mmHg
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox7}
                name="checkbox7"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              FiO2 {`>`} 60 %
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox8}
                name="checkbox8"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`PaO2 / FiO2 < 200 or RR > 40 bmp; < 5 bmp`}
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox9}
                name="checkbox9"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`Addition of new anti-arrhythmic agent within previous 24 hourse`}
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                placeholder="xxx"
                onChange={handleChange}
                checked={data.checkbox10}
                name="checkbox10"
              />{" "}
              {`Unstable arrhythmia within previous 24 hours or new arrythmia`}
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox11}
                name="checkbox11"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`New cardiac ischemia and DVT / pulmonary emboli within 24 hours`}
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox12}
                name="checkbox12"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`AF rate > 120 bpm`}
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox13}
                name="checkbox13"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`PVC > 5 in 1 minutes`}
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox14}
                name="checkbox14"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`SVT > 150 bpm`}
            </span>
          </div>
        </section>

        <section className="w-full">
          {/* Card 3 */}
          <div className="  bg-gray-50 border border-gray-400 rounded-md px-4 py-4 text-start">
            <p className="font-medium">Neurological</p>

            <span className="flex items-center gap-2 mt-5">
              <input
                onChange={handleChange}
                checked={data.checkbox15}
                name="checkbox15"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`Neurologically unstable : Acute stroke first 24 hours, Acute Neurological event, CSF leak`}
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox16}
                name="checkbox16"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`Intracranial pressure < 60; > 150 mmHg`}
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox17}
                name="checkbox17"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`Active seizures`}
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox18}
                name="checkbox18"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`Neuromuscular paralyzing agent`}
            </span>
          </div>

          {/* Card 4 */}
          <div className=" mt-5 bg-gray-50 border border-gray-400 rounded-md px-4 py-4 text-start">
            <p className="font-medium">Orthopedic</p>

            <span className="flex items-center gap-2 mt-5">
              <input
                onChange={handleChange}
                checked={data.checkbox19}
                name="checkbox19"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`Compartment syndrome`}
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox20}
                name="checkbox20"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`Acute surgery or hight risk for dehiscence`}
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox21}
                name="checkbox21"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`Unstable spine or extremity fractures with contraindications to mobilize`}
            </span>
          </div>

          {/* Card 5 */}
          <div className=" mt-5 bg-gray-50 border border-gray-400 rounded-md px-4 py-4 text-start">
            <p className="font-medium">Others</p>

            <span className="flex items-center gap-2 mt-5">
              <input
                onChange={handleChange}
                checked={data.checkbox22}
                name="checkbox22"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`Active bleeding process`}
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox23}
                name="checkbox23"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`No recent flab to lower or trunk`}
            </span>
            <span className="flex items-center gap-2 mt-2">
              <input
                onChange={handleChange}
                checked={data.checkbox24}
                name="checkbox24"
                type="checkbox"
                placeholder="xxx"
              />{" "}
              {`No arrachment contraindication mobilization`}
            </span>
          </div>
        </section>
      </div>
      <div className="flex flex-row gap-4 justify-end">
        <button
          onClick={handleClick}
          className="bg-gray-200 px-4 py-2 rounded-md border border-gray-400"
        >
          บันทึก
        </button>

        <button
          onClick={handleClear}
          className="bg-gray-200 px-4 py-2 rounded-md border border-gray-400"
        >
          ล้างข้อมูลที่เลือก
        </button>
      </div>
    </div>
  );
};

export default Page3;
