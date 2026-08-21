import { QuestionsSidebar } from '@/widgets/questions/questions-sidebar';
import { QuestionsBlock } from '@/widgets/questions/questions-block';
import styles from './styles.module.css';
import { Container } from '@/shared/ui';

export function QuestionsPage() {
  return (
    <Container>
      <div className={styles.content}>
        <QuestionsBlock />
        <QuestionsSidebar />
      </div>
    </Container>
  );
}
