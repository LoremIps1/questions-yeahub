import { QuestionHeaderSkeleton, QuestionShortAnswerSkeleton } from '@/entities/question';
import { QuestionDetailsNavigationSkeleton } from '../QuestionDetailsNavigation/QuestionDetailsNavigation.skeleton';
import styles from './styles.module.css';

export function QuestionDetailsSkeleton() {
  return (
    <div className={styles.question}>
      <QuestionHeaderSkeleton />
      <QuestionDetailsNavigationSkeleton />
      <QuestionShortAnswerSkeleton />
      <QuestionShortAnswerSkeleton count={10} />
    </div>
  );
}
