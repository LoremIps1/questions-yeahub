import { Card, PaginationSkeleton } from '@/shared/ui';
import styles from './styles.module.css';
import { QuestionsListSkeleton } from '../QuestionsList/QuestionsList.skeleton';

export function QuestionsBlockSkeleton() {
  return (
    <Card className={styles.content}>
      <div>
        <QuestionsListSkeleton />
      </div>

      <PaginationSkeleton />
    </Card>
  );
}
