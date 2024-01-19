import AraCulturaButton from './araCulturaButon';
import api from '@/lib/api';
import MdFileContent from './mdFileContent';

type AraCultura = {
    mdAraCultura: string;
};

export default async function AraCulturaSection() {
    const { mdAraCultura }: AraCultura = await getData();
    return (
        <div>
            <section className='w-full py-4 md:py-8 lg:py-12 bg-gray-950 text-white'>
                <div className='container mx-auto'>
                    <div className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                        <MdFileContent content={mdAraCultura} />
                    </div>
                    <div className='py-2'>
                        <AraCulturaButton />
                    </div>
                </div>
            </section>
        </div>
    );
}

const getData = async (): Promise<any> => {
    const [mdAraCultura] = await Promise.all([api.adhocCulturaData.getData('md', 'ara-cultura')]);
    return {
        mdAraCultura,
    };
};
