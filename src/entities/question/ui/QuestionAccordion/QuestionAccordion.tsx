import { Card } from '@/shared/ui/Card';
import type { IQuestion } from '../../model/types';
import styles from './QuestionAccordion.module.css';
import { Accordion } from '@/shared/ui';
import { Badge } from '@/shared/ui/Badge/Badge';
import { Markdown } from '@/shared/ui/Markdown';

interface QuestionAccordionProps {
  question: IQuestion;
}

export function QuestionAccordion({ question }: QuestionAccordionProps) {
  return (
    <Card className={styles.card} size="md">
      <Accordion value={String(question.id)} trigger={question.title}>
        <div className={styles.content}>
          <div className={styles.metaList}>
            <Badge variant="default" className={styles.meta}>
              Рейтинг:
              <Badge variant={'primary'}>{question.rate}</Badge>
            </Badge>

            <Badge variant="default" className={styles.meta}>
              Сложность:
              <Badge variant={'primary'}>{question.complexity}</Badge>
            </Badge>
          </div>

          <Markdown>{question.shortAnswer}</Markdown>
        </div>
      </Accordion>
    </Card>
  );
}
