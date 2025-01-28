import { useEffect, useState } from "react"
import api from "./api"
import axios from "axios"
import PaymentCard from "./PaymentCard"
function Admin(){
    const [teams,setteams]=useState([])
    const [count,setCount]=useState(0)
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        const fetchData = async () => {
            try {
              setLoading(true)
              const response = await axios.get(`${api}/event/codebrake/students`);
              console.log(response.data)
              setteams(response.data);
              setCount(response.data.length);
            } catch (err) {
              console.error("Error fetching data:", err);
            } finally {
              setLoading(false);
            }
          };
      
          fetchData();
    },[])
    if (loading) {
        return (
          <div className="flex justify-center items-center h-screen bg-gray-800">
            <div className="loader ">Loading...</div>
          </div>
        );
      }
      return(
        <div>
        {teams.map((i)=>(
          <PaymentCard student={i}/>

      ))}
        </div>
      )
}
export default Admin