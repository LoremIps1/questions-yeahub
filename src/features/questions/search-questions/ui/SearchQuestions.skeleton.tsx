import { Skeleton } from '@/shared/ui';
import styles from './styles.module.css';

export function SearchQuestionsSkeleton() {
  return <Skeleton className={styles.skeleton}>SearchQuestions.skeleton</Skeleton>;
}
