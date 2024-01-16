import Markdown from "markdown-to-jsx";

type Props = {
    content: string;
    styles?: string;
};

const MdFileContent: React.FC<Props> = ({ content, styles }) => {
    return (
        <Markdown className={`markdown ${styles ? styles : ''}`}>{content}</Markdown>
    );
};

export default MdFileContent;