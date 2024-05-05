import { Button } from "@nextui-org/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
    email: z.string().email(),
  });
  
  type Schema = z.infer<typeof schema>;


export default function Newsletter() {

    const { register, handleSubmit } = useForm<Schema>({
        resolver: zodResolver(schema),
      });
      const onSubmit = (data: Schema) => {
        console.log(data);
      }

return (
    <div className="w-full mx-auto">
      <div className="text-center h-[600px] flex items-center justify-center flex-col bg-[url('./newsletter-bg.jpg')] bg-top bg-cover">
        <div className="">
          <h1 className="text-3xl p-2">JOIN OUR NEWSLETTER</h1>
          <p className="p-5">
            Subscribe to our newsletter to recieve the latest news & updates.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
          <input
            {...register("email")}
            placeholder="Email"
            name="email"
            className="m-1 p-2 border rounded-xl"
          />
          <Button size="md" color="success" type="submit">
            Send
          </Button>
        </form>
      </div>
      </div>
)

}