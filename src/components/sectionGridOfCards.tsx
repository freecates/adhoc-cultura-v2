import Image from 'next/image';
import Link from 'next/link';
import Icon from './ui/icon';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { shuffleArray } from '@/lib/utils';
import { CardHeader, CardContent, Card } from '@/components/ui/card';
import { Button } from './ui/button';

type DataObject = {
    title: string;
    name?: string;
    slug?: string;
    type?: string;
};

type Grid = {
    data: DataObject[];
    image?: {
        src: string;
        alt: string;
    };
    icon?: {
        name: keyof typeof dynamicIconImports;
        color?: string;
        size?: string;
    };
    maxItems?: number;
    isShuffled?: boolean;
};

interface ISectionProps extends Grid {
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
}

const GridOfCards: React.FC<Grid> = ({ data, image, icon, isShuffled, maxItems }) => {
    let array = [];
    if (isShuffled) {
        array = maxItems ? shuffleArray(data).slice(0, maxItems) : shuffleArray(data);
    } else {
        array = maxItems ? data.slice(0, maxItems) : data;
    }
    const xlCols = array.length >= 6 ? 'xl:grid-cols-3' : '';

    return (
        <div
            className={`mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 ${xlCols} md:gap-12 lg:max-w-5xl lg:gap-12`}
        >
            {array.map(
                (d, index): JSX.Element => (
                    <Card key={index + d.title}>
                        {d.slug ? (
                            <Link href={`/${d.type ? `${d.type}/` : ''}${d.slug}`}>
                                <CardHeader>
                                    {image && (
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={48}
                                            height={48}
                                        />
                                    )}
                                    {icon && (
                                        <Icon
                                            name={icon.name}
                                            color={icon.color}
                                            size={icon.size}
                                        />
                                    )}
                                    <h3 className='text-lg font-bold'>{d.title}</h3>
                                </CardHeader>
                                {d.name && (
                                    <CardContent>
                                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                                            {d.name}
                                        </p>
                                    </CardContent>
                                )}{' '}
                            </Link>
                        ) : (
                            <>
                                <CardHeader>
                                    {image && (
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={48}
                                            height={48}
                                        />
                                    )}
                                    {icon && (
                                        <Icon
                                            name={icon.name}
                                            color={icon.color}
                                            size={icon.size}
                                        />
                                    )}
                                    <h3 className='text-lg font-bold'>{d.title}</h3>
                                </CardHeader>
                                {d.name && (
                                    <CardContent>
                                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                                            {d.name}
                                        </p>
                                    </CardContent>
                                )}
                            </>
                        )}
                    </Card>
                ),
            )}
        </div>
    );
};

export { GridOfCards };

const SectionGripOfCards: React.FC<ISectionProps> = ({
    title,
    description,
    data,
    image,
    icon,
    maxItems,
    isShuffled,
    buttonText,
    buttonLink,
}) => {
    return (
        <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container mx-auto space-y-12 px-4 md:px-6'>
                <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>{title}</h2>
                    {description && (
                        <p className='max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                            {description}
                        </p>
                    )}
                </div>
                <GridOfCards
                    data={data}
                    image={image}
                    icon={icon}
                    maxItems={maxItems}
                    isShuffled={isShuffled}
                />
                {buttonText && (
                    <div className='flex justify-center'>
                        {buttonLink ? (
                            <Button asChild>
                                <Link href={buttonLink}>{buttonText}</Link>
                            </Button>
                        ) : (
                            <Button>{buttonText}</Button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default SectionGripOfCards;
