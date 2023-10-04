import {
  FaGoogle,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      {/* section login in with*/}
      <div className="p-2 space-y-3">
        <h2 className="text-2xl ">Login With</h2>
        <button className="btn btn-outline ">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>
      {/* section find us*/}
      <div className="flex flex-col w-full border rounded-t-lg rounded-b-lg my-4  p-2 space-y-3">
        <h2 className="text-2xl ">Find Us</h2>
        <Link
          to="https://www.facebook.com/"
          className="flex justify-start btn btn-outline "
        >
          <FaFacebook></FaFacebook>
          Facebook
        </Link>
        <Link className="flex justify-start btn btn-outline">
          <FaTwitter></FaTwitter>
          Twitter
        </Link>
        <Link className="flex justify-start btn btn-outline">
          <FaInstagram></FaInstagram>
          Instagram
        </Link>
      </div>
      {/* Q-zone */}
      <div className="p-2 space-y-3 bg-gray-200 rounded-md" >
        <h2 className="text-2xl ">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
