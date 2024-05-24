import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import online from "@/images/online-learners.jpg";
import Beginners from "./beginners";
import Business from "./business";
import Kids from "./kids";

export default function Courses({
  coursesRef,
}: {
  coursesRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <>
      <div
        ref={coursesRef}
        className="w-full h-fit md:h-fit bg-[rgb(221,206,184)] mx-auto"
      >
        <h2 className="text-4xl pt-10 p-5 font-bold md:text-5xl text-center text-[rgb(78,101,122)] md:p-5 md:mb-4">
          Courses We Offer
        </h2>
        <div className="w-3/4 md:w-1/3 h-1/2 mx-auto">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <Beginners />
              </CarouselItem>
              <CarouselItem>
                <Card isBlurred className="w-full h-fit p-1 m-1">
                  <CardHeader className="text-3xl h-fit flex flex-col">
                    <img
                      alt="card background"
                      src={online}
                      className="w-full rounded-xl "
                    />
                    <h1 className="m-2 p-2 font-bold"> Online Learning</h1>
                  </CardHeader>
                  <CardBody className="p-5">
                    <p className="leading-8 indent-12 text-justify font-medium">
                      Our Online Learning platform brings the classroom to you,
                      no matter where you are in the world. We offer a range of
                      courses to suit all levels and needs, from beginners to
                      advanced learners, business professionals to young
                      children. Our virtual classrooms are equipped with
                      cutting-edge technology that facilitates interactive
                      learning. Engage with live lessons, participate in group
                      activities, and receive real-time feedback from our expert
                      instructors. Learn English on your own terms, with
                      flexible schedules that fit your lifestyle.
                    </p>
                  </CardBody>
                  <CardFooter>
                    <span className="text-2xl text-slate-500">
                      ¥3,000 per hour
                    </span>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Business />
              </CarouselItem>
              <CarouselItem>
                <Kids />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}

{
  /*  */
}
