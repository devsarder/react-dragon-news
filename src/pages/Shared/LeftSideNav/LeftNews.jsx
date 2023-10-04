import { FaRegCalendar } from "react-icons/fa";
import moment from "moment";
const LeftNews = ({ news }) => {
  const { image_url, title } = news;
  console.log(news);
  return (
    <div>
      <div className="p-2 space-y-3">
        <img className="rounded-md" src={image_url} alt="" />
        <h2 className="text-2xl">{title}</h2>
      </div>
      <div className="flex gap-1 items-center">
        <p>
          <small>sports</small>
        </p>
        <span>
          <FaRegCalendar></FaRegCalendar>
        </span>
        <small><span className="">{moment().format("dddd, MMMM Do YYYY")}</span></small>
      </div>
    </div>
  );
};

export default LeftNews;
