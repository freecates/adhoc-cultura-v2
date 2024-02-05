/* eslint-disable react/no-unescaped-entities */
import dynamicIconImports from "lucide-react/dynamicIconImports"
import api from '@/lib/api';
import SectionGripOfImages from '@/components/sectionGridOfImages';
import TestimonialsSection from "@/components/testimonials";
import { Metadata } from "next";

type Data = {
    title: string;
    name: string;
};

type Client = {
    name: string;
    logo: string;
};
type TreballemPer = {
    clients: Client[];
    projectes: {
        icon?: {
            name: keyof typeof dynamicIconImports;
            color?: string;
            size?: string;
        };
        data: Data[];
    };
};

export default async function TreballemPer() {
    const { clients }: TreballemPer = await getData();
    return (
        <main className='flex-1'>
            <SectionGripOfImages title={'Treballem per'} data={clients} />
            <TestimonialsSection />
        </main>
    );
}

export const generateMetadata = async (): Promise<Metadata> => {
    const [clients] = await Promise.all([api.adhocCulturaData.getData('json', 'clients')]);
    return {
        title: 'Treballem per',
        description: clients.map(({ name }: { name: string }): string => name).join(', '),
        alternates: {
            canonical: 'https://adhoc-cultura.com/treballem-per',
        },
    };
};

const getData = async (): Promise<any> => {
  const [clients] = await Promise.all([api.adhocCulturaData.getData('json', 'clients')]);
  return { clients };
};
