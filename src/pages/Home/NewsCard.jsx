import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NewsCard = ({ news }) => {
  console.log(news);
  const { image_url, title, details, _id } = news;
  return (
    <div className="card bg-base-100 shadow-xl my-4">
      <figure>
        <img className="h-2/4 w-full" src={image_url} />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          {details.length > 100 ? (
            <>
              <p>{details.slice(0, 100)}</p>
              <Link to={`/news/${_id}`} className="font-semibold text-blue-700">
                Read More...
              </Link>
            </>
          ) : (
            <p>{details}</p>
          )}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
