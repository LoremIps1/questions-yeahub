import { useGetQuestionByIdQuery } from '@/entities/question';
import { GuruCard } from '../QuestionSidebarGuru/QuestionSidebarGuru';
import { QuestionSidebarMeta } from '../QuestionSidebarMeta/QuestionSidebarMeta';
import styles from './styles.module.css';
import { Sidebar } from '@/shared/ui';

interface QuestionSidebarProps {
  questionId: number;
}

export function QuestionSidebar({ questionId }: QuestionSidebarProps) {
  const {
    data: question,
    isLoading,
    isError,
  } = useGetQuestionByIdQuery(questionId, {
    skip: !questionId,
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError || !question) {
    return <div>Вопрос не найден</div>;
  }
  return (
    <Sidebar className={styles.sidebar}>
      <QuestionSidebarMeta question={question} />
      <GuruCard />
    </Sidebar>
  );
}
