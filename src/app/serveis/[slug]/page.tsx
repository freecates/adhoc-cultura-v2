import { GridOfCards } from "@/components/sectionGridOfCards";
import api from "@/lib/api";
import { shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";

type Servei = {
  title: string;
  name: string;
  img: string;
  slug: string;
  description: string | TrustedHTML;
};
type ServeisProps = { 
  serveis: Servei[];
};

export default async function Servei({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const { serveis }: ServeisProps = await getData();
    const servei = serveis.find((s: Servei) => s.slug === slug);

    return (
        <main className="flex-1">
            <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b">
                <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                        <div>
                            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                {servei?.title}
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400">
                                {servei?.name}
                            </p>
                        </div>
                    </div>
                    {servei?.img &&
                        <Image
                            alt={servei.name}
                            className="mx-auto aspect-[16/9] overflow-hidden rounded-t-xl object-cover transition-all duration-500 ease-in-out"
                            height="574"
                            src={servei.img}
                            width="1034"
                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1034, 574))}`}
                        />
                    }
                </div>
            </section>
            {servei?.description &&
                <>
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10">
                                <div dangerouslySetInnerHTML={{ __html: servei.description }} className="mx-auto text-gray-400 md:text-xl dark:text-gray-400" />
                            </div>
                        </div>
                    </section>
                    <hr className="max-w-[700px] mx-auto"/>
                </>
            }
            <section className="w-full py-12 md:py-24 lg:py-32">
                <GridOfCards data={serveis} image={{src: "/bg-adhoc-cultura-320.jpg", alt: "Adhoc Logo"}} />
            </section>
        </main>
    )
}

const getData = async (): Promise<any> => {
  const [serveis] = await Promise.all([
      api.adhocCulturaData.getData('serveis'),
  ]);
  return {
      serveis,
  };
};

export async function generateStaticParams() {
    const serveis = await api.adhocCulturaData.getData('serveis');
    const staticParams = serveis.map((s: { slug: string }) => ({
        slug: s.slug,
    }));
    return staticParams;
}