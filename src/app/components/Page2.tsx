import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

interface pageProps {
  setPage: (test: number) => void;
}

// interface sendDataType {
//   score : string
//   team : string
//   description : string

// }

const Page2: React.FC<pageProps> = ({ setPage }) => {
  const faceData = [
    {
      id: 0,
      score: "+4",
      term: "Combative",
      desc: "Overtly combative, violent, immediate danger to staff",
    },
    {
      id: 1,
      score: "+3",
      term: "Very agitated",
      desc: "Pulls of remove tube(s) cathter(s); aggressive",
    },
    {
      id: 2,
      score: "+2",
      term: "Agitated",
      desc: "Overtly combative, violent, immediate danger to staff",
    },
    {
      id: 3,
      score: "+1",
      term: "Restless",
      desc: "Anxios but movements not aggressive vigorous",
    },
    {
      id: 4,
      score: "0",
      term: "Alert and calm",
      desc: "Not fully alert, but has sustained awakening ( eye-opening/eye contact ) to voice ( >10 seconds )",
    },
    {
      id: 5,
      score: "-1",
      term: "Drowsy",
      desc: "",
    },
    {
      id: 6,
      score: "-2",
      term: "Light sedation",
      desc: "Briefly awakens with eye contact to voice (>10 seconds)",
    },
    {
      id: 7,
      score: "-3",
      term: "Modearte sedation",
      desc: "Movement or eye opening to voice ( but no eye contact )",
    },
    {
      id:8,
      score: "-4",
      term: "Deep Sedation",
      desc: "No response to voice, but movement or eye opening to physical stimulation",
    },
    {
      id: 9,
      score: "-5",
      term: "Unarousable",
      desc: "No response to voice or physical stimulation",
    },
  ];

    // const [sendData, setSendData] = useState<sendDataType>({
    //   score : "",
    //   team : "",
    //   description : "",
    // });

    const users_id = localStorage.getItem('icu_id')


  const handleClick = (id: number, score: string,  team: string, desc :string) => {

    if (id === 0 || id === 1) {
      Swal.fire({
        title: "The patient is unable to participate in the physical therapy session at this time. Please hold the session until restriction are lifted.",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "gray",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          setPage(0);
        }
      });
    } else {
      Swal.fire({
        title: team || "",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "gray",
        confirmButtonText: "OK",
      }).then(async(result) => {
        if (result.isConfirmed) {


          await handleSend(score, team, desc)
        }
      });
    }
  };

  const handleSend = async(score: string,  team: string, desc :string)=>{
    try {
      const data = {
        score : score ,
        team : team,
        description : desc , 
        users_id
      }
      if(!users_id ) return alert('ไม่พบ users_id')

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_PATH}/api/users/page_2`, data)
      if(res.status === 200){
        setPage(3) 
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="text-start">
      <h2 className="text-3xl">Richmond Agitation Sedation Scale (RASS)</h2>

      <div className="mt-8 overflow-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200    ">
            <tr className=" ">
              <th className="px-4 py-2 text-center border border-gray-400 ">
                Score
              </th>
              <th className="px-4 py-2 text-center border border-gray-400">
                Team
              </th>
              <th className="px-4 py-2 text-start  border border-gray-400  ">
                Description
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {faceData &&
              faceData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2  text-center w-2/12 ">{item.score}</td>
                  <td className="px-4 py-2  text-center w-3/12 ">
                    <button
                      onClick={() => handleClick(item.id, item.score, item.term, item.desc) }
                      className="bg-gray-100 border w-40 border-gray-400 px-2 py-1 rounded-md"
                    >
                      {item.term}
                    </button>
                  </td>
                  <td className="px-4 py-2  text-start w-7/12 ">{item.desc}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page2;
