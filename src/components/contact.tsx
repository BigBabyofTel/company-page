import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone } from "lucide-react";
import { Button } from "@nextui-org/button";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

const schema = z.object({
  name: z.string().min(3, "Please enter more than 3 Characters").trim(),
  email: z.string().email('Invalid email').trim(),
  message: z.string().trim().min(10, "Please enter at least 10 Characters"),
});

type Schema = z.infer<typeof schema>;

const id = import.meta.env.VITE_serviceId
const template = import.meta.env.VITE_template
const key = import.meta.env.VITE_publicKey

export default function Contact() {
  const { register, handleSubmit, formState: {errors} } = useForm<Schema>({
    resolver: zodResolver(schema),
  });
/*
const onSubmit: SubmitHandler<Schema> = async (data) => {
  try{
    const response = await emailjs.sendForm(
      id, 
    )
  }
}
  */
  return (
    <>
      <div
        id="contacts"
        className="w-full border h-[600px] my-10 p-2 flex flex-col md:flex-row justify-around bg-gradient-to-r from-[rgb(16,46,62)] to-[rgb(48,115,154)]"
      >
        <section className="h-full w-full p-2">
          <h2 className="text-4xl my-5 text-center text-white font-bold">Get In Touch</h2>
          <form
            onSubmit={onsubmit}
            className="h-4/5 w-full flex flex-col items-center"
          >
            <div className="w-96 md:w-1/2 p-2 h-full flex flex-col justify-evenly items-center">
              <input
                {...register("name")}
                placeholder="Name"
                name="name"
                className=" p-2 border rounded-xl w-2/3"
              />
              <input
                {...register("email")}
                placeholder="Email"
                name="email"
                className="p-2 border rounded-xl w-2/3"
              />
              <textarea
                {...register("message")}
                placeholder="Message"
                name="message"
                className="p-2 border rounded-xl w-2/3"
              ></textarea>
              <Button variant="faded" color="primary" className="w-2/3">
                Send
              </Button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
