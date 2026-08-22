import { NextQuestionButton } from '@/features/question/next-question';
import { PreviousQuestionButton } from '@/features/question/previous-question';
import { Card } from '@/shared/ui';

import { useQuestionNavigation } from '../../model/useQuestionNavigation';

import styles from './styles.module.css';

interface QuestionDetailsNavigationProps {
  questionId: number;
}

export function QuestionDetailsNavigation({ questionId }: QuestionDetailsNavigationProps) {
  const { previousQuestionId, nextQuestionId, previousPage, nextPage, isNavigationLoading } =
    useQuestionNavigation(questionId);

  return (
    <Card className={styles.content}>
      <PreviousQuestionButton
        questionId={previousQuestionId}
        page={previousPage}
        isLoading={isNavigationLoading}
      />

      <NextQuestionButton
        questionId={nextQuestionId}
        page={nextPage}
        isLoading={isNavigationLoading}
      />
    </Card>
  );
}
