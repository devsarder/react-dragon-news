/* eslint-disable react/prop-types */
import { FaRegCalendar } from "react-icons/fa";
import moment from "moment";
const LeftNews = ({ news }) => {
  const { image_url, title } = news;
  // console.log(news);
  return (
    <div className="p-2">
      <div className=" space-y-3">
        <img className="rounded-md" src={image_url} alt="" />
        <h2 className="text-2xl">{title}</h2>
      </div>
      <div className="flex gap-2 items-center justify-start">
        <p>
          <small>sports</small>
        </p>
        <div className="flex items-center text-gray-400 gap-1">
          <span>
            <small>
              <FaRegCalendar></FaRegCalendar>
            </small>
          </span>
          <small>
            <span className="">{moment().format(" MMMM Do ,YYYY")}</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default LeftNews;
