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
}

export default async function Contacte() {
const { name, lat, lng, address, code, city, tel, mail } = await getData();
  return (
    <main className="flex-1">
        <pre>{JSON.stringify({ name, lat, lng, address, code, city, tel, mail }, null, 2)}</pre>
    </main>
  )
}

const getData = async (): Promise<any> => {
  const [contact] = await Promise.all([
      api.adhocCulturaData.getData('json', 'contact'),
  ]);
  return contact[0];
};