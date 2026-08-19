import { Container } from '@/shared/ui/Container';
import { QuestionsFiltersSidebar, QuestionsList } from '@/widgets/questions';
import styles from './QuestionsPage.module.css';
export function QuestionsPage() {
  return (
    <Container>
      <div className={styles.content}>
        <QuestionsList />
        <QuestionsFiltersSidebar />
      </div>
    </Container>
  );
}
