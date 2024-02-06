/* eslint-disable react/no-unescaped-entities */
import QuotesPage from "@/components/quotesPage";
import api from "@/lib/api";
type Quote = {
    quote: string;
    author: string;
    bg: string;
    color: string;
    id: string;
};

export default async function Adhoc(): Promise<JSX.Element> {
    const { adhoc }: { adhoc: Quote[] } = await getData();
    return (
        <main className='flex-1'>
            <QuotesPage data={adhoc} />
        </main>
    );
}

const getData = async (): Promise<any> => {
  const [adhoc] = await Promise.all([
      api.adhocCulturaData.getData('json', 'adhoc'),
  ]);
  return { adhoc };
};
