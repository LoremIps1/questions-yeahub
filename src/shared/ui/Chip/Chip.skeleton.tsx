import { Skeleton } from '@/shared/ui/Skeleton';
import styles from './Chip.module.css';

export function ChipSkeleton() {
  return <Skeleton className={styles.skeleton} />;
}
