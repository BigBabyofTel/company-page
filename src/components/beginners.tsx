import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import beginner from "@/images/learning-beginners.jpg";

export default function Beginners () {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return(
        <Card isBlurred className="w-full h-fit p-1 m-1">
        <CardHeader className="text-3xl h-fit flex flex-col">
          <img
            alt="card background"
            src={beginner}
            className="w-full rounded-xl "
          />
          <h1 className="m-2 p-2 font-bold">
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
    )
}