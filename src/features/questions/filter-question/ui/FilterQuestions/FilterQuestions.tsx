import { SpecializationFilter } from '../SpecializationFilter/SpecializationFilter';
import styles from './FilterQuestions.module.css';
import { SkillsFilter } from '../SkillsFilter/SkillsFilter';
import { ComplexityFilter } from '../ComplexityFilter/ComplexityFilter';
import { RateFilter } from '../RateFilter/RateFilter';
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
      <div className={styles.group}>
        <span className={styles.title}>Сложность вопросов</span>
        <ComplexityFilter />
      </div>
      <div className={styles.group}>
        <span className={styles.title}>Рейтинг вопроса</span>
        <RateFilter />
      </div>
    </div>
  );
}
