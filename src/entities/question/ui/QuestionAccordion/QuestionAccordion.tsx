import type { IQuestion } from '../../model/types';
import { Accordion, Card, Markdown } from '@/shared/ui';
import { QuestionMetric } from '../QuestionMetric/QuestionMetric';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface QuestionAccordionProps {
  question: IQuestion;
  actions?: ReactNode;
}

export function QuestionAccordion({ question, actions }: QuestionAccordionProps) {
  return (
    <Card className={styles.card} size="md">
      <Accordion value={String(question.id)} trigger={question.title}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <div className={styles.metaList}>
              <QuestionMetric label="Рейтинг" value={question.rate} />
              <QuestionMetric label="Сложность" value={question.complexity} />
            </div>

            {actions && actions}
          </div>

          <Markdown>{question.shortAnswer}</Markdown>
        </div>
      </Accordion>
    </Card>
  );
}
