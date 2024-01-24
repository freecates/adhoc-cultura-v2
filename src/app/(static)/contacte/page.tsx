import dynamic from 'next/dynamic'
import api from '@/lib/api';
 
const LeafLetMap = dynamic(() => import('@/components/leafLetMap'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})
type Contact = {
    name: string;
    lat: number;
    lng: number;
    address: string;
    code: string;
    city: string;
    tel: string;
    mail: string;
};

export default async function Contacte() {
    const { name, lat, lng, address, code, city, tel, mail }: Contact = await getData();
    return (
        <main className='flex-1'>
            <section className='w-full py-12 md:py-24 lg:py-32'>
                <div className='space-y-10 xl:space-y-16'>
                    <div className='grid max-w-[1300px] h-[50vh] mx-auto gap-4'>
                        <LeafLetMap coord={[lat, lng]} name={name} address={address} code={code} city={city} tel={tel} mail={mail} />
                    </div>
                </div>
            </section>
        </main>
    );
}

const getData = async (): Promise<any> => {
    const [contact] = await Promise.all([api.adhocCulturaData.getData('json', 'contact')]);
    return contact[0];
};
