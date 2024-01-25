/* eslint-disable react/no-unescaped-entities */
import GoogleMap from '@/components/map';
import SectionPageHeader from '@/components/sectionPageHeader';
import api from '@/lib/api';

type Contact = {
    name: string;
    lat: string;
    lng: string;
    address: string;
    code: string;
    city: string;
    tel: string;
    mail: string;
};

export default async function Contacte(): Promise<JSX.Element> {
    const { name, lat, lng, address, code, city, tel, mail }: Contact = await getData();
    const latLng = { lat: Number(lat), lng: Number(lng) };
    return (
        <main className='flex-1'>
            <section className='w-full pt-12 md:pt-24 lg:pt-32 border-b'>
                <div className='px-4 md:px-6 space-y-10 xl:space-y-16'>
                    <div className='grid max-w-[1300px] mx-auto gap-4 px-4 pb-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16'>
                        <div>
                            <h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                                Contacte
                            </h1>
                            <p className='mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400'>
                                Vine'ns a veure ;-)
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mx-auto max-w-[1034px] h-[574px] md:h-[640px] text-gray-600 overflow-hidden rounded-t-xl object-cover transition-all duration-500 ease-in-out'>
                    <GoogleMap
                        latLng={latLng}
                        address={address}
                        code={code}
                        city={city}
                        tel={tel}
                        mail={mail}
                        name={name}
                    />
                </div>
            </section>
        </main>
    );
}

const getData = async (): Promise<any> => {
    const [contact] = await Promise.all([api.adhocCulturaData.getData('json', 'contact')]);
    return contact[0];
};
