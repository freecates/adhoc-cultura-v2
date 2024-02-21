import api from "@/lib/api";
import MdPage from "@/components/mdPage";
import { Metadata } from 'next';

export default async function AvisLegal(): Promise<JSX.Element> {
    const { mdAvisLegal }: { mdAvisLegal: string } = await getData();
    return (            
        <main className="flex-1">
            <MdPage title="Avís Legal" mdContent={mdAvisLegal} />
        </main>
    )
}

export const metadata: Metadata = {
    title: 'Avís Legal',
    description:
        'Els drets de propietat intel·lectual dels serveis on-line de ADHOC CULTURA i del seu contingut pertanyen a aquesta societat o, si escau, a terceres persones.',
    alternates: {
        canonical: 'https://www.adhoc-cultura.com/avis-legal',
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