import { Link } from "react-router-dom";
import cb from "/public/KARE(latest).png"
import kala from "/public/kalasalingam.png"
function Nav() {
  return (
    <nav className="bg-white shadow shadow-black p-4 w-full flex justify-between rounded ">
      <div className="  w-1/2 flex"><img src={cb} className="size-10 rounded-full"/>
      <img src={kala} className=" size-10 rounded-full"/></div>
      <div className="container h-1/2">

        <Link to="/" className="text-lg font-bold">
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
