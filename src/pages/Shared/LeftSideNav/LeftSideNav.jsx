import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LeftNews from "./LeftNews";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [newsData, setNewsDate] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((category) => setCategories(category));
  }, []);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((newsData) => setNewsDate(newsData));
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-3xl text-center">All Categories</h3>

      {categories.map((category) => (
        <NavLink
          className=" font-semibold ml-2 btn btn-outline border-none text-left flex flex-col  items-center"
          to={`/category/${category.id}`}
          key={category.id}
        >
          {category.name}
        </NavLink>
      ))}

      <div>{newsData.map(news => <LeftNews key={news.id} news={news}></LeftNews> )}</div>
    </div>
  );
};

export default LeftSideNav;
