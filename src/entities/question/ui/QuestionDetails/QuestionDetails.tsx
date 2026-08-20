import type { IQuestion } from '../../model/types';

import styles from './QuestionDetails.module.css';
import { QuestionHeader } from './QuestionHeader/QuestionHeader';
import { QuestionAnswers } from './QuestionAnswers/QuestionAnswers';

interface QuestionDetailsProps {
  question: IQuestion;
}

export function QuestionDetails({ question }: QuestionDetailsProps) {
  return (
    <div className={styles.details}>
      <QuestionHeader question={question} />
      <QuestionAnswers question={question} />
    </div>
  );
}
