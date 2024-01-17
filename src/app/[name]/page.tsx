/* eslint-disable react/no-unescaped-entities */
import dynamicIconImports from "lucide-react/dynamicIconImports";
import api from "@/lib/api"
import SectionGripOfCards from "@/components/sectionGridOfCards"

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
    },
    icon?: {
      name: keyof typeof dynamicIconImports;
      color?: string;
      size?: string;
    }
    data: Data[];
  };
};

export default async function Name({ params }: { params: { name: string } }): Promise<JSX.Element> {
  const { pageData }: NameProps = await getData(params.name);
  const { title, description, image, icon, data } = pageData
  return (
      <main className="flex-1">
        <SectionGripOfCards title={title} description={description} data={data} image={image && image} icon={icon && icon} />
      </main>
  )
}

const getData = async (params: string): Promise<any> => {
  const [pageData] = await Promise.all([
      api.adhocCulturaData.getData('json', params),
  ]);
  return {
      pageData,
  };
};

export const generateStaticParams = async (): Promise<{ name: string }[]> => {
    return [
        { name: 'projectes' },
    ];
};
