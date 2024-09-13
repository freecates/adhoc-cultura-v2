import { dateToLocale, shimmer, toBase64 } from '@/lib/utils';
import Image from 'next/image';
import SocialSharer from './socialSharer';

const renderImageTeam = (img: string, name: string) => (
    <span className='bgTeam'>
        <Image
            alt={name}
            className='mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover transition-all duration-500 ease-in-out'
            height='574'
            src={img}
            width='574'
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(574, 574))}`}
        />
    </span>
);


const SectionPageHeader: React.FC<{
    title?: string;
    trustedHTMLtitle?: TrustedHTML;
    name?: string;
    img?: string;
    date?: string;
    destacat?: string;
    slug: string;
    cmsType?: string;
    pageType?: string;
    withBorder?: boolean;
    isTeam?: boolean;
}> = ({
    title,
    trustedHTMLtitle,
    name,
    img,
    date,
    destacat,
    slug,
    cmsType,
    pageType,
    withBorder,
    isTeam,
}) => {
    const border = withBorder ? 'border-b' : '';
    return (
        <section className={`w-full pt-12 md:pt-24 lg:pt-32 ${border}`}>
            <div className='md:px-6 space-y-10 xl:space-y-16'>
                <div className='grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16'>
                    <div>
                        {title && (
                            <h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                                {title}
                            </h1>
                        )}
                        {name && (
                            <p className='text-gray-400 md:text-xl dark:text-gray-400'>{name}</p>
                        )}
                        {trustedHTMLtitle && (
                            <h1
                                className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'
                                dangerouslySetInnerHTML={{
                                    __html: trustedHTMLtitle,
                                }}
                            />
                        )}
                        {date && (
                            <p className='md:text-xl'>
                                <small>{dateToLocale(date, 'ca')}</small>
                            </p>
                        )}
                        {destacat && (
                            <p className='text-gray-400 md:text-xl dark:text-gray-400'>
                                {destacat}
                            </p>
                        )}
                        {cmsType && destacat && (
                            <SocialSharer type={cmsType} slug={slug} title={destacat} />
                        )}
                        {pageType && title && (
                            <SocialSharer type={pageType} slug={slug} title={title} />
                        )}
                    </div>
                </div>
                {img &&
                    name &&
                    (isTeam ? (
                        renderImageTeam(img, name)
                    ) : (
                        <Image
                            alt={name}
                            className='mx-auto aspect-[16/9] overflow-hidden rounded-t-xl object-cover transition-all duration-500 ease-in-out'
                            height='574'
                            src={img}
                            width='1034'
                            placeholder={`data:image/svg+xml;base64,${toBase64(
                                shimmer(1034, 574),
                            )}`}
                        />
                    ))}
            </div>
        </section>
    );
};

export default SectionPageHeader;
