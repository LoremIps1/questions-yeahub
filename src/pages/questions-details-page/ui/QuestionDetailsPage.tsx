import styles from './styles.module.css';
import { QuestionDetails } from '@/widgets/question/question-details';
import { BackToQuestions } from '@/features/question/back-to-questions';
import { QuestionSidebar } from '@/widgets/question/question-sidebar';
import { useParams } from 'react-router-dom';
import { Container } from '@/shared/ui';

export function QuestionDetailsPage() {
  const { id } = useParams();

  const questionId = Number(id);
  return (
    <Container>
      <div className={styles.content}>
        <BackToQuestions />

        <div className={styles.row}>
          <QuestionDetails questionId={questionId} />
          <QuestionSidebar questionId={questionId} />
        </div>
      </div>
    </Container>
  );
}
