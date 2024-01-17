import Link from "next/link";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Button } from "./ui/button";
import Image from "next/image";
import api from "@/lib/api";
import Icon from "./ui/icon";

type Route = {
  name: string;
  url: string;
  icon?: {
      name: keyof typeof dynamicIconImports;
      color?: string;
      size?: string;
  };
};
type RoutesProps = { 
  routes: Route[]
};

export default async function Header(): Promise<JSX.Element> {
  const { routes }: RoutesProps = await getData();
  const textRoutes = routes.filter((r) => r.icon === undefined);
  const iconRoutes = routes.find((r) => r.icon);
    return (
        
        <header className="px-4 lg:px-6 py-2 md:h-20 flex flex-col md:flex-row items-center border-b">
        <Link className="flex items-center justify-center mr-1" href="/">
          <Image
              width={80}
              height={44}
              alt="Adhoc Cultura"
              className="w-20 mt-1 md:mt-0 transition-all duration-500 ease-in-out"
              src="/bg-adhoc-cultura-320.jpg"
            />
        </Link>
        <nav className="my-2 md:my-0 md:ml-auto md:mr-4 flex items-center justify-center gap-4 sm:gap-6">
        {textRoutes.map((r, index): JSX.Element => (
            <Link key={index + r.name} className="text-sm font-medium hover:underline underline-offset-4" href={r.url}>
              {r.name}
            </Link>
          ))}
        {iconRoutes && iconRoutes.icon &&
          <Link title={iconRoutes.name} href={iconRoutes.url}>
            <Icon name={iconRoutes.icon.name} color={iconRoutes.icon?.color} size={iconRoutes.icon?.size} />
          </Link>}
        </nav>
        <div className="hidden md:block">
          <Button asChild={true} variant={'secondary'} size={"sm"}><a href="https://www.aracultura.com/" target="_blank">ARA Cultura</a></Button>
        </div>
      </header>
    )
}
const getData = async (): Promise<any> => {
  const [routes] = await Promise.all([
      api.adhocCulturaData.getData('json', 'routes'),
  ]);
  return {
      routes
  };
};