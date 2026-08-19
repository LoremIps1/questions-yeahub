import { SpecializationFilter } from '../SpecializationFilter/SpecializationFilter';
import styles from './FilterQuestions.module.css';
export function FilterQuestions() {
  return (
    <div className={styles.filters}>
      <div className={styles.group}>
        <span className={styles.title}>Специализация</span>
        <SpecializationFilter />
      </div>
    </div>
  );
}
