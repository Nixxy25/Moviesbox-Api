import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse} from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faTelevision } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
      <div className="flex flex-col rounded-r-3xl border-solid border-r-4 border-red-700 py-8 px-6 h-screen w-1/6 mr-9">
        <div className="p-4 mb-9">
            <div className="flex items-center">
            <img className="pr-2" src="../../../Images/tv (3).png"></img>
            <p className="font-sans font-bold">MoviesBox</p>
            </div>
        </div>

        <div className="flex-1 overflow-y-auto font-bold">
        <Link to='/'>
        <div className="p-4 mb-5 hover:text-red-500 focus:text-red-500 active:text-red-500"><FontAwesomeIcon icon={faHouse} className="mr-2"/>Home</div>
        </Link>
       
          <div className="p-4 mb-5 hover:text-red-500 focus:text-red-500 active:text-red-500"><FontAwesomeIcon icon={faVideo} className="mr-2"/>Movies</div>
          <div className="p-4 mb-5 hover:text-red-500 focus:text-red-500 active:text-red-500"><FontAwesomeIcon icon={faTelevision} className="mr-2"/>Tv Series</div>
          <div className="p-4 mb-5 hover:text-red-500 focus:text-red-500 active:text-red-500"><FontAwesomeIcon icon={faCalendar} className="mr-2"/>Upcoming</div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;

  
  