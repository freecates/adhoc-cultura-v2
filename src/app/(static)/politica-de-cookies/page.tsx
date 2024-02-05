import api from "@/lib/api";
import MdPAge from "@/components/mdPage";
import { Metadata } from "next";

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

export const metadata: Metadata = {
    title: 'Política de cookies',
    description:
        'Les cookies són breus informacions que s\'envien i s\'emmagatzemen en el disc dur de l\'ordinador de l\'usuari a través del seu navegador quan aquest es connecta a una web',
    alternates: {
        canonical: 'https://adhoc-cultura.com/politica-de-cookies',
    },
};

const getData = async (): Promise<any> => {
    const [mdPoliticaDeCookies] = await Promise.all([
        api.adhocCulturaData.getData('md', 'politica-de-cookies'),
    ]);
    return {
        mdPoliticaDeCookies,
    };
  };