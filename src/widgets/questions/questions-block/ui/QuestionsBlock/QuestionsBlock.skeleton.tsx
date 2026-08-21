import { Card, PaginationSkeleton } from '@/shared/ui';
import styles from './styles.module.css';
import { QuestionsListSkeleton } from '../QuestionsList/QuestionsList.skeleton';

export function QuestionsBlockSkeleton() {
  return (
    <Card className={styles.content}>
      <div>
        <div className={styles.head}>
          <h2 className={styles.title}>База вопросов</h2>
        </div>

        <QuestionsListSkeleton />
      </div>

      <PaginationSkeleton />
    </Card>
  );
}
