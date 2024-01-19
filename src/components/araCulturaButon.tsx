import { Button } from "./ui/button";

export default function AraCulturaButton({ textSize }: { textSize?: string }) {
    return (
        <Button
            asChild={true}
            variant={'secondary'}
            size={'sm'}
        >
            <a
                title='Enllaç a ARA Cultura'
                className={`${textSize ? textSize : ''}`}
                href='https://www.aracultura.com/'
                target='_blank'
            >
                ARA Cultura
            </a>
        </Button>
    );
}