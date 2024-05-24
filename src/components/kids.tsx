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
import kid from "@/images/young-learners.jpg";

export default function Kids() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Card isBlurred className="w-full h-fit p-1 m-1">
      <CardHeader className="text-3xl h-fit flex flex-col">
        <img alt="card background" src={kid} className="w-full rounded-xl " />
        <h1 className="m-2 p-2 font-bold"> English for Kids</h1>
      </CardHeader>
      <CardBody className="p-5">
        <p className="leading-8 indent-12 text-justify font-medium">
          Our English for Kids program is specially designed to make learning
          English fun and engaging for young learners. Through games, songs,
          stories, and interactive activities, children will develop their
          language skills in a nurturing and supportive environment. Our
          experienced instructors are experts in early childhood education and
          understand how to motivate and inspire children to learn. The
          curriculum is designed to improve vocabulary, pronunciation, grammar,
          and conversational skills, laying a solid foundation for future
          learning.
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
                    Our online classes for kids offer the same engaging and
                    interactive experience as our in-person sessions. Using a
                    kid-friendly virtual platform, children can participate in
                    fun activities, games, and lessons that make learning
                    English enjoyable. Parents can easily monitor progress and
                    participate in their child's learning journey from home.
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
        <span className="text-2xl text-slate-500">¥3,000 per hour</span>
      </CardFooter>
    </Card>
  );
}
