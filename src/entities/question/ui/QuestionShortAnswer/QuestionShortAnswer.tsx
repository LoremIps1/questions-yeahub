import { Card, Markdown } from '@/shared/ui';
import styles from './styles.module.css';

interface QuestionShortAnswerProps {
  answer: string;
}

export function QuestionShortAnswer({ answer }: QuestionShortAnswerProps) {
  return (
    <Card className={styles.answer}>
      <h2 className={styles.answerTitle}>Краткий ответ</h2>

      <Markdown>{answer}</Markdown>
    </Card>
  );
}
