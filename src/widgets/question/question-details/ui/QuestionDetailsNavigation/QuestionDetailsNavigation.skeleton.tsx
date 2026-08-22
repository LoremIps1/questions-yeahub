import { Card, Skeleton } from '@/shared/ui';
import styles from './styles.module.css';

export function QuestionDetailsNavigationSkeleton() {
  return (
    <Card className={styles.content}>
      <Skeleton className={styles.skeletonButton} />
      <Skeleton className={styles.skeletonButton} />
    </Card>
  );
}
