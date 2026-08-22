import { useGetQuestionByIdQuery } from '@/entities/question';
import { GuruCard } from '../QuestionSidebarGuru/QuestionSidebarGuru';
import { QuestionSidebarMeta } from '../QuestionSidebarMeta/QuestionSidebarMeta';
import styles from './styles.module.css';
import { Sidebar } from '@/shared/ui';
import { QuestionSidebarSkeleton } from './QuestionSidebar.skeleton';

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
    return <QuestionSidebarSkeleton />;
  }

  if (isError || !question) {
    return null;
  }

  return (
    <Sidebar className={styles.sidebar}>
      <QuestionSidebarMeta question={question} />
      <GuruCard />
    </Sidebar>
  );
}
