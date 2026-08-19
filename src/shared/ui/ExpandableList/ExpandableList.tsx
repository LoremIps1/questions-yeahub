import { useState, type ReactNode } from 'react';

import { Button } from '@/shared/ui/Button';

import styles from './ExpandableList.module.css';

interface ExpandableListProps<T> {
  items: T[];
  total: number;
  visibleCount?: number;
  renderItem: (item: T) => ReactNode;
  onExpandedChange?: (expanded: boolean) => void;
}

export function ExpandableList<T>({
  items,
  total,
  visibleCount = 5,
  renderItem,
  onExpandedChange,
}: ExpandableListProps<T>) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    const nextValue = !isExpanded;

    setIsExpanded(nextValue);
    onExpandedChange?.(nextValue);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>{items.map(renderItem)}</div>

      {total > visibleCount && (
        <Button type="button" variant="text" className={styles.toggle} onClick={handleToggle}>
          {isExpanded ? 'Скрыть' : 'Посмотреть все'}
        </Button>
      )}
    </div>
  );
}
