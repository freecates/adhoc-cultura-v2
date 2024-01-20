/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import api from "@/lib/api"
import { shimmer, toBase64 } from "@/lib/utils"
import SectionGripOfCards from "./sectionGridOfCards"
import SectionGripOfImages from "./sectionGridOfImages"
import dynamicIconImports from "lucide-react/dynamicIconImports"

type Data = {
  title: string;
  name: string;
};
type Model = {
  title: string;
  description: string;
  icon?: {
    name: keyof typeof dynamicIconImports;
    color?: string;
    size?: string;
  }
  image?: {
    src: string;
    alt: string;
  }
  data: Data[];
}
type Client = {
  name: string;
  logo: string;
}
type ServeisProps = { 
  serveis: Model;
  clients: Client[];
  projectes: Model;
};

export async function Landing(): Promise<JSX.Element> {
  const { serveis, clients, projectes }: ServeisProps = await getData();
  return (
      <main className='flex-1'>
          <section className='w-full pt-12 md:pt-24 lg:pt-32 border-b'>
              <div className='px-4 md:px-6 space-y-10 xl:space-y-16'>
                  <div className='grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16'>
                      <div>
                          <h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                              La cultura com a motor de millora i innovació social
                          </h1>
                          <p className='mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400'>
                              Treballem perquè totes les persones puguin gaudir dels beneficis de la
                              cultura
                          </p>
                      </div>
                      <div className='flex flex-col items-start space-y-4'>
                          <Button>Comencem</Button>
                      </div>
                  </div>
                  <Image
                      alt='Ad'
                      className='mx-auto aspect-[16/9] overflow-hidden rounded-t-xl object-cover transition-all duration-500 ease-in-out'
                      height='574'
                      src='/bg-adhoc-cultura-1024.jpg'
                      width='1034'
                      placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1034, 574))}`}
                  />
              </div>
          </section>
          <SectionGripOfCards
              title={projectes.title}
              description={`Selecció de ${projectes.description}`}
              data={projectes.data}
              icon={projectes.icon}
              isShuffled
              maxItems={4}
              buttonText={"Veure'n més"}
              buttonLink={'/projectes'}
          />
          <SectionGripOfCards
              title={serveis?.title}
              description={
                  'Estem especialitzats en un conjunt de serveris culturals creatius per ajudar-vos a reixir.'
              }
              data={serveis.data}
              image={serveis.image}
          />
          <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-white'>
              <div className='container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6'>
                  <div className='space-y-3'>
                      <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                          Testimonis
                      </h2>
                      <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                          No us cregueu només la nostra paraula, escolteu la dels nostres clients.
                      </p>
                  </div>
                  <div className='mx-auto w-full max-w-sm space-y-2'>
                      <Card>
                          <CardContent>
                              <p className='text-sm text-gray-500 dark:text-gray-400'>
                                  "The team at Adhoc Cultura has been instrumental in the growth of
                                  our online business. Their services have consistently delivered
                                  results and they are a pleasure to work with."
                              </p>
                              <Badge>John Doe, CEO of Example Co.</Badge>
                          </CardContent>
                      </Card>
                      <Card>
                          <CardContent>
                              <p className='text-sm text-gray-500 dark:text-gray-400'>
                                  "Adhoc Cultura exceeded our expectations. They really understood
                                  our needs and came up with amazing creative solutions for our
                                  site. Thank you to the team."
                              </p>
                              <Badge>Jane Smith, Founder of Start-up</Badge>
                          </CardContent>
                      </Card>
                  </div>
              </div>
          </section>
          <SectionGripOfImages
              title={'Treballem per'}
              description={'Feu una ullada als nostres clients.'}
              data={clients}
              isShuffled
              maxItems={2}
              buttonText={"Veure'n més"}
              buttonLink={'/treballem-per'}
          />
      </main>
  );
}

const getData = async (): Promise<any> => {
  const [serveis, clients, projectes] = await Promise.all([
      api.adhocCulturaData.getData('json', 'serveis'),
      api.adhocCulturaData.getData('json', 'clients'),
      api.adhocCulturaData.getData('json', 'projectes'),
  ]);
  return {
      serveis,
      clients,
      projectes,
  };
};
