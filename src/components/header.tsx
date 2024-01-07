import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Header() {
    return (
        
        <header className="px-4 lg:px-6 h-32 md:h-20 flex flex-col md:flex-row items-center">
        <Link className="flex items-center justify-center mr-1" href="#">
          <Image
              width={80}
              height={44}
              alt="Adhoc Cultura"
              className="w-20 mt-1 md:mt-0 transition-all duration-500 ease-in-out"
              src="https://www.adhoc-cultura.com/static/bg-adhoc-cultura-1024.jpg"
            />
        </Link>
        <nav className="my-2 md:my-0 md:ml-auto md:mr-2 flex items-center justify-center gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Qui som
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Serveis
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Mètode
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Treballem per
          </Link>
        </nav>
        <Button asChild={true} variant={'secondary'} size={"sm"}><a href="https://www.aracultura.com/" target="_blank">ARA Cultura</a></Button>
      </header>
    )
}