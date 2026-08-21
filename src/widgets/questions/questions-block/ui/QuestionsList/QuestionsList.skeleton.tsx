import { Skeleton } from '@/shared/ui';
import styles from './styles.module.css';

export function QuestionsListSkeleton() {
  return (
    <div className={styles.list}>
      {Array.from({ length: 10 }, (_, index) => (
        <Skeleton key={index} className={styles.questionSkeleton} />
      ))}
    </div>
  );
}
