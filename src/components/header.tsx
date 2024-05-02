import { MapPin, Phone } from "lucide-react"

export default function Header() {

    return (
        <header className="p-5 flex justify-between">
            <section className="flex items-center">
            <img src="logo.svg" alt="logo" className="w-[3%]" />
            <h1 className="text-4xl text-bold p-3"><span className="text-[#0432ff]">Lingo</span>Academy</h1>
            </section>
            <ul className="flex items-center">
                <li><MapPin/></li>
                <li className="flex p-3">9 Valley St. Brooklyn, NY 11203</li>
                <li><Phone/></li>
                <li className="flex p-3">1-800-555-5555</li>
            </ul>
        </header>
    )
}