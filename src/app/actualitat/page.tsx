/* eslint-disable react/no-unescaped-entities */
import api from '@/lib/api';
import SectionGridOfCards from '@/components/sectionGridOfCards';
import { Metadata } from 'next';

import type { JSX } from "react";

type Data = {
    title: {
        rendered: string;
    };
    name: string;
    type: string;
};
type NameProps = {
    title: string;
    description: string;
    pageData:  Data[];
};

const actualitat = {
    title: 'Actualitat',
    description: 'L\'actualitat d\'Adhoc Cultura',
}

export default async function Name(): Promise<JSX.Element> {
    const { pageData }: NameProps = await getData();
    return (
        <main className='flex-1'>
            <SectionGridOfCards
                title={actualitat.title}
                description={actualitat.description}
                data={pageData}
            />
        </main>
    );
}

export const metadata: Metadata = {
    title: actualitat.title,
    description: actualitat.description,
    alternates: {
        canonical: 'https://www.adhoc-cultura.cat/actualitat',
    },
};

const getData = async (): Promise<any> => {
    const [pageData] = await Promise.all([api.adhocCulturaData.getData('cms', undefined, 'posts')]);
    return {
        pageData,
    };
};
