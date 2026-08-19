import { useSearchParams } from 'react-router-dom';

import { Chip } from '@/shared/ui/Chip';
import styles from './ComplexityFilter.module.css';
const COMPLEXITY_OPTIONS = [
  { label: '1–3', values: [1, 2, 3] },
  { label: '4–6', values: [4, 5, 6] },
  { label: '7–8', values: [7, 8] },
  { label: '9–10', values: [9, 10] },
];

export function ComplexityFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedComplexity = (searchParams.get('complexity') ?? '')
    .split(',')
    .map(Number)
    .filter(Boolean);

  const handleChange = (values: number[]) => {
    setSearchParams((params) => {
      const currentValues = (params.get('complexity') ?? '').split(',').map(Number).filter(Boolean);

      const isSelected = values.every((value) => currentValues.includes(value));

      const nextValues = isSelected
        ? currentValues.filter((value) => !values.includes(value))
        : [...new Set([...currentValues, ...values])];

      if (nextValues.length) {
        params.set('complexity', nextValues.join(','));
      } else {
        params.delete('complexity');
      }

      params.set('page', '1');

      return params;
    });
  };

  return (
    <div className={styles.complexity}>
      {COMPLEXITY_OPTIONS.map((option) => {
        const selected = option.values.every((value) => selectedComplexity.includes(value));

        return (
          <Chip key={option.label} selected={selected} onClick={() => handleChange(option.values)}>
            {option.label}
          </Chip>
        );
      })}
    </div>
  );
}
