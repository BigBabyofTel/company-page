import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Modal,
  ModalContent,
  Button,
  useDisclosure,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import beginner from "@/images/learning-beginners.jpg";
import online from "@/images/online-learners.jpg";
import business from "@/images/business-learning.jpg";
import kid from "@/images/young-learners.jpg";

export default function Courses({
  coursesRef,
}: {
  coursesRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();



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
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Card isBlurred className="w-full h-fit p-1 m-1">
                  <CardHeader className="text-3xl h-fit flex flex-col">
                    <img
                      alt="card background"
                      src={beginner}
                      className="w-full rounded-xl "
                    />
                    <h1 className="m-2 p-2 font-bold">
                      {" "}
                      English for Beginners
                    </h1>
                  </CardHeader>
                  <CardBody className="p-5">
                    <p className="leading-8 indent-12 text-justify font-medium">
                      Our English for Beginners course is designed for
                      individuals who are just starting their journey in
                      learning the English language. Whether you're a complete
                      novice or have a basic understanding of English, this
                      course will help you build a strong foundation in reading,
                      writing, speaking, and listening. Our experienced
                      instructors use interactive and engaging methods to ensure
                      that learning English is both fun and effective. With a
                      focus on practical vocabulary and everyday conversation,
                      you'll quickly gain the confidence to use English in
                      real-life situations.
                    </p>
                    <Button
                      color="primary"
                      variant="ghost"
                      onPress={onOpen}
                      className="m-1"
                    >
                      Online Learning Options
                    </Button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader>
                              <h1>English for Beginners Online</h1>
                            </ModalHeader>
                            <ModalBody>
                              <p className="text-justify">
                                Prefer learning from the comfort of your home?
                                Our online lessons provide the same high-quality
                                instruction as our in-person classes. With
                                flexible scheduling and interactive virtual
                                classrooms, you can participate in lessons,
                                practice speaking with peers, and receive
                                personalized feedback from your instructor, all
                                from your own home.
                              </p>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="primary"
                                variant="light"
                                onPress={onClose}
                              >
                                Close
                              </Button>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                  </CardBody>
                  <CardFooter>
                    <span className="text-2xl text-slate-500">
                      ¥3,000 per hour
                    </span>
                  </CardFooter>
                </Card>
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
                <Card isBlurred className="w-full h-fit p-1 m-1">
                  <CardHeader className="text-3xl h-fit flex flex-col">
                    <img
                      alt="card background"
                      src={business}
                      className="w-full rounded-xl "
                    />
                    <h1 className="m-2 p-2 font-bold"> English for Business</h1>
                  </CardHeader>
                  <CardBody className="p-5">
                    <p className="leading-8 indent-12 text-justify font-medium">
                      Elevate your professional communication skills with our
                      English for Business course. Tailored for business
                      professionals, this course focuses on the specific
                      language and communication skills needed in the corporate
                      world. Learn how to conduct meetings, deliver
                      presentations, negotiate deals, write professional emails,
                      and more. Our instructors bring real-world business
                      experience to the classroom, ensuring that you gain
                      practical and relevant skills to advance your career.
                    </p>
                    <Button
                      color="primary"
                      variant="ghost"
                      onPress={onOpen}
                      className="m-1"
                    >
                      Online Learning Options
                    </Button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader>
                              <h1>English for Business Online</h1>
                            </ModalHeader>
                            <ModalBody>
                              <p className="text-justify">
                                Busy schedule? No problem. Our online Business
                                English lessons allow you to enhance your skills
                                without compromising your work commitments. Join
                                live sessions, access business-focused
                                materials, and practice with professionals from
                                around the globe. Our flexible online platform
                                makes it easy to fit learning into your busy
                                life.
                              </p>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="primary"
                                variant="light"
                                onPress={onClose}
                              >
                                Close
                              </Button>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                  </CardBody>
                  <CardFooter>
                    <span className="text-2xl text-slate-500">
                      ¥3,000 per hour
                    </span>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card isBlurred className="w-full h-fit p-1 m-1">
                  <CardHeader className="text-3xl h-fit flex flex-col">
                    <img
                      alt="card background"
                      src={kid}
                      className="w-full rounded-xl "
                    />
                    <h1 className="m-2 p-2 font-bold"> English for Kids</h1>
                  </CardHeader>
                  <CardBody className="p-5">
                    <p className="leading-8 indent-12 text-justify font-medium">
                      Our English for Kids program is specially designed to make
                      learning English fun and engaging for young learners.
                      Through games, songs, stories, and interactive activities,
                      children will develop their language skills in a nurturing
                      and supportive environment. Our experienced instructors
                      are experts in early childhood education and understand
                      how to motivate and inspire children to learn. The
                      curriculum is designed to improve vocabulary,
                      pronunciation, grammar, and conversational skills, laying
                      a solid foundation for future learning.
                    </p>
                    <Button
                      color="primary"
                      variant="ghost"
                      onPress={onOpen}
                      className="m-1"
                    >
                      Online Learning Options
                    </Button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader>
                              <h1>English for Kids Online</h1>
                            </ModalHeader>
                            <ModalBody>
                              <p className="text-justify">
                                Our online classes for kids offer the same
                                engaging and interactive experience as our
                                in-person sessions. Using a kid-friendly virtual
                                platform, children can participate in fun
                                activities, games, and lessons that make
                                learning English enjoyable. Parents can easily
                                monitor progress and participate in their
                                child's learning journey from home.
                              </p>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="primary"
                                variant="light"
                                onPress={onClose}
                              >
                                Close
                              </Button>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                  </CardBody>
                  <CardFooter>
                    <span className="text-2xl text-slate-500">
                      ¥3,000 per hour
                    </span>
                  </CardFooter>
                </Card>
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
  /* plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]} */
}
