import MdFileContent from './mdFileContent';

type MdPage = {
    title: string;
    mdContent: string;
};
const MdPage: React.FC<MdPage> = ({ title, mdContent }) => {
    return (
        <>
            <section className='w-full pt-12 md:pt-24 lg:pt-32 border-b'>
                <div className='px-4 md:px-6 space-y-10 xl:space-y-16'>
                    <div className='grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16'>
                        <div>
                            <h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                                {title}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            {mdContent && (
                <section className='w-full py-12'>
                    <div className='px-4 md:px-6 space-y-10 xl:space-y-16'>
                        <div className='grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10'>
                            <MdFileContent
                                content={mdContent}
                                styles={'mx-auto text-gray-400 md:text-xl dark:text-gray-400'}
                            />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default MdPage;
