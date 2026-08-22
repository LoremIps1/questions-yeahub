import { GuruCard } from '../QuestionSidebarGuru/QuestionSidebarGuru';
import styles from './styles.module.css';
import { Sidebar } from '@/shared/ui';
import { QuestionSidebarMetaSkeleton } from '../QuestionSidebarMeta/QuestionSidebarMeta.skeleton';

export function QuestionSidebarSkeleton() {
  return (
    <Sidebar className={styles.sidebar}>
      <QuestionSidebarMetaSkeleton />
      <GuruCard />
    </Sidebar>
  );
}
