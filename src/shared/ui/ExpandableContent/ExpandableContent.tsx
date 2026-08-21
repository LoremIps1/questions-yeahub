import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';

import { Button } from '@/shared/ui/Button';

import styles from './styles.module.css';

interface ExpandableContentProps {
  children: ReactNode;
  collapsedHeight?: number;
}

export function ExpandableContent({ children, collapsedHeight = 500 }: ExpandableContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  useLayoutEffect(() => {
    const element = contentRef.current;

    if (!element) {
      return;
    }

    setContentHeight(element.scrollHeight);
  }, [children]);

  const isOverflowing = contentHeight > collapsedHeight;

  return (
    <div className={styles.wrapper}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{
          maxHeight: isExpanded ? `${contentHeight}px` : `${collapsedHeight}px`,
        }}
      >
        {children}

        {!isExpanded && isOverflowing && <div className={styles.gradient} />}
      </div>

      {isOverflowing && (
        <Button
          type="button"
          variant="text"
          className={styles.toggle}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? 'Свернуть' : 'Развернуть'}

          <svg
            className={isExpanded ? styles.arrowUp : styles.arrowDown}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      )}
    </div>
  );
}
