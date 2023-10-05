import { useLocation, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-3  py-4">
        <div className="col-span-3  border border-black">
          <h2 className="text-2xl">Dragon News</h2>
        </div>
        <div className="border border-black">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
