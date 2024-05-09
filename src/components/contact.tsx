import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Phone } from "lucide-react";
import { Button } from "@nextui-org/button";


const schema = z.object({
    name: z.string().min(3, "Please enter more than 3 Characters"),
    email: z.string().email(),
    message: z.string().min(3, "Please enter more than 3 Characters")
  });

  type Schema = z.infer<typeof schema>;

export default function Contact() {
    const { register, handleSubmit } = useForm<Schema>({
        resolver: zodResolver(schema),
      });

      const onSubmit =(data: Schema) => {
        console.log(data)
      }

  return (
    <>
      <div id="contacts" className="w-full border h-[600px] my-10 p-2 flex flex-col md:flex-row justify-around bg-gradient-to-r from-blue-500 to-cyan-200">
        <section className="h-full w-full p-2">
            <h2 className="text-4xl my-5 text-center">Get In Touch</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="h-4/5 flex flex-col items-center">
                <div className="w-[70%] p-2 h-full flex flex-col justify-evenly">
            <input {...register("name")} placeholder="Name" name="name" className=" p-2 border rounded-xl"/>
            <input {...register("email")} placeholder="Email" name="email" className="p-2 border rounded-xl"/>
            <textarea {...register("message")} placeholder="Message" name="message" className="p-2 border rounded-xl"></textarea>
            <Button variant="faded" color="primary" >Send</Button>
            </div>
            
            </form>
        </section>
        <section className="w-full flex flex-col justify-between">
            <h2 className="text-4xl my- text-center">Our Teachers</h2>
            <article className="h-full p-2 flex flex-col items-center justify-around ">
                <aside className="p-1">teacher 1</aside>
                <aside className="p-1">teacher 2</aside>
            </article>
            <article className="p-1">
            <ul className="flex">
        <li className="flex p-5 text-sm md:text-lg">
          9 Valley St. Brooklyn, NY 11203
        </li>
        <li className="flex p-5 text-sm md:text-lg">
          <Phone />
          1-800-555-5555
        </li>
      </ul>
            </article>
            </section>
      </div>
    </>
  );
}
