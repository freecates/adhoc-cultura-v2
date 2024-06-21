/* eslint-disable react/no-unescaped-entities */
import api from '@/lib/api';
import SectionGripOfImages from '@/components/sectionGridOfImages';
import TestimonialsSection from "@/components/testimonials";
import { Metadata } from "next";

type Client = {
    name: string;
    logo: string;
};
type TreballemPer = {
    clients: Client[];
};

export default async function TreballemPer() {
    const { clients } = await getPageData('clients');
    return (
        <main className='flex-1'>
            <SectionGripOfImages title={'Treballem per'} data={clients} width={400} height={400} />
            <TestimonialsSection />
        </main>
    );
}

export const generateMetadata = async (): Promise<Metadata> => {
    const { clients } = await getPageData('clients');
    return {
        title: 'Treballem per',
        description: clients.map(({ name }: { name: string }): string => name).join(', '),
        alternates: {
            canonical: 'https://www.adhoc-cultura.cat/treballem-per',
        },
    };
};

const getData = async (fileName: string): Promise<{ clients: Client[] }> => {
    const [clients] = await Promise.all([api.adhocCulturaData.getData('json', fileName)]);
    return { clients };
};

const getPageData = async (fileName: string): Promise<{ clients: Client[] }> => {
    const { clients }: TreballemPer = await getData(fileName);
    return {
        clients,
    };
};
