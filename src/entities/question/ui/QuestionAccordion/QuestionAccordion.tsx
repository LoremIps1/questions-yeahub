import type { IQuestion } from '../../model/types';
import { Accordion, Card, Markdown } from '@/shared/ui';
import { QuestionMetric } from '../QuestionMetric/QuestionMetric';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface QuestionAccordionProps {
  question: IQuestion;
  desktopActions?: ReactNode;
  mobileAction?: ReactNode;
}

export function QuestionAccordion({
  question,
  desktopActions,
  mobileAction,
}: QuestionAccordionProps) {
  return (
    <Card className={styles.card} size="md">
      <Accordion value={String(question.id)} trigger={question.title}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <div className={styles.metaList}>
              <QuestionMetric label="Рейтинг" value={question.rate} />
              <QuestionMetric label="Сложность" value={question.complexity} />
            </div>

            {desktopActions && <div className={styles.desktopActions}>{desktopActions}</div>}
          </div>

          <Markdown>{question.shortAnswer}</Markdown>

          {mobileAction && <div className={styles.mobileActions}>{mobileAction}</div>}
        </div>
      </Accordion>
    </Card>
  );
}
