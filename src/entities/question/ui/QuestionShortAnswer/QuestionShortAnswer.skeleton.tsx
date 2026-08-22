import { Card, Skeleton } from '@/shared/ui';
import styles from './styles.module.css';

interface QuestionShortAnswerSkeletonProps {
  count?: number;
}
export function QuestionShortAnswerSkeleton({ count = 3 }: QuestionShortAnswerSkeletonProps) {
  return (
    <Card className={styles.answer}>
      <Skeleton className={styles.skeletonTitle} />

      {Array.from({ length: count }, (_, index) => (
        <Skeleton key={index} className={styles.skeletonDesc} />
      ))}
    </Card>
  );
}
