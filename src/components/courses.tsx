import { Card, CardBody } from "@nextui-org/card";

export default function Courses() {
  return (
    <div
      id="courses"
      className="h-[1400px] md:h-[900px] m-1 bg-[rgb(221,206,184)]"
    >
      <h2 className="text-4xl font-bold pt-10 text-center">Courses We Offer</h2>

      <section className="h-full w-full md:h-[90%] m-1 p-5 flex flex-col items-center justify-evenly md:w-2/3 md:grid md:gap-3 md:grid-col-2 md:grid-row-2 mx-auto">
        <Card
          isBlurred
          className="w-full h-1/6 md:w-full md:h-full md:col-start-1 md:row-start-1"
        >
          <CardBody className="flex justify-center p-5">
            <span className="text-3xl">English for Beginners</span>
            <span className="text-2xl">¥3,000</span>{" "}
            <span className=" text-large">price per lesson</span>{" "}
            <span className="text-large">
              Our best English course for starter level.
            </span>
          </CardBody>
        </Card>
        <Card
          isBlurred
          className="w-full h-1/6 md:w-full md:h-full md:col-start-2"
        >
          <CardBody className="flex justify-center p-5">
            <span className="text-3xl">Online Learning</span>
            <span className="text-2xl">¥3,000</span>{" "}
            <span className=" text-large">price per lesson</span>
            <span className="text-large">
              Perfect if you prefer distance education.
            </span>
          </CardBody>
        </Card>
        <Card isBlurred className="w-full h-1/6 md:w-full md:h-full">
          <CardBody className="flex justify-center">
            <span className="text-3xl">English for Buisness</span>
            <span className="text-2xl">¥4,000</span>{" "}
            <span className="text-large">price per lesson</span>
            <span className="text-large">
              Buisness English course for mangers.
            </span>
          </CardBody>
        </Card>
        <Card isBlurred className="w-full h-1/6 md:w-full md:h-full">
          <CardBody className="flex justify-center">
            <span className="text-3xl">English for kids</span>
            <span className="text-2xl">¥3,000</span>{" "}
            <span className="text-large">price per lesson</span>
            <span>Easy-to-learn English course for children.</span>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
