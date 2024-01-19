import dynamicIconImports from 'lucide-react/dynamicIconImports';
import SectionGripOfCards from '@/components/sectionGridOfCards';
import api from '@/lib/api';

type Data = {
  title: string;
  name: string;
};
type Model = {
  title: string;
  icon?: {
    name: keyof typeof dynamicIconImports;
    color?: string;
    size?: string;
  }
  image?: {
    src: string;
    alt: string;
  }
  data: Data[];
}
type ProjectesProps = { 
  projectes: Model;
};

export default async function StaticGroupLayout({ children }: { children: React.ReactNode }) {
    const { projectes }: ProjectesProps = await getData();
    return (
        <>
            {children}
            <div className='bg-gray-950'>
                <SectionGripOfCards title={'Destaquem'} data={projectes.data} icon={projectes.icon} isShuffled maxItems={2} buttonText={"Veure'n més"} buttonLink={"/projectes"} />
            </div>
        </>
    );
}

const getData = async (): Promise<any> => {
  const [projectes] = await Promise.all([
      api.adhocCulturaData.getData('json', 'projectes'),
  ]);
  return {
      projectes,
  };
};
