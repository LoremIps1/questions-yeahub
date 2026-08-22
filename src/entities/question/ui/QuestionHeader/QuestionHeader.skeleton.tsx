import { Card, Skeleton } from '@/shared/ui';
import styles from './styles.module.css';

export function QuestionHeaderSkeleton() {
  return (
    <Card className={styles.header}>
      <Skeleton className={styles.image} />

      <div className={styles.headerContent}>
        <Skeleton className={styles.skeletonTitle} />
        <Skeleton className={styles.skeletonDescription} />
      </div>
    </Card>
  );
}
