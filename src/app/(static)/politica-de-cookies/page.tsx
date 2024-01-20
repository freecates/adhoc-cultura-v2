import api from "@/lib/api";
import MdPAge from "@/components/mdPage";

type PoliticaDeCookies = {
    mdPoliticaDeCookies: string;
};

export default async function PoliticaDeCookies(): Promise<JSX.Element> {
    const { mdPoliticaDeCookies }: PoliticaDeCookies = await getData();
    return (
        <main className="flex-1">
            <MdPAge title="Politica de Cookies" mdContent={mdPoliticaDeCookies} />
        </main>
    )
}

const getData = async (): Promise<any> => {
    const [mdPoliticaDeCookies] = await Promise.all([
        api.adhocCulturaData.getData('md', 'politica-de-cookies'),
    ]);
    return {
        mdPoliticaDeCookies,
    };
  };