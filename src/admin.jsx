import { useEffect, useState } from "react"
import api from "./api"
import axios from "axios"
import PaymentCard from "./PaymentCard"
function Admin(){
    const [teams,setteams]=useState([])
    const [count,setCount]=useState(0)
    const [loading,setLoading]=useState(false)
    const [error, setError] = useState("");
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.get(`${api}/event/codebrake/students`);
              setteams(response.data);
              setCount(response.data.length);
            } catch (err) {
              console.error("Error fetching data:", err);
              setError("Failed to fetch student data.");
            } finally {
              setLoading(false);
            }
          };
      
          fetchData();
    },[])
    if (loading) {
        return (
          <div className="flex justify-center items-center h-screen bg-gray-800">
            <div className="loader text-white">Loading...</div>
          </div>
        );
      }
    if (error) {
        return (
          <div className="flex justify-center items-center h-screen bg-gray-800">
            <div className="text-white">{error}</div>
          </div>
        );
      }
      return(
        <div className="bg-gray-800 min-h-screen p-8">
          <h1 className="text-4xl text-white font-bold mb-8 text-center">Admin Dashboard</h1>
          <h1 className=" text-4xl text-white font-bold text-center">Count:{count}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {teams.map((i,j)=>(
              <div key={i._id} className=" flex justify-center items-center">
              <p className=" text-white font-bold ">{j}. </p>
              <PaymentCard student={i} key={i.id}/>
              </div>))}
          </div>
        </div>
      )
}
export default Admin