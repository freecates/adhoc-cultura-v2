/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { JSX, SVGProps } from "react"
import Image from "next/image"

export function Landing() {
  return (
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  La cultura com a motor econòmic i social
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400">
                Desenvolupem projectes per promocionar la cultura i apropar-la a la societat.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Button>Comencem</Button>
              </div>
            </div>
            <Image
              alt="Ad"
              className="mx-auto aspect-[16/9] overflow-hidden rounded-t-xl object-cover transition-all duration-500 ease-in-out"
              height="574"
              src="https://www.adhoc-cultura.com/static/bg-adhoc-cultura-1024.jpg"
              width="1034"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Serveis</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Estem especialitzats en un conjunt de serveris culturals creatius per ajudar-vos a reixir.
              </p>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Image
                    width={48}
                    height={27}
                    alt="Ad"
                    className="w-12 transition-all duration-500 ease-in-out"
                    src="https://www.adhoc-cultura.com/static/bg-adhoc-cultura-1024.jpg"
                  />
                  <h3 className="text-lg font-bold">Auditoria</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  Auditoria i consultoria general de cultura
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                <Image
                    width={48}
                    height={27}
                    alt="Ad"
                    className="w-12 transition-all duration-500 ease-in-out"
                    src="https://www.adhoc-cultura.com/static/bg-adhoc-cultura-1024.jpg"
                  />
                  <h3 className="text-lg font-bold">Estudi</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Estudi, disseny i millora instal·lacions i materials audiovisuals
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                <Image
                    width={48}
                    height={27}
                    alt="Ad"
                    className="w-12 transition-all duration-500 ease-in-out"
                    src="https://www.adhoc-cultura.com/static/bg-adhoc-cultura-1024.jpg"
                  />
                  <h3 className="text-lg font-bold">Innovació</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Innovació cultural i+d en cultura
                  </p>
                </CardContent>
              </Card><Card>
                <CardHeader>
                  <Image
                    width={48}
                    height={27}
                    alt="Ad"
                    className="w-12 transition-all duration-500 ease-in-out"
                    src="https://www.adhoc-cultura.com/static/bg-adhoc-cultura-1024.jpg"
                  />
                  <h3 className="text-lg font-bold">Producció</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Producció, creació, gestió i comunicació esdeveniments culturals
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                <Image
                    width={48}
                    height={27}
                    alt="Ad"
                    className="w-12 transition-all duration-500 ease-in-out"
                    src="https://www.adhoc-cultura.com/static/bg-adhoc-cultura-1024.jpg"
                  />
                  <h3 className="text-lg font-bold">Programació</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Programació, comissariat i muntatge exposicions
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                <Image
                    width={48}
                    height={27}
                    alt="Ad"
                    className="w-12 transition-all duration-500 ease-in-out"
                    src="https://www.adhoc-cultura.com/static/bg-adhoc-cultura-1024.jpg"
                  />
                  <h3 className="text-lg font-bold">Educació</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Serveis educatius per a institucions culturals
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-white">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Testimonis</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                No us cregueu només la nostra paraula, escolteu la dels nostres clients.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Card>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "The team at Adhoc Cultura has been instrumental in the growth of our online business. Their
                    services have consistently delivered results and they are a pleasure to work with."
                  </p>
                  <Badge>John Doe, CEO of Example Co.</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "Adhoc Cultura exceeded our expectations. They really understood our needs and came up with
                    amazing creative solutions for our site. Thank you to the team."
                  </p>
                  <Badge>Jane Smith, Founder of Start-up</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projectes</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Feu una ullada als nostres projectes.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                alt="Portfolio Item 1"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full transition-all duration-500 ease-in-out"
                height="300"
                src="https://adhocdata.vercel.app/static/clients/iluro-adhoc-cultura.jpg"
                width="550"
              />
              <Image
                alt="Portfolio Item 2"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full transition-all duration-500 ease-in-out"
                height="300"
                src="https://adhocdata.vercel.app/static/clients/museu-emporda-adhoc-cultura.jpg"
                width="550"
              />
            </div>
            <div className="flex justify-center">
              <Button>Veure'n més</Button>
            </div>
          </div>
        </section>
      </main>
  )
}


function CreativeCommonsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" />
      <path d="M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" />
    </svg>
  )
}
