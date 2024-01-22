import MdFileContent from "@/components/mdFileContent";
import { GridOfCards } from "@/components/sectionGridOfCards";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import api from "@/lib/api";
import { shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";
import Animate from "@/components/animate";

type Data = {
    title:
        | string
        | {
              rendered: TrustedHTML;
          };
    name: string;
    img: string;
    slug: string;
    description: string | TrustedHTML;
    excerpt: {
        rendered: TrustedHTML;
    };
};
type PageDataProps = {
    pageData: {
        data: Data[];
        icon?: { name: keyof typeof dynamicIconImports; color?: string; size?: string };
        image?: { src: string; alt: string };
    };
    mdContent: string;
    cmsContent: Data[];
};

export default async function Servei({ params }: { params: { name: string; slug: string } }) {
    const { name, slug } = params;
    const { pageData, mdContent, cmsContent }: PageDataProps = await getData({ name, slug });
    const { data, image, icon } = pageData ?? {};
    const slugData =
         data?.find((s: Data) => s.slug === slug) || cmsContent?.find((s: Data) => s.slug === slug);

    return (
        <Animate>
            <main className='flex-1'>
                <section className='w-full pt-12 md:pt-24 lg:pt-32 border-b'>
                    <div className='px-4 md:px-6 space-y-10 xl:space-y-16'>
                        <div className='grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16'>
                            <div>
                                {typeof slugData?.title === 'string' ? (
                                    <h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                                        {slugData?.title}
                                    </h1>
                                ) : (
                                    slugData?.title?.rendered && 
                                    <h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]' dangerouslySetInnerHTML={{
                                        __html: slugData?.title?.rendered,
                                    }} />
                                )}
                                {slugData?.name && (
                                    <p className='text-gray-400 md:text-xl dark:text-gray-400'>{slugData?.name}</p>
                                )}
                                {slugData?.excerpt && (
                                    <div className='text-gray-400 md:text-xl dark:text-gray-400' dangerouslySetInnerHTML={{ __html: slugData?.excerpt?.rendered }} />
                                )}
                            </div>
                        </div>
                        {slugData?.img && (
                            <Image
                                alt={slugData.name}
                                className='mx-auto aspect-[16/9] overflow-hidden rounded-t-xl object-cover transition-all duration-500 ease-in-out'
                                height='574'
                                src={slugData.img}
                                width='1034'
                                placeholder={`data:image/svg+xml;base64,${toBase64(
                                    shimmer(1034, 574),
                                )}`}
                            />
                        )}
                    </div>
                </section>
                {slugData?.description && (
                    <>
                        <section className='w-full py-12 md:py-24 lg:py-32'>
                            <div className='px-4 md:px-6 space-y-10 xl:space-y-16'>
                                <div className='grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10'>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: slugData.description }}
                                        className='mx-auto text-gray-400 md:text-xl dark:text-gray-400'
                                    />
                                </div>
                            </div>
                        </section>
                        <hr className='max-w-[700px] mx-auto' />
                    </>
                )}
                {mdContent && (
                    <>
                        <section className='w-full py-12 md:py-24 lg:py-32'>
                            <div className='px-4 md:px-6 space-y-10 xl:space-y-16'>
                                <div className='grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10'>
                                    <MdFileContent
                                        content={mdContent}
                                        styles={
                                            'mx-auto text-gray-400 md:text-xl dark:text-gray-400'
                                        }
                                    />
                                </div>
                            </div>
                        </section>
                        <hr className='max-w-[700px] mx-auto' />
                    </>
                )}
                {data && (
                    <section className='w-full py-12 md:py-24 lg:py-32'>
                        <GridOfCards data={data} image={image} icon={icon} />
                    </section>
                )}
            </main>
        </Animate>
    );
}

const getData = async ({ name, slug }: { name: string; slug: string }): Promise<any> => {
    const [pageData, mdContent, cmsContent] = await Promise.all([
        api.adhocCulturaData.getData('json', name),
        api.adhocCulturaData.getData('md', slug),
        api.adhocCulturaData.getData('cms', undefined, 'posts'),
    ]);
    return {
        pageData,
        mdContent,
        cmsContent,
    };
};

export async function generateStaticParams() {
    const serveis = await api.adhocCulturaData.getData('json', 'serveis');
    const projectes = await api.adhocCulturaData.getData('json', 'projectes');
    const serviesStaticParams = serveis?.data?.map((s: { slug: string; type: string }) => ({
        name: s.type,
        slug: s.slug,
    }));
    const projectesStaticParams = projectes?.data?.map((s: { slug: string; type: string }) => ({
        name: s.type,
        slug: s.slug,
    }));
    return [...serviesStaticParams, ...projectesStaticParams];
}