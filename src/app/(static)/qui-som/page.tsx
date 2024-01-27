/* eslint-disable react/no-unescaped-entities */
import SectionGripOfImages from '@/components/sectionGridOfImages';
import SectionPageHeader from '@/components/sectionPageHeader';
import api from '@/lib/api';

type Data = {
    name: string;
    photo: string;
    type: string;
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
    const gridData = (type: { name: string; photo: string }[]): { name: string; logo: string }[] =>
        type.map(({ name, photo }): { name: string; logo: string } => ({
            name,
            logo: photo,
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

const getData = async (): Promise<any> => {
    const [equip] = await Promise.all([api.adhocCulturaData.getData('json', 'equip')]);
    return { equip };
};
