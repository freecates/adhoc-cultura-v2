import api from "@/lib/api";
import MdPAge from "@/components/mdPage";
import { Metadata } from 'next';

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

export const metadata: Metadata = {
    title: 'Avís Legal',
    description:
        'Els drets de propietat intel·lectual dels serveis on-line de ADHOC CULTURA i del seu contingut pertanyen a aquesta societat o, si escau, a terceres persones.',
    alternates: {
        canonical: 'https://adhoc-cultura.com/avis-legal',
    },
};

const getData = async (): Promise<any> => {
    const [mdAvisLegal] = await Promise.all([
        api.adhocCulturaData.getData('md', 'avis-legal'),
    ]);
    return {
        mdAvisLegal,
    };
  };