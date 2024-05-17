import { Button } from "@nextui-org/button";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { User, Mail, MessageSquare } from "lucide-react";

const id = process.env.VITE_serviceId as string;
const template = process.env.VITE_templateId as string;
const key = process.env.VITE_publicKey as string;

export default function Contact({contactRef}: {contactRef: React.MutableRefObject<HTMLDivElement | null>}) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current === null) {
      console.log("Form is empty");
    } else {
      emailjs.sendForm(id, template, form.current, key).then(
        (result) => {
          alert("Your message has been sent successfully!");
          console.log(result.status);
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <>
      <div
      ref={contactRef}
       className="w-full border h-[600px] p-2 flex flex-col md:flex-row justify-around bg-gradient-to-r from-[rgb(16,46,62)] to-[rgb(48,115,154)]">
        <section className="h-full w-full p-2">
          <h2 className="text-4xl my-5 text-center text-white font-bold">
            Get In Touch
          </h2>
          <form
            className="h-4/5 w-full flex flex-col items-center"
            onSubmit={sendEmail}
            ref={form}
          >
            <div className="w-96 md:w-3/4 p-2 h-full flex flex-col justify-evenly items-center bg-white rounded-xl">
              <div className="w-full h-1/3 flex flex-col 2xl:flex-row 2xl:items-center justify-around">
                <Input
                  variant="underlined"
                  isRequired
                  type="text"
                  placeholder="Name"
                  name="name"
                  startContent={<User color="rgb(78,101,122)" />}
                  style={{ border: "none" }}
                  className="2xl:w-[40%] w-full"
                />

                <Input
                  variant="underlined"
                  isRequired
                  type="email"
                  placeholder="Email"
                  name="email"
                  startContent={<Mail color="rgb(78,101,122)" />}
                  style={{ border: "none" }}
                  className="2xl:w-[40%] w-full"
                />
              </div>
              <Textarea
                variant="underlined"
                isRequired
                placeholder="Message"
                name="message"
                startContent={<MessageSquare color="rgb(78,101,122)" />}
                style={{ border: "none" }}
                className="2xl:w-[90%]"
              />

              <Button
              size="lg"
                type="submit"
                variant="shadow"
                className="w-1/4 text-white bg-[rgb(78,101,122)]"
              >
                Send
              </Button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
