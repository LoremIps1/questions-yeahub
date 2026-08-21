import { QuestionAccordion, type IQuestion } from '@/entities/question';
import styles from './styles.module.css';
import { QuestionActions } from '@/features/question/question-actions';

interface QuestionsListProps {
  questions: IQuestion[];
}

export function QuestionsList({ questions }: QuestionsListProps) {
  return (
    <div className={styles.list}>
      {questions.map((question) => (
        <QuestionAccordion
          key={question.id}
          question={question}
          actions={<QuestionActions questionId={question.id} />}
        />
      ))}
    </div>
  );
}
