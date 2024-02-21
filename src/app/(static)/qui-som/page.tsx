/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import SectionGripOfImages from '@/components/sectionGridOfImages';
import SectionPageHeader from '@/components/sectionPageHeader';
import api from '@/lib/api';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/lib/utils';

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
        fullImage: {
            src: string;
            alt: string;
        };
        data: Data[];
    };
};

export default async function QuiSom(): Promise<JSX.Element> {
    const { team, partner, collaborator, title, description, fullImage } = await getPageData(
        'equip',
    );

    const gridData = (
        type: { title: string; photo: string; slug: string; type: string }[],
    ): { name: string; logo: string; route?: string }[] =>
        type.map(({ title, photo, slug, type }): { name: string; logo: string; route: string } => ({
            name: title,
            logo: photo,
            route: `/${type}/${slug}`,
        }));
    return (
        <main className='flex-1'>
            <SectionPageHeader slug='qui-som' title={title} name={description} />
            <SectionGripOfImages title={'Equip'} data={gridData(team)} cols={2} />
            <section className={`bg-black text-white w-full`}>
                <div className='mx-auto text-center'>
                    <Image
                        className='mx-auto aspect-[16/9] overflow-hidden object-cover transition-all duration-500 ease-in-out'
                        alt={fullImage.alt}
                        src={fullImage.src}
                        height={933}
                        width={1680}
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1680, 933))}`}
                    />
                </div>
            </section>
            <SectionGripOfImages title={'Socis estratègics '} data={gridData(partner)} cols={3} />
            <SectionGripOfImages title={'Col·laboradors '} data={gridData(collaborator)} cols={3} />
        </main>
    );
}

export const generateMetadata = async (): Promise<Metadata> => {
    const { title, description, data } = await getPageData('equip');
    return {
        title,
        description:
            description +
            ' | ' +
            data.map(({ title }: { title: string }): string => title).join(', '),
        alternates: {
            canonical: 'https://www.adhoc-cultura.com/qui-som',
        },
    };
};

const getData = async (name: string): Promise<any> => {
    const [equip] = await Promise.all([api.adhocCulturaData.getData('json', name)]);
    return { equip };
};

const getPageData = async (name: string) => {
    const { equip }: QuiSomProps = await getData(name);
    const { title, description, fullImage, data } = equip;
    const team = data.filter((d): d is Data => d.type === 'team');
    const partner = data.filter((d): d is Data => d.type === 'partner');
    const collaborator = data.filter((d): d is Data => d.type === 'collaborator');
    return {
        equip,
        team,
        partner,
        collaborator,
        title,
        description,
        fullImage,
        data,
    };
};