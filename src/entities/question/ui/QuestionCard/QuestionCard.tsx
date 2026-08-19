import { Card } from '@/shared/ui/Card';
import type { IQuestion } from '../../model/types';
import styles from './QuestionCard.module.css';
import { Accordion } from '@/shared/ui';
import { Badge } from '@/shared/ui/Badge/Badge';

interface IQuestionCardProps {
  question: IQuestion;
}

export function QuestionCard({ question }: IQuestionCardProps) {
  return (
    <Card className={styles.card} size="md">
      <Accordion value={String(question.id)} trigger={question.title}>
        <div className={styles.content}>
          <div className={styles.metaList}>
            <Badge variant="default" className={styles.meta}>
              Рейтинг:
              <Badge variant={'primary'}>{question.rating}</Badge>
            </Badge>

            <Badge variant="default" className={styles.meta}>
              Сложность:
              <Badge variant={'primary'}>{question.difficulty}</Badge>
            </Badge>
          </div>

          <p className={styles.answer}>{question.shortAnswer}</p>
        </div>
      </Accordion>
    </Card>
  );
}
