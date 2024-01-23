'use client';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    XIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from 'react-share';

type SocialShareProps = {
    type: string;
    slug: string;
    title: string;
};

const SocialSharer: React.FC<SocialShareProps> = ({ type, slug, title }) => {
    return (
        <div className={`socialShareComponent`}>
            <div className={'PostSomeNetwork'}>
                <FacebookShareButton
                    url={`https://www.adhoc-cultura.com/${type}/${slug}`}
                    title={title}
                    hashtag={'#CulturaPerATothom'}
                    className='Post__some-network__share-button'
                >
                    <FacebookIcon size={25} round />
                </FacebookShareButton>
            </div>

            <div className={'PostSomeNetwork'}>
                <TwitterShareButton
                    url={`https://www.adhoc-cultura.com/${type}/${slug}`}
                    title={title}
                    hashtags={['CulturaPerATothom']}
                    via='adhoccultura'
                    className='Post__some-network__share-button'
                >
                    <XIcon size={25} round />
                </TwitterShareButton>
            </div>

            <div className={'PostSomeNetwork'}>
                <LinkedinShareButton
                    url={`https://www.adhoc-cultura.com/${type}/${slug}`}
                    title={title}
                    className='Post__some-network__share-button'
                >
                    <LinkedinIcon size={25} round />
                </LinkedinShareButton>
            </div>

            <div className={'PostSomeNetwork'}>
                <WhatsappShareButton
                    url={`https://www.adhoc-cultura.com/${type}/${slug}`}
                    title={title}
                    className='Post__some-network__share-button'
                >
                    <WhatsappIcon size={25} round />
                </WhatsappShareButton>
            </div>

            <div className={'PostSomeNetwork'}>
                <EmailShareButton
                    url={`https://www.adhoc-cultura.com/${type}/${slug}`}
                    subject={title}
                    body={`Fes-li un cop d'ull a: "${title}"`}
                    className='Post__some-network__share-button'
                >
                    <EmailIcon size={25} round />
                </EmailShareButton>
            </div>
        </div>
    );
};

export default SocialSharer;
