import { OpenFilters } from '@/features/questions/open-filters';
import { QuestionsSidebarFilters } from '@/widgets/questions/questions-sidebar/ui';
import styles from './styles.module.css';

export function QuestionsBlockHead() {
  return (
    <div className={styles.head}>
      <h2 className={styles.title}>База вопросов</h2>
      <div className={styles.mobileFilters}>
        <OpenFilters>
          <QuestionsSidebarFilters />
        </OpenFilters>
      </div>
    </div>
  );
}
