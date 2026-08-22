import styles from './styles.module.css';
import { Skeleton } from '../Skeleton/Skeleton';

export function InfoSectionSkeleton() {
  return (
    <div className={styles.section}>
      <Skeleton className={styles.skeletonLabel} />

      <div className={styles.content}>
        {Array.from({ length: 2 }, (_, index) => (
          <Skeleton key={index} className={styles.skeletonContent} />
        ))}
      </div>
    </div>
  );
}
