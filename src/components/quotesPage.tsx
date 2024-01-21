import { bgByType, colorByType } from "@/lib/utils";

/* eslint-disable react/no-unescaped-entities */
type Quote = {
    quote: string;
    author: string;
    bg: string;
    color: string;
    id: string;
};
type Quotes = {
    data: Quote[];
};

const Quotes = <TQuote extends Record<string, any>>(props: {
    quotes: TQuote[];
    renderQuote: React.FC<TQuote>;
}) => {
    return props.quotes.map((quote) => <props.renderQuote key={quote.id} {...quote} />);
};
const QuotesPage: React.FC<Quotes> = ({ data }) => {
    const fullQuote = data.find((q: Quote) => q.quote[0]);
    const normalQuotes = data.filter((q: Quote) => q.id !== '001');
    return (
        <>
            <section
                className={`${fullQuote?.bg} w-full h-screen bg-white flex items-center justify-center text-center ${fullQuote?.color}`}
            >
                <div className='container px-4 md:px-6'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
                        "{fullQuote?.quote}"
                    </h1>
                    <p className={`mt-4 text-xl md:text-2xl`}>- {fullQuote?.author}</p>
                </div>
            </section>
            <Quotes
                quotes={normalQuotes}
                renderQuote={(q: Quote) => (
                    <section className={`${bgByType(q.bg)} w-full py-12 ${colorByType(q.color)}`}>
                        <div className='container mx-auto px-4 md:px-6 text-center'>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                                "{q.quote}"
                            </h2>
                            <p className='mt-4 text-xl md:text-2xl'>- {q.author}</p>
                        </div>
                    </section>
                )}
            />
        </>
    );
};

export default QuotesPage;
