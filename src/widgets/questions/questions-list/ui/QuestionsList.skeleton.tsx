import { Card } from '@/shared/ui/Card';
import styles from './QuestionsList.module.css';
import { Skeleton } from '@/shared/ui/Skeleton';
import { PaginationSkeleton } from '@/shared/ui/Pagination';

export function QuestionsListSkeleton() {
  return (
    <Card className={styles.wrap}>
      <div className={styles.list}>
        <div className={styles.head}>
          <Skeleton className={styles.titleSkeleton} />
        </div>

        {Array.from({ length: 10 }, (_, index) => (
          <Skeleton key={index} className={styles.questionSkeleton} />
        ))}
      </div>

      <PaginationSkeleton />
    </Card>
  );
}
