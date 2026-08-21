import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import styles from './styles.module.css';

export function PaginationSkeleton() {
  return (
    <div className={styles.skeleton} aria-hidden="true">
      <Skeleton className={styles.skeletonArrow} />
      {Array.from({ length: 5 }, (_, index) => (
        <Skeleton key={index} className={styles.skeletonItem} />
      ))}
      <Skeleton className={styles.skeletonArrow} />
    </div>
  );
}
