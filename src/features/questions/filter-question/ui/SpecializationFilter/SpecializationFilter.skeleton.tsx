import { ChipSkeleton } from '@/shared/ui/Chip';
import styles from './SpecializationFilter.module.css';

export function SpecializationFilterSkeleton() {
  return (
    <div className={styles.specializations}>
      {Array.from({ length: 5 }, (_, index) => (
        <ChipSkeleton key={index} />
      ))}
    </div>
  );
}
