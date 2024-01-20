import Link from 'next/link';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import api from '@/lib/api';
import { Button } from './ui/button';
import Icon from './ui/icon';

type Route = {
  name: string;
  url: string;
  external?: boolean;
  icon?: {
      name: keyof typeof dynamicIconImports;
      color?: string;
      size?: string;
  };
};
type RoutesProps = { 
  footerRoutes: Route[]
};

export default async function Footer(): Promise<JSX.Element> {
    const { footerRoutes }: RoutesProps = await getData();
    const textRoutes = footerRoutes.filter((r): boolean => r.icon === undefined);
    const iconRoutes = footerRoutes.filter((r) => r.icon );
    return (
        <footer>
            <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-white'>
                <div className='container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'>
                    <div className='space-y-2'>
                        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                            Contacte
                        </h2>
                        <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                            Teniu alguna pregunta? Poseu-vos en contacte amb nosaltres i ens posarem
                            en contacte amb vos en breu.
                        </p>
                    </div>
                    <div className='flex space-x-4 lg:justify-end'>
                        <Button asChild={true}>
                            <Link href='/contacte'>Envieu missatge</Link>
                        </Button>
                    </div>
                </div>
            </section>
            <section className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700'>
                <p className='text-xs text-gray-500'>© Adhoc Cultura. Tots els drets reservats.</p>
                <nav className='sm:ml-auto flex items-center gap-4 sm:gap-6'>
                    {textRoutes.map(
                        (r, index): JSX.Element => (
                            <Link
                                key={index + r.name}
                                className='text-xs font-medium hover:underline underline-offset-4'
                                href={r.url}
                            >
                                {r.name}
                            </Link>
                        ),
                    )}
                    {iconRoutes.map(
                        (r, index): JSX.Element => (
                            <a
                                key={index + r.name}
                                className='text-xs font-medium hover:underline underline-offset-4'
                                href={r.url}
                                target='_blank'
                            >
                                {r.icon && <Icon name={r.icon.name} color={r.icon.color} size={r.icon.size} />}
                            </a>
                        ),
                    )}
                </nav>
            </section>
        </footer>
    );
}
const getData = async (): Promise<any> => {
  const [footerRoutes] = await Promise.all([
      api.adhocCulturaData.getData('json', 'footerRoutes'),
  ]);
  return {
      footerRoutes
  };
};
