import { QuestionHeader, QuestionShortAnswer, useGetQuestionByIdQuery } from '@/entities/question';
import styles from './styles.module.css';
import { ExpandQuestionAnswer } from '@/features/question/expand-question-answer';

interface QuestionDetailsProps {
  questionId: number;
}

export function QuestionDetails({ questionId }: QuestionDetailsProps) {
  const {
    data: question,
    isLoading,
    isError,
  } = useGetQuestionByIdQuery(questionId, {
    skip: !questionId,
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError || !question) {
    return <div>Вопрос не найден</div>;
  }

  return (
    <div className={styles.question}>
      <QuestionHeader question={question} />
      <QuestionShortAnswer answer={question.shortAnswer} />
      <ExpandQuestionAnswer answer={question.longAnswer} />
    </div>
  );
}
