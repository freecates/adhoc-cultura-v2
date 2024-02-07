/* eslint-disable react/no-unescaped-entities */
import SectionGridOfCards from '@/components/sectionGridOfCards';
import api from '@/lib/api';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { Metadata } from 'next';

type Data = {
    title: string;
    name: string;
};
type NameProps = {
    pageData: {
        title: string;
        description: string;
        image?: {
            src: string;
            alt: string;
        };
        icon?: {
            name: keyof typeof dynamicIconImports;
            color?: string;
            size?: string;
        };
        data: Data[];
    };
};

export default async function Name({ params }: { params: { name: string } }): Promise<JSX.Element> {
    const { title, description, image, icon, data } = await getPageData(params.name);
    return (
        <main className='flex-1'>
            <SectionGridOfCards
                title={title}
                description={description}
                data={data}
                image={image && image}
                icon={icon && icon}
            />
        </main>
    );
}

export const generateMetadata = async ({ params }: { params: { name: string } }): Promise<Metadata> => {
    const { title, description, titles } = await getPageData(params.name);
    return {
        title,
        description: description + ' | ' + titles?.join(', '),
        alternates: {
            canonical: `https://adhoc-cultura.com/${params.name}`,
        },
    };
};

const getData = async (fileName: string): Promise<any> => {
    const [pageData] = await Promise.all([api.adhocCulturaData.getData('json', fileName)]);
    return {
        pageData,
    };
};

const getPageData = async (fileName: string) => {
    const { pageData }: NameProps = await getData(fileName);
    const { title, description, image, icon, data } = pageData;
    const titlesFromArray = data.map(({ title }: { title: string }): string => title);
    const titles = [...new Set<string>(titlesFromArray)];

    return {
        title,
        description,
        image,
        icon,
        data,
        titles,
    };
};

export const generateStaticParams = async (): Promise<{ name: string }[]> => {
    return [{ name: 'projectes' }, { name: 'serveis' }, { name: 'partners' }];
};
