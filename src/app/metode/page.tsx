import api from "@/lib/api";
import { shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";

type Metode = {
    metode: {
        title: string;
        name: string;
        img: string;
    };
};

export default async function Metode() {
    const { metode }: Metode = await getData();
    return (
        <main className="flex-1">
            <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b">
                <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                        <div>
                            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                {metode?.title}
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400">
                                {metode?.name}
                            </p>
                        </div>
                    </div>
                    {metode?.img &&
                        <Image
                            alt={metode.name}
                            className="mx-auto aspect-[16/9] overflow-hidden rounded-t-xl object-cover transition-all duration-500 ease-in-out"
                            height="574"
                            src={metode.img}
                            width="1034"
                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1034, 574))}`}
                        />
                    }
                </div>
            </section>
        </main>
    )
}



const getData = async (): Promise<any> => {
    const [metode] = await Promise.all([
        api.adhocCulturaData.getData('json', 'metode'),
    ]);
    return {
        metode,
    };
  };