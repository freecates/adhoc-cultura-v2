import MdFileContent from "@/components/mdFileContent";
import { GridOfCards } from "@/components/sectionGridOfCards";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import api from "@/lib/api";
import { dateToLocale, shimmer, toBase64 } from '@/lib/utils';
import Image from 'next/image';
import Animate from '@/components/animate';
import SectionPageHeader from '@/components/sectionPageHeader';

type SlugPageData = {
    title: string;
    name: string;
    img: string;
    photo: string;
    slug: string;
    description: TrustedHTML;
    type: string;
};

type SlugCmsData = {
    title: {
        rendered: TrustedHTML;
    };
    slug: string;
    acf: {
        destacat: string;
    };
    date: string;
    content: {
        rendered: TrustedHTML;
    };
    type: string;
};
type PageDataProps = {
    pageData: {
        data: SlugPageData[];
        icon?: { name: keyof typeof dynamicIconImports; color?: string; size?: string };
        image?: { src: string; alt: string };
    };
    mdContent: string;
    cmsContent: SlugCmsData[];
};

export default async function Servei({ params }: { params: { name: string; slug: string } }) {
    const { name, slug } = params;
    const fileName = name === "team" || name === "partner" || name === "collaborator" ? "equip" : name; 
    const { pageData, mdContent, cmsContent }: PageDataProps = await getData({ fileName, slug });
    const { data, image, icon } = pageData ?? {};
    const slugPageData = data?.find((s: SlugPageData) => s.slug === slug);
    const slugPageDataImage = slugPageData?.img || slugPageData?.photo;
    const slugCmsContentData = cmsContent?.find((s: SlugCmsData) => s.slug === slug);

    return (
        <Animate>
            <main className='flex-1'>
                <SectionPageHeader
                    title={slugPageData?.title}
                    name={slugPageData?.name}
                    img={slugPageDataImage}
                    trustedHTMLtitle={slugCmsContentData?.title?.rendered}
                    date={slugCmsContentData?.date}
                    destacat={slugCmsContentData?.acf?.destacat}
                    slug={slug}
                    cmsType={slugCmsContentData?.type}
                    pageType={slugPageData?.type}
                    withBorder
                />
                {slugPageData?.description && (
                    <>
                        <section className='w-full py-6 md:py-12 lg:py-24'>
                            <div className='px-4 md:px-6 space-y-10 xl:space-y-16'>
                                <div className='grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10'>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: slugPageData.description,
                                        }}
                                        className='mx-auto text-gray-400 md:text-xl dark:text-gray-400'
                                    />
                                </div>
                            </div>
                        </section>
                        <hr className='max-w-[700px] mx-auto' />
                    </>
                )}
                {slugCmsContentData?.content.rendered && (
                    <>
                        <section className='w-full py-6 md:py-12 lg:py-24'>
                            <div className='px-4 md:px-6 space-y-10 xl:space-y-16'>
                                <div className='grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10'>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: slugCmsContentData.content.rendered,
                                        }}
                                        className='cms-content mx-auto text-gray-400 md:text-xl dark:text-gray-400'
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

const getData = async ({ fileName, slug }: { fileName: string; slug: string }): Promise<any> => {
    const [pageData, mdContent, cmsContent] = await Promise.all([
        api.adhocCulturaData.getData('json', fileName),
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
    const [serveis, projectes, posts] = await Promise.all([
        api.adhocCulturaData.getData('json', 'serveis'),
        api.adhocCulturaData.getData('json', 'projectes'),
        api.adhocCulturaData.getData('cms', undefined, 'posts'),
    ]);
    const serviesStaticParams = serveis?.data?.map((s: { slug: string; type: string }) => ({
        name: s.type,
        slug: s.slug,
    }));
    const projectesStaticParams = projectes?.data?.map((s: { slug: string; type: string }) => ({
        name: s.type,
        slug: s.slug,
    }));
    const postsStaticParams = posts?.map((s: { slug: string; type: string }) => ({
        name: s.type,
        slug: s.slug,
    }));
    return [...serviesStaticParams, ...projectesStaticParams, ...postsStaticParams];
}