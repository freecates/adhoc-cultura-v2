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
    <pre>{JSON.stringify({ name, lat, lng, address, code, city, tel, mail }, null, 2)}</pre>
  )
}

const getData = async (): Promise<any> => {
  const [contact] = await Promise.all([
      api.adhocCulturaData.getData('contact'),
  ]);
  return contact[0];
};
