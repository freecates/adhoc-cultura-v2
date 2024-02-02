/* eslint-disable react/no-unescaped-entities */
import api from '@/lib/api';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const Testimonials = ({ data }: any) => {
    return (
        data.map((item: any) => (
            <Card key={item.id}>
                <CardContent>
                    <p className='text-sm text-gray-500 dark:text-gray-400 p-4'>
                        "{item.quote}"
                    </p>
                    <Badge>{item.name}, {item.title}</Badge>
                </CardContent>
            </Card>
        ))
    );
};

const TestimonialsSection = async () => {
    const { testimonis } = await getData();
    const { title, description, data } = testimonis;
    return (
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-white'>
            <div className='container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6'>
                <div className='space-y-3'>
                    <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                        {title}
                    </h2>
                    <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                        {description}
                    </p>
                </div>
                <div className='mx-auto w-full max-w-sm md:max-w-md lg:max-w-xl space-y-4'>
                    <Testimonials data={data} />
                </div>
            </div>
        </section>
    );
};

const getData = async (): Promise<any> => {
    const [testimonis] = await Promise.all([api.adhocCulturaData.getData('json', 'testimonis')]);
    return {
        testimonis,
    };
};

export default TestimonialsSection;
