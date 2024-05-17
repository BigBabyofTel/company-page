import { Card, CardBody } from "@nextui-org/card";

export default function Courses() {
  return (
    <>
      <div className="w-full h-[1400px] md:h-[900px] bg-[rgb(221,206,184)] mx-auto">
        <h2 className="text-4xl pt-10 font-bold md:text-5xl text-center text-[rgb(78,101,122)] md:p-5 md:mb-4">
          Courses We Offer
        </h2>

        <div className="h-full w-full md:h-fit flex flex-col items-center justify-evenly md:w-fit md:grid md:gap-5 md:grid-col-2 md:grid-row-2 md:mx-auto">
          <Card
            isBlurred
            className="w-full h-1/6 md:w-[350px] md:h-[350px] md:col-start-1 md:row-start-1"
          >
            <CardBody className="flex justify-center">
              <span className="text-3xl">English for Beginners</span>{" "}
              <span className="text-2xl">¥3,000</span>{" "}
              <span className=" text-large">price per hour</span>{" "}
              <span className="text-large">Our best English course for starter level.</span>
            </CardBody>
          </Card>
          <Card
            isBlurred
            className="w-full h-1/6 md:w-[350px] md:h-[350px] md:col-start-2"
          >
            <CardBody className="flex justify-center">
              <span className="text-3xl">Online Learning</span>{" "}
              <span className="text-2xl">¥3,000</span>{" "}
              <span className=" text-large">price per hour</span>{" "}
              <span className="text-large">Perfect if you prefer distance education.</span>
            </CardBody>
          </Card>
          <Card isBlurred className="w-full h-1/6 md:w-[350px] md:h-[350px]">
            <CardBody className="flex justify-center">
              <span className="text-3xl">English for Business</span>{" "}
              <span className="text-2xl">¥4,000</span>{" "}
              <span className="text-large">price per hour</span>{" "}
              <span className="text-large">Business English course for managers.</span>
            </CardBody>
          </Card>
          <Card isBlurred className="w-full h-1/6 md:w-[350px] md:h-[350px]">
            <CardBody className="flex justify-center">
              <span className="text-3xl">English for kids</span>{" "}
              <span className="text-2xl">¥3,000</span>{" "}
              <span className="text-large">price per hour</span>{" "}
              <span className="text-large">Easier English course for children.</span>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
