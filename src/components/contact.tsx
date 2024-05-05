import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Phone } from "lucide-react";


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
      <div className="border h-[500px] my-10 p-2 flex flex-col md:flex-row justify-around bg-gradient-to-r from-blue-500 to-cyan-200">
        <section className="h-full w-1/3 ">
            <h2 className="text-4xl my-5">Get In Touch</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="h-2/3 flex flex-col justify-evenly">
                <div className="flex justify-between">
            <input {...register("name")} placeholder="Name" name="name" className=" p-2 border rounded-xl"/>
            <input {...register("email")} placeholder="Email" name="email" className="p-2 border rounded-xl"/>
            </div>
            <textarea {...register("message")} placeholder="Message" name="message" className="p-2 border rounded-xl"></textarea>
            </form>
        </section>
        <section className="w-1/3 flex flex-col justify-between">
            <h2 className="text-4xl my-5">Our Teachers</h2>
            <article className="h-full flex flex-col items-center justify-around ">
                <aside className="">teacher 1</aside>
                <aside className="">teacher 2</aside>
            </article>
            <article className="">
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
