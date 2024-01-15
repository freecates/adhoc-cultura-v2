import SectionGripOfImages from '@/components/sectionGridOfImages';
import api from '@/lib/api';


type Client = {
  name: string;
  logo: string;
}
type TreballerPer = { 
  clients: Client[];
};

export default async function TreballemPer() {
const { clients }: TreballerPer = await getData();
  return (
    <main className="flex-1">
        <SectionGripOfImages title={"Treballer per"} data={clients} maxCols={3} />
    </main>
  )
}

const getData = async (): Promise<any> => {
  const [clients] = await Promise.all([
      api.adhocCulturaData.getData('json', 'clients'),
  ]);
  return { clients };
};
