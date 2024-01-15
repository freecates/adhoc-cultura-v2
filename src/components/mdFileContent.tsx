import Markdown from "markdown-to-jsx";

type Props = {
    content: string;
};

const MdFileContent: React.FC<Props> = ({ content }) => {
    return (
        <div>
            <Markdown>{content}</Markdown>
        </div>
    );
};

export default MdFileContent;