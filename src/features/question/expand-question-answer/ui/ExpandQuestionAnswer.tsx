import { Card, ExpandableContent, Markdown } from '@/shared/ui';
import styles from './styles.module.css';

interface ExpandQuestionAnswerProps {
  answer: string;
}

export function ExpandQuestionAnswer({ answer }: ExpandQuestionAnswerProps) {
  return (
    <Card className={styles.answer}>
      <h2 className={styles.answerTitle}>Развёрнутый ответ</h2>

      <ExpandableContent>
        <Markdown>{answer}</Markdown>
      </ExpandableContent>
    </Card>
  );
}
