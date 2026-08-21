import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';


import styles from './styles.module.css';
import { CodeBlock } from '../CodeBlock/CodeBlock';

interface MarkdownProps {
  children: string;
}

export function Markdown({ children }: MarkdownProps) {
  console.log(children);

  return (
    <div className={styles.markdown}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeRaw,
          rehypeSanitize,
          [
            rehypeHighlight,
            {
              detect: true,

              aliases: {
                typescript: ['typescriptreact', 'tsx'],
                javascript: ['javascriptreact', 'jsx'],
              },
            },
          ],
        ]}
        components={{
          pre({ children }) {
            return <CodeBlock>{children}</CodeBlock>;
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
