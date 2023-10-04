import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-2 bg-gray-400 rounded-sm p-2">
      <button className="btn text-white bg-[#D72050] hover:text-black">Latest</button>
      <Marquee
        className=" bg-gray-200 rounded-md"
        pauseOnHover={true}
        speed={80}
      >
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default LatestNews;
