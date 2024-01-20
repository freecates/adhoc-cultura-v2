import api from "@/lib/api";
import MdPAge from "@/components/mdPage";

type AvisLegal = {
    mdAvisLegal: string;
};

export default async function AvisLegal(): Promise<JSX.Element> {
    const { mdAvisLegal }: AvisLegal = await getData();
    return (            
        <main className="flex-1">
            <MdPAge title="Avís Legal" mdContent={mdAvisLegal} />
        </main>
    )
}

const getData = async (): Promise<any> => {
    const [mdAvisLegal] = await Promise.all([
        api.adhocCulturaData.getData('md', 'avis-legal'),
    ]);
    return {
        mdAvisLegal,
    };
  };