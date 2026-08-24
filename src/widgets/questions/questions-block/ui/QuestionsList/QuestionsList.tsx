import { QuestionAccordion, type IQuestion } from '@/entities/question';
import styles from './styles.module.css';
import { QuestionActions } from '@/features/question/question-actions';
import { QuestionDetailsLink } from '@/features/question/open-question-details';

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
          desktopActions={<QuestionActions questionId={question.id} />}
          mobileAction={<QuestionDetailsLink questionId={question.id} />}
        />
      ))}
    </div>
  );
}
