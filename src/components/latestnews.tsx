import news1 from "@/images/news1.jpg";
import news2 from "@/images/news-2.jpg";
import news3 from "@/images/news-3.jpg";

export default function LatestNews() {
  return (
    <>
      <section id="news" className="w-full h-full my-10">
        <h1 className="text-3xl text-center p-5 font-bold">LATEST NEWS</h1>
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-evenly">
          <div className="w-3/4 h-full m-4">
            <img src={news1} alt="" className="w-full" />
            <h3 className="text-center font-bold p-4">April 12, 2024</h3>
            <hr className="w-1/2 mx-auto my-2" />
            <p className=" font-bold text-center">
              7 Reasons to Study in Class Rather than Study Alone
            </p>
          </div>
          <div className="w-3/4 md:w-3/4 h-full m-4">
            <img src={news2} alt="first news item" className="w-full" />
            <h3 className="text-center font-bold p-4">May 24, 2024</h3>
            <hr className="w-1/2 mx-auto my-2" />
            <p className=" font-bold text-center">
              Test of Interactive English: Personal Experience
            </p>
          </div>
          <div className="w-3/4 md:w-[72.2%] h-full m-4">
            <img src={news3} alt="" className="w-full" />
            <h3 className="text-center font-bold p-4">
              June 12, 2024
            </h3>
            <hr className="w-1/2 mx-auto my-2" />
            <p className=" font-bold text-center">
              5 Reasons Why You Should Consider Doing the FCE
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
