import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';

import { Button } from '@/shared/ui/Button';

import styles from './ExpandableContent.module.css';

interface ExpandableContentProps {
  children: ReactNode;
  maxHeight?: number;
}

export function ExpandableContent({ children, maxHeight = 250 }: ExpandableContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useLayoutEffect(() => {
    const element = contentRef.current;

    if (!element) {
      return;
    }

    setIsOverflowing(element.scrollHeight > maxHeight);
  }, [children, maxHeight]);

  return (
    <div className={styles.wrapper}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{
          maxHeight: isExpanded ? 'none' : `${maxHeight}px`,
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
          <span className={isExpanded ? styles.arrowUp : styles.arrowDown}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#6A0BFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </Button>
      )}
    </div>
  );
}
