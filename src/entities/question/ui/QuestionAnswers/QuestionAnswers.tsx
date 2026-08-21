import { Card, Markdown } from '@/shared/ui';
import type { IQuestion } from '../../model/types';

import styles from './styles.module.css';

interface QuestionShortAnswerProps {
  question: IQuestion;
}

export function QuestionShortAnswer({ question }: QuestionShortAnswerProps) {
  return (
    <Card className={styles.answer}>
      <h2 className={styles.answerTitle}>Краткий ответ</h2>

      <Markdown>{question.shortAnswer}</Markdown>
    </Card>
  );
}
