/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { Button } from "./ui/button";
import { shimmer, shuffleArray, toBase64 } from "@/lib/utils";
import Link from "next/link";

type DataObject = {
    name: string;
    logo: string;
  };

type Grid = {
    data: DataObject[];
    maxItems?: number;
    isShuffled?: boolean;
}

interface ISectionProps extends Grid {
    title: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
}

const GridOfImages: React.FC<Grid> = ({ data, isShuffled, maxItems }) => {
    let array = [];
    if (isShuffled) {
        array = maxItems ? shuffleArray(data).slice(0, maxItems) : shuffleArray(data);
    } else {
        array = maxItems ? data.slice(0, maxItems) : data;
    }
    const xlCols = array.length >= 3 ? 'xl:grid-cols-3' : '';

    return (  
        <div className={`mx-auto grid max-w-5xl xl:max-w-7xl items-center gap-6 py-12 lg:grid-cols-2 ${xlCols} lg:gap-12`}>
            {array.map((d, index): JSX.Element => (
                <Image
                    key={index + d.name}
                    alt={d.name}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full transition-all duration-500 ease-in-out"
                    height="300"
                    src={d.logo}
                    placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(550, 300))}`}
                    width="550"
                />
            ))}
        </div>   
    )}

const SectionGripOfImages: React.FC<ISectionProps> = ({ title, description, data, maxItems, isShuffled, buttonText, buttonLink }) => {
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
            <GridOfImages data={data} maxItems={maxItems} isShuffled={isShuffled} />
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
