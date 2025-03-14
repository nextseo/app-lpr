import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
interface pageProps {
  setPage: (test: number) => void;
}

const Page4: React.FC<pageProps> = ({ setPage }) => {

  // Systems
  const users_id = localStorage.getItem('icu_id')


  const data = [
    {
      id: 0,
      score: 0,
      title: "Nothing (bedridden)",
      title_btn:
        "Change position passive mobilization by physical therapist/nurse, noactive movement",
    },
    {
      id: 1,
      score: 1,
      title: "Sitting up in bed-exercise in bed",
      title_btn: "Bedridden, activity in bed rolling over, active or assisted exercises. bed bike, arm exercises",
    },
    { id: 2, score: 2, title: "Passive mobilization", title_btn: "Complete passive tranfer (hoist), no standing, no sitting on the edge of the bad" },
    {
      id: 3,
      score: 3,
      title: "Sitting on the edge of the bed Stand up",
      title_btn: "May be assisted by nurse or physical therapist, actively sitting on edge of bad with trunk control",
    },
    { id: 4, score: 4, title: "Stand up", title_btn: "Standing on your own feet, with or without support possibly with standing aids or tilting table" },
    { id: 5, score: 5, title: "Transfer from bed to chair", title_btn: "Can move to the chair while standing by stepping or shuffing" },
    { id: 6, score: 6, title: "On-site steps", title_btn: "Altemating standing on 1 foot, must step at last 4 times (2 times with each foot) with or without support" },
    { id: 7, score: 7, title: "Steps-help 2 or moew pers", title_btn: "Stepping at least 5 meters from the bad or seat with 2 or more people" },
    { id: 8, score: 8, title: "Steps with help from 1 pers", title_btn: "Stepping at least 5 meters from the bad or seat with 2 or more people" },
    { id: 9, score: 9, title: "Step with a tool", title_btn: "Stepping at least 5 meters from the bad or seat with 2 or more people" },
    { id: 10, score: 10, title: "Steps without assistance", title_btn: "Stepping at least 5 meters from the bad or seat with 2 or more people" },
  ];

  const handleClick = (score : number, title : string, description : string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your Choose Light sedation Team",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "gray",
      confirmButtonText: "OK",
    }).then(async(result) => {
      if (result.isConfirmed) {
        
       await handleSave(score, title, description)
      }
    });
  }

  const handleSave = async(score : number, title : string, description : string)=> {
    try {
      const sendData = {score   , title, description, users_id  }

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_PATH}/api/users/page_4`, sendData)

      if(res.status === 200){
        setPage(5);
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <div>
      <ul className="flex flex-col gap-4">
        {data.map((item) => (
          <li key={item.id} className="flex flex-row gap-4 items-center">
            <div className="w-5/12 flex gap-4 justify-start">
            <span className="text-2xl">{item.score}</span>
            <p className="text-xl text-start font-medium text-green-500">{item.title}</p>
            </div>
            <div className="w-7/12">
            <button onClick={()=>handleClick(item.score, item.title , item.title_btn)} className="bg-white hover:bg-gray-100 text-sm border border-gray-400 px-4 py-1 rounded-md">
              {item.title_btn}
            </button>
            </div>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Page4;
