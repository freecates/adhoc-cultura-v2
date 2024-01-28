/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { Button } from "./ui/button";
import { shimmer, shuffleArray, toBase64 } from "@/lib/utils";
import Link from "next/link";

const xlGridCols = (number: number): string => {
    switch (number) {
        case 3:
            return 'xl:grid-cols-3';
        case 2:
            return 'xl:grid-cols-2';
        default:
            return 'xl:grid-cols-3';
    }
};

type DataObject = {
    name: string;
    logo: string;
    route?: string;
};

type Grid = {
    data: DataObject[];
    maxItems?: number;
    isShuffled?: boolean;
    cols?: number;
};

interface ISectionProps extends Grid {
    title: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
}

const ImageInGrid: React.FC<DataObject> = ({ name, logo }): JSX.Element => (
    <div className='w-full p-4'>
        <Image
            key={name}
            alt={name}
            className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full transition-all duration-500 ease-in-out'
            height='300'
            src={logo}
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(550, 300))}`}
            width='550'
        />
    </div>
);

const renderImage = ({ name, logo, route }: DataObject): JSX.Element =>
    route ? (
        <Link key={name} href={route}>
            <ImageInGrid key={name} name={name} logo={logo} />
        </Link>
    ) : (
        <ImageInGrid key={name} name={name} logo={logo} />
    );

const GridOfImages: React.FC<Grid> = ({ data, isShuffled, maxItems, cols }) => {
    let array = [];
    if (isShuffled) {
        array = maxItems ? shuffleArray(data).slice(0, maxItems) : shuffleArray(data);
    } else {
        array = maxItems ? data.slice(0, maxItems) : data;
    }
    const maxCols = cols ? xlGridCols(cols) : 'xl:grid-cols-3';

    return (
        <div
            className={`mx-auto grid max-w-5xl xl:max-w-7xl items-center gap-6 py-12 lg:grid-cols-2 ${maxCols} lg:gap-12`}
        >
            {array.map((d): JSX.Element => renderImage(d))}
        </div>
    );}

const SectionGripOfImages: React.FC<ISectionProps> = ({ title, description, data, maxItems, isShuffled, buttonText, buttonLink, cols }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
                {description &&
                    <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {description}
                    </p>
                }
            </div>
            <GridOfImages data={data} maxItems={maxItems} isShuffled={isShuffled} cols={cols} />
            {buttonText &&
                <div className="flex justify-center">
                    {buttonLink ? <Button asChild><Link href={buttonLink}>{buttonText}</Link></Button>: <Button>{buttonText}</Button>}
                </div>
            }
        </div>
    </section>
  )
}

export default SectionGripOfImages
    