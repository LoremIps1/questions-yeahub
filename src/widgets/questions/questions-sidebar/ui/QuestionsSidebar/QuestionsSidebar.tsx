import { Card, Sidebar } from '@/shared/ui';
import styles from './styles.module.css';
import { QuestionsSidebarFilters } from '../QuestionsSidebarFilters/QuestionsSidebarFilters';

export function QuestionsSidebar() {
  return (
    <Sidebar className={styles.sidebar}>
      <Card>
        <QuestionsSidebarFilters />
      </Card>
    </Sidebar>
  );
}
