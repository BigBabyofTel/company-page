export default function LatestNews() {
  return (
    <>
      <section className="h-[600px] my-10">
        <h1 className="text-3xl text-center p-2 font-bold">LATEST NEWS</h1>
        <div className="h-full flex flex-col md:flex-row md:justify-around items-center">
          <div className="w-1/5 h-1/2">
            <img src="./news-1.jpg" alt="" className="w-full" />
            <h3 className="text-center m-1 my-4 font-bold">April 12, 2024</h3>
            <hr className="w-1/2 mx-auto my-2" />
            <p className=" font-bold">
              7 Reasons to Study in Class Rather than Study Alone
            </p>
          </div>
          <div className="w-1/5 h-1/2">
            <img src="./news-2.jpg" alt="" className="w" />
            <h3 className="text-center m-1 my-4 font-bold">May 24, 2024</h3>
            <hr className="w-1/2 mx-auto my-2" />
            <p className=" font-bold">
              Test of Interactive English: Personal Experience
            </p>
          </div>
          <div className="w-1/5 h-1/2">
            <img src="./news-3.jpg" alt="" />
            <h3 className="text-center m-1 my-4 font-bold">June 12, 2024</h3>
            <hr className="w-1/2 mx-auto my-2" />
            <p className=" font-bold">
              5 Reasons Why You Should Consider Doing the FCE
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
