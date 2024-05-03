import Courses from "./components/courses";
import Freelesson from "./components/freelesson";
import Header from "./components/header";
import { Button } from "@nextui-org/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
});

type Schema = z.infer<typeof schema>;

export default function App() {
  const { register, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <img src="./hero-section.webp" alt="" className="p-2" />
      <Freelesson />
      <Courses />
      <div className="text-center">
        <div className="">
        <h1 className="text-3xl text-blue-600">JOIN OUR NEWSLETTER</h1>
        <p className="text-blue-600">
          Subscribe to our newsletter to recieve the latest news & updates.
        </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <input
            {...register("email")}
            placeholder="Email"
            name="email"
            className="m-2 p-3"
          />
          <Button size="md" color="success">
            Send
          </Button>
        </form>
      </div>
    </>
  );
}
