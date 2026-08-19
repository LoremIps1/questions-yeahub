import { Skeleton } from '@/shared/ui/Skeleton';
import styles from './SkeletonQuestions.module.css';

export function SearchQuestionsSkeleton() {
  return <Skeleton className={styles.skeleton}>SearchQuestions.skeleton</Skeleton>;
}
