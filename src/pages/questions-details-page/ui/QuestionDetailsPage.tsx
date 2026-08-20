import { useParams } from 'react-router-dom';

import { QuestionDetails, useGetQuestionByIdQuery } from '@/entities/question';
import { Container } from '@/shared/ui/Container';
import { QuestionSidebar } from '@/widgets/question';
import styles from './QuestionDetailsPage.module.css';

export function QuestionDetailsPage() {
  const { id } = useParams();

  const questionId = Number(id);

  const {
    data: question,
    isLoading,
    isError,
  } = useGetQuestionByIdQuery(questionId, {
    skip: !questionId,
  });

  if (isLoading) {
    return (
      <Container>
        <div>Загрузка...</div>
      </Container>
    );
  }

  if (isError || !question) {
    return (
      <Container>
        <div>Вопрос не найден</div>
      </Container>
    );
  }

  return (
    <Container>
      <div className={styles.content}>
        <QuestionDetails question={question} />
        <QuestionSidebar question={question} />
      </div>
    </Container>
  );
}
