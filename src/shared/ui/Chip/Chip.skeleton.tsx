import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import styles from './styles.module.css';

export function ChipSkeleton() {
  return <Skeleton className={styles.skeleton} />;
}
