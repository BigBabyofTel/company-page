export default function Footer() {
  return (
    <footer className="w-full h-[300px]">
      <div className="flex flex-col md:flex-row items-center">
        <section className="flex items-center justify-center w-fit">
          <img src="logo.svg" alt="logo" className="w-1/5 md:w-[13%]" />
          <h1 className="text-3xl text-center">LingoAcademy</h1>
        </section>
        <section className="flex flex-col text-center md:w-1/2 my-10 md:ml-5">
          <h3 className="text-3xl font-bold p-3 my-5">POPULAR COURSES</h3>
          <ul className="flex flex-col items-center">
            <li className="flex justify-evenly w-full p-2">
              <span>English for Kids</span>
              <span>$45</span>
            </li>
            <li className="flex justify-evenly w-full p-2">
              <span>Online Learning</span>
              <span>$15</span>
            </li>
            <li className="flex justify-evenly w-full p-2">
              <span>Personal Lessons</span>
              <span>$21</span>
            </li>
            <li className="flex justify-evenly w-full p-2">
              <span>Group Lessons</span>
              <span>$35</span>
            </li>
            <li className="flex justify-evenly w-full p-2">
              <span>English Club</span>
              <span>$36</span>
            </li>
          </ul>
        </section>
        <section className="w-1/2 text-center my-5">
          <h3 className="text-3xl mb-3 font-bold">Get In Touch</h3>
          <ul className="flex flex-col">
            <li className="m-2">Send a Message</li>
            <li className="m-2">Contacts</li>
            <li className="m-2">Request a Callback</li>
          </ul>
        </section>
      </div>
      <hr />
      <section className="text-center font-bold my-2">
        © 2024 LingoAcademy
      </section>
    </footer>
  );
}
