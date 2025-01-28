import { useEffect, useState } from "react"
import api from "./api"
import axios from "axios"
function Admin(){
    const [teams,setteams]=useState([])
    const [count,setCount]=useState(0)
    const [loading,setLoading]=useState(false)
    const [error, setError] = useState(""); // Add this line to define the error state
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.get(`${api}/event/students`);
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
}
export default Admin