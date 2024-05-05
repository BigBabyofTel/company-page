export default function LatestNews() {
  return (
    <>
      <section className="w-full h-full my-10">
        <h1 className="text-3xl text-center p-5 font-bold">LATEST NEWS</h1>
        <div className="h-full w-full grid gap-8 grid-col-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1">
          <div className="w-full h-full row-start-1 col-start-1 md:col-start-1 md:row-start-2">
            <img src="./news-1.jpg" alt="" className="w-full" />
            <h3 className="text-center m-1 my-4 font-bold">April 12, 2024</h3>
            <hr className="w-1/2 mx-auto my-2" />
            <p className=" font-bold text-center">
              7 Reasons to Study in Class Rather than Study Alone
            </p>
          </div>
          <div className="w-screen md:w-fit h-full row-start-2 col-start-1 md:col-start-2 md:row-start-2">
            <img src="./news-2.jpg" alt="" className="w-full" />
            <h3 className="text-center m-1 my-4 font-bold p-1">May 24, 2024</h3>
            <hr className="w-1/2 mx-auto my-2" />
            <p className=" font-bold text-center">
              Test of Interactive English: Personal Experience
            </p>
          </div>
          <div className=" w-screen md:w-fit h-full row-start-3 md:col-start-3 md:row-start-2">
            <img src="./news-3.jpg" alt="" className="w-[97%]"/>
            <h3 className="text-center m-1 my-4 font-bold p-1">June 12, 2024</h3>
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
