import axios, { AxiosError } from "axios";
import React, { useState } from "react";
interface pageProps {
  setPage: (test: number) => void;
}

interface sendDataType {
  age : number
  sex : string
  medical_diagnosis : string
  congenital_disease : string
  intensive_care_unit : string
  other : string
}

const Page1: React.FC<pageProps> = ({setPage}) => {
  const [sendData, setSendData] = useState<sendDataType>({
    age: 0,
    sex: '',
    medical_diagnosis: '',
    congenital_disease: '',
    intensive_care_unit: '',
    other: ''
  });


// Funtions
const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement> )=> {
  setSendData((prev)=> ({
    ...prev, 
    [e.target.name] : e.target.value
  }))
}

  const handleSend = async()=>{
    try {
      const data = {
        age: sendData.age,
        sex: sendData.sex,
        medical_diagnosis: sendData.medical_diagnosis,
        congenital_disease: sendData.congenital_disease,
        intensive_care_unit: sendData.intensive_care_unit,
        other: sendData.other
      }

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_PATH}/api/users/start`, data)
      if(res.status === 200){
        if(!res.data.id) return false
        localStorage.setItem('icu_id', res.data.id)
        setPage(2)
        
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
    <div className="text-start">
      <h2 className="text-xl lg:text-3xl">Patient Demographics Data</h2>

      <div className="mt-6">
        <p className="text-gray-500">อายุ</p>
        <input
       
          type="number"
          className="w-2/6 bg-white px-4 py-1 border border-gray-400 rounded-md"
          placeholder="กรอกอายุ"
          name="age"
          onChange={(e)=>handleChange(e)}
        />
      </div>

      <div className="mt-4">
        <p className="text-gray-500">1. เพศ</p>
        <select className="w-2/6 bg-white px-4 py-1 border border-gray-400 rounded-md"  name="sex"
          onChange={(e)=>handleChange(e)}>
          <option value="">เลือก</option>
          <option value="หญิง">หญิง</option>
          <option value="ชาย">ชาย</option>
        </select>
      </div>

      <div className="mt-4">
        <p className="text-gray-500">2. การวินิจฉัยทางการแพทย์</p>
        <input
          type="text"
          className="w-full bg-white px-4 py-1 border border-gray-400 rounded-md"
          placeholder="กรอกการวินิจฉัยทางการแพทย์"
          name="medical_diagnosis"
          onChange={(e)=>handleChange(e)}
        />
      </div>

      <div className="mt-4">
        <p className="text-gray-500">3. โรคประจำตัว</p>
        <input
          type="text"
          className="w-full bg-white px-4 py-1 border border-gray-400 rounded-md"
          placeholder="กรอกโรคประจำตัว"
          name="congenital_disease"
          onChange={(e)=>handleChange(e)}
        />
      </div>

      <div className="mt-4">
        <p className="text-gray-500">4. หอผู้ป่วยวิกฤต</p>
        <select className="w-full bg-white px-4 py-1 border border-gray-400 rounded-md" 
         name="intensive_care_unit"
         onChange={(e)=>handleChange(e)}
        >
          <option value="">เลือก</option>
          <option value="หอผู้ป่วยวิกฤตอายุรกรรม">หอผู้ป่วยวิกฤตอายุรกรรม</option>
          <option value="หอผู้ป่วยวิกฤตศัลยกรรม">หอผู้ป่วยวิกฤตศัลยกรรม</option>
          <option value="หอผู้ป่วยวิกฤตประเภทอื่นๆ">หอผู้ป่วยวิกฤตประเภทอื่นๆ</option>
        </select>
      </div>

      <div className="mt-4">
        <p className="text-gray-500">ถ้าเลือกอื่นๆ โปรระบุ *</p>
        <input
          type="text"
          className="w-full bg-white px-4 py-1 border border-gray-400 rounded-md"
          placeholder="ถ้าเลือกอื่นๆ โปรระบุ"
          name="other"
          onChange={(e)=>handleChange(e)}
        />
      </div>

      <div className="mt-4 text-end">
        <button onClick={handleSend} className="bg-blue-400 text-white px-4 py-1 rounded-md">บันทึก</button>

      </div>


    </div>
  );
};

export default Page1;
