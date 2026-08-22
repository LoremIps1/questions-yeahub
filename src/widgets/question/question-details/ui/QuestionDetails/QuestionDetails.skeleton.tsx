import { QuestionHeaderSkeleton, QuestionShortAnswerSkeleton } from '@/entities/question';
import styles from './styles.module.css';

export function QuestionDetailsSkeleton() {
  return (
    <div className={styles.question}>
      <QuestionHeaderSkeleton />
      <QuestionShortAnswerSkeleton />
      <QuestionShortAnswerSkeleton count={10} />
    </div>
  );
}
