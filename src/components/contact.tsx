import { Button } from "@nextui-org/button";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";

const id = import.meta.env.VITE_serviceId;
const template = import.meta.env.VITE_templateId;
const key = import.meta.env.VITE_publicKey;

console.log(template);

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current === null) {
      console.log("Form is empty");
    } else {
      emailjs.sendForm(id, template, form.current, key).then(
        (result) => {
          console.log(result.text);
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
        id="contacts"
        className="w-full border h-[600px] my-10 p-2 flex flex-col md:flex-row justify-around bg-gradient-to-r from-[rgb(16,46,62)] to-[rgb(48,115,154)]"
      >
        <section className="h-full w-full p-2">
          <h2 className="text-4xl my-5 text-center text-white font-bold">
            Get In Touch
          </h2>
          <form
            className="h-4/5 w-full flex flex-col items-center"
            onSubmit={sendEmail}
            ref={form}
          >
            <div className="w-96 md:w-1/2 p-2 h-full flex flex-col justify-evenly items-center">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className=" p-2 border rounded-xl w-2/3"
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                className="p-2 border rounded-xl w-2/3"
              />

              <textarea
                placeholder="Message"
                name="message"
                className="p-2 border rounded-xl w-2/3"
              ></textarea>

              <Button
                type="submit"
                variant="faded"
                color="primary"
                className="w-2/3"
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
