import { CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from "next/image"

type DataObject = {
    title: string;
    name: string;
  };

type Grid = {
    data: DataObject[];
    image?: {
      src: string;
      alt: string;
    };
}

interface ISectionProps extends Grid {
    title: string;
    description: string;
}

const GridOfCards: React.FC<Grid> = ({ data, image }) => (            
    <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
        {data.map((d, index): JSX.Element => (
        <Card key={index + d.title}>
            <CardHeader>
                {image && <Image src={image.src} alt={image.alt} width={48} height={48} />}
                <h3 className="text-lg font-bold">{d.title}</h3>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {d.name}
                </p>
            </CardContent>
        </Card>
        ))}
    </div>)

const SectionGripOfCards: React.FC<ISectionProps> = ({ title, description, data, image }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {description}
                </p>
            </div>
            <GridOfCards data={data} image={image} />
        </div>
    </section>
  )
}

export default SectionGripOfCards
