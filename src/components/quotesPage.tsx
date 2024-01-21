/* eslint-disable react/no-unescaped-entities */

const bgByType: Record<string, string> = {
    bgWhite:'bg-white',
    bgGray50:'bg-gray-50',
    bgGray100:'bg-gray-100',
    bgGray200:'bg-gray-200',
    bgGray300:'bg-gray-300',
    bgGray400:'bg-gray-400',
    bgGray500:'bg-gray-500',
    bgGray600:'bg-gray-600',
    bgGray700:'bg-gray-700',
    bgGray800:'bg-gray-800',
    bgGray900:'bg-gray-900',
  };
  
  const colorByType: Record<string, string> = {
    textWhite:'text-white',
    textGray50:'text-gray-50',
    textGray100:'text-gray-100',
    textGray200:'text-gray-200',
    textGray300:'text-gray-300',
    textGray400:'text-gray-400',
    textGray500:'text-gray-500',
    textGray600:'text-gray-600',
    textGray700:'text-gray-700',
    textGray800:'text-gray-800',
    textGray900:'text-gray-900',
    textBlack:'text-black',
  };

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
                className={'bg-white w-full h-screen bg-white flex items-center justify-center text-center text-black'}
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
                renderQuote={(q: Quote) => {
                    let bg = bgByType[q.bg];
                    let color = colorByType[q.color];
                    return (
                    <section className={`${bg} ${color} w-full py-12`}>
                        <div className='container mx-auto px-4 md:px-6 text-center'>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                                "{q.quote}"
                            </h2>
                            <p className='mt-4 text-xl md:text-2xl'>- {q.author}</p>
                        </div>
                    </section>
                )}}
            />
        </>
    );
};

export default QuotesPage;
