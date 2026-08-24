import styles from './styles.module.css';
import Placeholder from '@/shared/assets/images/placeholder.jpg';
import type { IQuestion } from '@/entities/question/model/types';
import { Card } from '@/shared/ui';
import type { ReactNode } from 'react';

interface QuestionHeaderProps {
  question: IQuestion;
  action?: ReactNode;
}

export function QuestionHeader({ question, action }: QuestionHeaderProps) {
  return (
    <Card className={styles.header}>
      <img
        src={question.imageSrc ?? Placeholder}
        alt="icon"
        className={styles.image}
        width={160}
        height={160}
        loading="lazy"
      />

      <div className={styles.headerContent}>
        <div className={styles.headerContentTop}>
          <h1 className={styles.title}>{question.title}</h1>
          {action && <div className={styles.action}>{action}</div>}
        </div>

        <p className={styles.description}>{question.description}</p>
      </div>
    </Card>
  );
}
