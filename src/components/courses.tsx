import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";

export default function Courses() {
  return (
    <>
      <div id="our-courses" className="flex justify-center m-5 p-2">
        <h2 className="text-3xl text-bold p-5">Courses We Offer</h2>
      </div>
      <div className="md:grid md:gap-1 md:grid-col-2 md:grid-row-2 md:place-content-around flex flex-col items-center mb-10">
        <Card className="w-2/3 md:w-11/12 m-2 p-1 shadow-2xl md:col-start-1 md:col-end-1 bg-[url('./images/learners.jpg')] bg-cover bg-no-repeat">
          <CardHeader>English for Beginners</CardHeader>
          <CardContent>
            <span className="text-large">$25</span>{" "}
            <span className=" text-sm">price per lesson</span>
          </CardContent>
          <CardFooter>Our best English course for starter level.</CardFooter>
        </Card>
        <Card className="w-2/3 md:w-11/12 m-2 p-1 shadow-2xl md:col-start-2 ">
          <CardHeader>Online Learning</CardHeader>
          <CardContent>
            <span className="text-large">$35</span>{" "}
            <span className=" text-sm">price per lesson</span>
          </CardContent>
          <CardFooter>Perfect if you prefer distance education.</CardFooter>
        </Card>
        <Card className="w-2/3 md:w-11/12 m-2 p-1 shadow-2xl md:row-start-2">
          <CardHeader>English for Buisness</CardHeader>
          <CardContent>
            <span className="text-large">$40</span>{" "}
            <span className="text-sm">price per lesson</span>
          </CardContent>
          <CardFooter>Buisness English course for mangers.</CardFooter>
        </Card>
        <Card className="w-2/3 md:w-11/12 m-2 p-1 shadow-2xl md:row-start-2 md:col-start-2">
          <CardHeader>English for kids</CardHeader>
          <CardContent>
            <span className="text-large">$17</span>{" "}
            <span className="text-sm">price per lesson</span>
          </CardContent>
          <CardFooter>Easy-to-learn English course for children.</CardFooter>
        </Card>
      </div>
    </>
  );
}
