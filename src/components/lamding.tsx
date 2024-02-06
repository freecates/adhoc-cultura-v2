/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import Image from "next/image"
import api from "@/lib/api"
import { shimmer, toBase64 } from "@/lib/utils"
import SectionGridOfCards from "./sectionGridOfCards"
import SectionGripOfImages from "./sectionGridOfImages"
import dynamicIconImports from "lucide-react/dynamicIconImports"
import Link from 'next/link';
import TestimonialsSection from "./testimonials"

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
                          <Button asChild>
                              <Link href={'/adhoc'}>Comencem</Link>
                          </Button>
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
          <SectionGridOfCards
              title={projectes.title}
              description={`Selecció de ${projectes.description}`}
              data={projectes.data}
              icon={projectes.icon}
              isShuffled
              maxItems={4}
              buttonText={"Veure'n més"}
              buttonLink={'/projectes'}
          />
          <SectionGridOfCards
              title={serveis?.title}
              description={
                  'Estem especialitzats en un conjunt de serveris culturals creatius per ajudar-vos a reixir.'
              }
              data={serveis.data}
              image={serveis.image}
          />
          <TestimonialsSection />
          <SectionGripOfImages
              title={'Treballem per'}
              description={'Feu una ullada als nostres clients.'}
              data={clients}
              isShuffled
              maxItems={2}
              cols={2}
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
