import { Metadata } from "next";
import MdFileContent from "@/components/mdFileContent";
import api from "@/lib/api";
import { shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";
import SectionPageHeader from "@/components/sectionPageHeader";

type Metode = {
    metode: {
        title: string;
        name: string;
        img: string;
    };
    mdMetode: string;
};

export default async function Metode() {
    const { metode, mdMetode }: Metode = await getData();
    return (
        <main className="flex-1">
            <SectionPageHeader slug='qui-som' title={metode?.title} name={metode?.name} img={metode?.img} />
            {mdMetode &&
                <>
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10">
                                <MdFileContent content={mdMetode} styles={'mx-auto text-gray-400 md:text-xl dark:text-gray-400'} />
                            </div>
                        </div>
                    </section>
                </>
            }
        </main>
    )
}

const generateMetadata = async (): Promise<Metadata> => {
    const [metode] = await Promise.all([api.adhocCulturaData.getData('json', 'metode')]);
    const { title, name } = metode;
    return {
        title,
        description: name,
        alternates: {
            canonical: 'https://adhoc-cultura.com/el-nostre-metode',
        },
    };
};

const getData = async (): Promise<any> => {
    const [metode, mdMetode] = await Promise.all([
        api.adhocCulturaData.getData('json', 'metode'),
        api.adhocCulturaData.getData('md', 'metode'),
    ]);
    return {
        metode,
        mdMetode,
    };
  };

export { generateMetadata }