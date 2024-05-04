import { Pencil } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

const schema = z.object({
  name: z.string().min(3, "Please enter more than 3 Characters"),
  phone: z.number(),
  email: z.string().email(),
});

type Schema = z.infer<typeof schema>;

export default function FreeLesson() {
  const { register, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <div className="m-2 p-3 flex justify-center w-screen">
      <Button onPress={onOpen} size="lg">Free Lesson?</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        placement="center"
      >
        <ModalContent>
          <ModalHeader><div className="flex items-center"><h1 className="m-1 p-1">Book A Free Lesson</h1><Pencil/></div></ModalHeader>
          <ModalBody className="m-2 p-2">
           
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                  <input {...register("name")} placeholder="Name" name="name" className="m-2 p-3"/>
                  <input
                    {...register("phone")}
                    placeholder="Phone"
                    name="phone"
                    className="m-2 p-3"
                  />
                  <input
                    {...register("email")}
                    placeholder="Email"
                    name="email"
                    className="m-2 p-3"
                  />
                  <Button>Ready for a Lesson</Button>
                </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
