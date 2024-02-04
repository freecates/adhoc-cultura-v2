/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import SectionGripOfImages from '@/components/sectionGridOfImages';
import SectionPageHeader from '@/components/sectionPageHeader';
import api from '@/lib/api';

type Data = {
    title: string;
    photo: string;
    type: string;
    slug: string;
};

type QuiSomProps = {
    equip: {
        title: string;
        description: string;
        data: Data[];
    };
};

export default async function QuiSom() {
    const { equip }: QuiSomProps = await getData();
    const { title, description, data } = equip;
    const team = data.filter((d): d is Data => d.type === 'team');
    const partner = data.filter((d): d is Data => d.type === 'partner');
    const collaborator = data.filter((d): d is Data => d.type === 'collaborator');
    const gridData = (type: { title: string; photo: string; slug: string; type: string }[]): { name: string; logo: string; route?: string }[] =>
        type.map(({ title, photo, slug, type }): { name: string; logo: string; route: string } => ({
            name: title,
            logo: photo,
            route: `/${type}/${slug}`,
        }));
    return (
        <main className='flex-1'>
            <SectionPageHeader slug='qui-som' title={title} name={description} />
            <SectionGripOfImages title={'Equip'} data={gridData(team)} cols={2} />
            <SectionGripOfImages title={'Socis estratègics '} data={gridData(partner)} cols={3} />
            <SectionGripOfImages title={'Col·laboradors '} data={gridData(collaborator)} cols={3} />
        </main>
    );
}

const generateMetadata = async (): Promise<Metadata> => {
    const [equip] = await Promise.all([api.adhocCulturaData.getData('json', 'equip')]);
    const { title, description } = equip;
    return {
        title,
        description,
        alternates: {
            canonical: 'https://adhoc-cultura.com/qui-som',
        },
    };
};

const getData = async (): Promise<any> => {
    const [equip] = await Promise.all([api.adhocCulturaData.getData('json', 'equip')]);
    return { equip };
};

export { generateMetadata };
