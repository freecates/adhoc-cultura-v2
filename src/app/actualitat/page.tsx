/* eslint-disable react/no-unescaped-entities */
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import api from '@/lib/api';
import SectionGridOfCards from '@/components/sectionGridOfCards';

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

export default async function Name(): Promise<JSX.Element> {
    const { pageData }: NameProps = await getData();
    return (
        <main className='flex-1'>
            <SectionGridOfCards
                title={'Actualitat'}
                description={`L'actualitat d'Adhoc Cultura`}
                data={pageData}
            />
        </main>
    );
}

const getData = async (): Promise<any> => {
    const [pageData] = await Promise.all([api.adhocCulturaData.getData('cms', undefined, 'posts')]);
    return {
        pageData,
    };
};
