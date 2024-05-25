import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import business from "@/images/business-learning.jpg";

export default function Business() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
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
          Elevate your professional communication skills with our English for
          Business course. Tailored for business professionals, this course
          focuses on the specific language and communication skills needed in
          the corporate world. Learn how to conduct meetings, deliver
          presentations, negotiate deals, write professional emails, and more.
          Our instructors bring real-world business experience to the classroom,
          ensuring that you gain practical and relevant skills to advance your
          career.
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
                    Busy schedule? No problem. Our online Business English
                    lessons allow you to enhance your skills without
                    compromising your work commitments. Join live sessions,
                    access business-focused materials, and practice with
                    professionals from around the globe. Our flexible online
                    platform makes it easy to fit learning into your busy life.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardBody>
      <CardFooter>
        <span className="text-2xl text-slate-500">¥4,000 per hour</span>
      </CardFooter>
    </Card>
  );
}
