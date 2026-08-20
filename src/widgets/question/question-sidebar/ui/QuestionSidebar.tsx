import type { IQuestion } from '@/entities/question';
import { GuruCard } from './GuruCard/GuruCard';
import { QuestionMeta } from './QuestionMeta/QuestionMeta';
import styles from './QuestionSidebar.module.css';
import { Sidebar } from '@/shared/ui/Sidebar';
interface QuestionSidebarProps {
  question: IQuestion;
}

export function QuestionSidebar({ question }: QuestionSidebarProps) {
  return (
    <Sidebar className={styles.sidebar}>
      <QuestionMeta question={question} />
      <GuruCard />
    </Sidebar>
  );
}
