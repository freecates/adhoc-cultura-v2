import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer () {
    return (<footer>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-white">
          <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contacte</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Teniu alguna pregunta? Poseu-vos en contacte amb nosaltres i ens posarem en contacte amb vos en breu.
              </p>
            </div>
            <div className="flex space-x-4 lg:justify-end">
              <Button>Envieu missatge</Button>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
          <p className="text-xs text-gray-500">© Adhoc Cultura. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </section>
      </footer>
    )
}   