/* eslint-disable react/no-unescaped-entities */
import dynamicIconImports from "lucide-react/dynamicIconImports"
import api from '@/lib/api';
import SectionGripOfImages from '@/components/sectionGridOfImages';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Data = {
    title: string;
    name: string;
};

type Client = {
    name: string;
    logo: string;
};
type TreballemPer = {
    clients: Client[];
    projectes: {
        icon?: {
            name: keyof typeof dynamicIconImports;
            color?: string;
            size?: string;
        };
        data: Data[];
    };
};

export default async function TreballemPer() {
    const { clients }: TreballemPer = await getData();
    return (
        <main className='flex-1'>
            <SectionGripOfImages title={'Treballem per'} data={clients} />
            <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-white'>
              <div className='container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6'>
                  <div className='space-y-3'>
                      <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                          Testimonis
                      </h2>
                      <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                          Què diuen de nosaltres?
                      </p>
                  </div>
                  <div className='mx-auto w-full max-w-sm space-y-2'>
                      <Card>
                          <CardContent>
                              <p className='text-sm text-gray-500 dark:text-gray-400'>
                                  "The team at Adhoc Cultura has been instrumental in the growth of
                                  our online business. Their services have consistently delivered
                                  results and they are a pleasure to work with."
                              </p>
                              <Badge>John Doe, CEO of Example Co.</Badge>
                          </CardContent>
                      </Card>
                      <Card>
                          <CardContent>
                              <p className='text-sm text-gray-500 dark:text-gray-400'>
                                  "Adhoc Cultura exceeded our expectations. They really understood
                                  our needs and came up with amazing creative solutions for our
                                  site. Thank you to the team."
                              </p>
                              <Badge>Jane Smith, Founder of Start-up</Badge>
                          </CardContent>
                      </Card>
                  </div>
              </div>
          </section>
        </main>
    );
}

const getData = async (): Promise<any> => {
  const [clients] = await Promise.all([api.adhocCulturaData.getData('json', 'clients')]);
  return { clients };
};
