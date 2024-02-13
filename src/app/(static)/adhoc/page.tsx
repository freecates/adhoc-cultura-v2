/* eslint-disable react/no-unescaped-entities */
import QuotesPage from "@/components/quotesPage";
import api from "@/lib/api";
import { shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";
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

            <section className={`bg-white text-black w-full py-12`}>
                <div className='mx-auto text-center'>
                    <Image
                        className='mx-auto aspect-[16/9] overflow-hidden object-cover transition-all duration-500 ease-in-out'
                        alt={'Adhoc Creant Vincle'}
                        src={'https://adhocc-data.vercel.app/static/adhoc/adhoc-creant-vincle.jpg'}
                        height={933}
                        width={1680}
                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1680, 933))}`}
                    />
                </div>
            </section>
        </main>
    );
}

const getData = async (): Promise<any> => {
  const [adhoc] = await Promise.all([
      api.adhocCulturaData.getData('json', 'adhoc'),
  ]);
  return { adhoc };
};
