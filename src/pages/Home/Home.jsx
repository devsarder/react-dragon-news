import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LatestNews from "./LatestNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  // console.log(news);
  return (
    <div>
      <Header></Header>
      <LatestNews></LatestNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="border   border-black">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className=" md:col-span-2 border p-4  border-black">
          {news.map((aNews) => (
            <NewsCard key={news._id} news={aNews}></NewsCard>
          ))}
        </div>
        <div className="border border-black">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
