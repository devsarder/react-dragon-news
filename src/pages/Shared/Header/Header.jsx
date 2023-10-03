import moment from "moment/moment";
import logo from "../../../assets/logo.png";
const Header = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>
      <div className="text-center">
        <p className="text-gray-400">Journalism Without Fear or Favour</p>
        <h4 className="font-semibold">
          {moment().format("dddd, MMMM D YYYY")}
        </h4>
      </div>
    </div>
  );
};

export default Header;
