import { QuestionHeader, QuestionShortAnswer, useGetQuestionByIdQuery } from '@/entities/question';

import { ExpandQuestionAnswer } from '@/features/question/expand-question-answer';

import { QuestionDetailsSkeleton } from './QuestionDetails.skeleton';
import { QuestionDetailsNavigation } from '../QuestionDetailsNavigation/QuestionDetailsNavigation';
import { QuestionError } from '../QuestionError/QuestionError';

import styles from './styles.module.css';

interface QuestionDetailsProps {
  questionId: number;
}

export function QuestionDetails({ questionId }: QuestionDetailsProps) {
  const {
    data: question,
    isLoading,
    isError,
    refetch,
  } = useGetQuestionByIdQuery(questionId, {
    skip: !questionId,
  });

  if (isLoading && !question) {
    return <QuestionDetailsSkeleton />;
  }

  if (isError || !question) {
    return <QuestionError onRetry={refetch} />;
  }

  return (
    <div className={styles.question}>
      <QuestionHeader question={question} />

      <QuestionDetailsNavigation questionId={question.id} />

      <QuestionShortAnswer answer={question.shortAnswer} />

      <ExpandQuestionAnswer answer={question.longAnswer} />
    </div>
  );
}
