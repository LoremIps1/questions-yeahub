import { isValidElement, useState, type ReactNode } from 'react';

import styles from './CodeBlock.module.css';

interface CodeBlockProps {
  children: ReactNode;
}

function getText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getText).join('');
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getText(node.props.children);
  }

  return '';
}

export function CodeBlock({ children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getText(children));

    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={styles.wrapper}>
      <pre className={styles.pre}>{children}</pre>

      <button
        type="button"
        className={styles.copy}
        onClick={handleCopy}
        aria-label="Скопировать код"
      >
        {copied ? '✓' : '⧉'}
      </button>
    </div>
  );
}
