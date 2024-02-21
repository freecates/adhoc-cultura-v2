import { Metadata } from "next";
import MdFileContent from "@/components/mdFileContent";
import api from '@/lib/api';
import SectionPageHeader from "@/components/sectionPageHeader";

type Metode = {
    metode: {
        title: string;
        name: string;
        img: string;
    };
    mdMetode: string;
};

export default async function Metode(): Promise<JSX.Element> {
    const { mdMetode, title, name, img } = await getPageData('metode');
    return (
        <main className='flex-1'>
            <SectionPageHeader slug='qui-som' title={title} name={name} img={img} />
            {mdMetode && (
                <>
                    <section className='w-full py-12 md:py-24 lg:py-32'>
                        <div className='px-4 md:px-6 space-y-10 xl:space-y-16'>
                            <div className='grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10'>
                                <MdFileContent
                                    content={mdMetode}
                                    styles={'mx-auto text-gray-400 md:text-xl dark:text-gray-400'}
                                />
                            </div>
                        </div>
                    </section>
                </>
            )}
        </main>
    );
}

export const generateMetadata = async (): Promise<Metadata> => {
    const { title, name } = await getPageData('metode');
    return {
        title,
        description: name,
        alternates: {
            canonical: 'https://www.adhoc-cultura.com/el-nostre-metode',
        },
    };
};

const getData = async (fileName: string): Promise<any> => {
    const [metode, mdMetode] = await Promise.all([
        api.adhocCulturaData.getData('json', fileName),
        api.adhocCulturaData.getData('md', fileName),
    ]);
    return {
        metode,
        mdMetode,
    };
};

const getPageData = async (fileName: string): Promise<any> => {
    const { metode, mdMetode }: Metode = await getData(fileName);
    const { title, name, img } = metode;
    return {
        metode,
        mdMetode,
        title,
        name,
        img,
    };
};