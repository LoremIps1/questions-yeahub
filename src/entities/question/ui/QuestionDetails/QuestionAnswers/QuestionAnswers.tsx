import { Card } from '@/shared/ui/Card';
import type { IQuestion } from '../../../model/types';
import styles from './QuestionAnswers.module.css';
import { Markdown } from '@/shared/ui/Markdown';
import { ExpandableContent } from '@/shared/ui/ExpandableContent';

interface QuestionAnswersProps {
  question: IQuestion;
}

export function QuestionAnswers({ question }: QuestionAnswersProps) {
  return (
    <>
      <Card className={styles.answer}>
        <h2 className={styles.answerTitle}>Краткий ответ</h2>

        <Markdown>{question.shortAnswer}</Markdown>
      </Card>

      <Card className={styles.answer}>
        <h2 className={styles.answerTitle}>Развёрнутый ответ</h2>

        <ExpandableContent>
          <Markdown>{question.longAnswer}</Markdown>
        </ExpandableContent>
      </Card>
    </>
  );
}
