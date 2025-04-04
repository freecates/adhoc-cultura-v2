/* eslint-disable react/no-unescaped-entities */
import GoogleMap from '@/components/map';
import SectionPageHeader from '@/components/sectionPageHeader';
import api from '@/lib/api';
import { Metadata } from 'next';

import type { JSX } from "react";

type Contact = {
    name: string;
    lat: string;
    lng: string;
    address: string;
    code: string;
    city: string;
    tel: string;
    mail: string;
    url: string;
};

export default async function Contacte(): Promise<JSX.Element> {
    const { name, latLng, address, code, city, tel, mail, url } = await getPageData('contact');
    return (
        <main className='flex-1'>
            <SectionPageHeader title={'Contacte'} name={'Vine\'ns a veure ;-)'} slug='contacte' />
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
                        url={url}
                    />
                </div>
            </section>
        </main>
    );
}

export const generateMetadata = async (): Promise<Metadata> => {
    const { name, address, code, city } = await getPageData('contact');

    return {
        title: name,
        description: `${address}, ${code} ${city}`,
        alternates: {
            canonical: 'https://www.adhoc-cultura.cat/contacte',
        },
    };
};

const getData = async (fileName: string): Promise<any> => {
    const [contact] = await Promise.all([api.adhocCulturaData.getData('json', fileName)]);
    return contact[0];
};

const getPageData = async (fileName: string): Promise<any> => {
    const { name, lat, lng, address, code, city, tel, mail, url }: Contact = await getData(fileName);
    const latLng = { lat: Number(lat), lng: Number(lng) };
    return {
        name,
        latLng,
        address,
        code,
        city,
        tel,
        mail,
        url,
    };
};
