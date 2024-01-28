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
            <SectionPageHeader title={'Contacte'} name={'Vinens a veure ;-)'} slug='contacte' />
            <section className='w-full pt-6 md:pt-12 lg:pt-16 border-b'>
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
