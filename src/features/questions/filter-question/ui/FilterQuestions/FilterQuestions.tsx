import { SpecializationFilter } from '../SpecializationFilter/SpecializationFilter';
import styles from './FilterQuestions.module.css';
import { SkillsFilter } from '../SkillsFilter/SkillsFilter';
export function FilterQuestions() {
  return (
    <div className={styles.filters}>
      <div className={styles.group}>
        <span className={styles.title}>Специализация</span>
        <SpecializationFilter />
      </div>
      <div className={styles.group}>
        <span className={styles.title}>Навыки</span>
        <SkillsFilter />
      </div>
    </div>
  );
}
