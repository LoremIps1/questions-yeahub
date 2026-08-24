import { type IQuestion } from '@/entities/question';

import { Card } from '@/shared/ui';

import { QuestionSidebarMetaInfo } from '../QuestionSidebarMetaInfo/QuestionSidebarMetaInfo';
import styles from './styles.module.css';
interface QuestionSidebarMetaProps {
  question: IQuestion;
}

export function QuestionSidebarMeta({ question }: QuestionSidebarMetaProps) {
  return (
    <Card className={styles.card}>
      <QuestionSidebarMetaInfo question={question} />
    </Card>
  );
}
