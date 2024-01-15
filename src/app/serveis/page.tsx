/* eslint-disable react/no-unescaped-entities */
import api from "@/lib/api"
import SectionGripOfCards from "@/components/sectionGridOfCards"

type Servei = {
  title: string;
  name: string;
};
type ServeisProps = { 
  serveis: Servei[];
};

export default async function Serveis(): Promise<JSX.Element> {
  const { serveis }: ServeisProps = await getData();
  return (
      <main className="flex-1">
        <SectionGripOfCards title={"Serveis"} description={"A partir de la nostra metodologia i gràcies als nostres partners podem oferir un ampli ventall de serveis i adaptar-nos a les necessitats dels nostres clients i col·laboradors per a poder desenvolupar projectes per promocionar la cultura i apropar-la a la societat."} data={serveis} image={{src: "/bg-adhoc-cultura-320.jpg", alt: "Adhoc Logo"}} />
      </main>
  )
}

const getData = async (): Promise<any> => {
  const [serveis] = await Promise.all([
      api.adhocCulturaData.getData('json', 'serveis'),
  ]);
  return {
      serveis,
  };
};
