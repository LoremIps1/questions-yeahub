import { useSearchParams } from 'react-router-dom';

import styles from './styles.module.css';
import { Chip } from '@/shared/ui';
const RATE_OPTIONS = [1, 2, 3, 4, 5];

export function RateFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedRates = (searchParams.get('rate') ?? '').split(',').map(Number).filter(Boolean);

  const handleChange = (rate: number) => {
    setSearchParams((params) => {
      const currentRates = (params.get('rate') ?? '').split(',').map(Number).filter(Boolean);

      const nextRates = currentRates.includes(rate)
        ? currentRates.filter((item) => item !== rate)
        : [...currentRates, rate];

      if (nextRates.length) {
        params.set('rate', nextRates.join(','));
      } else {
        params.delete('rate');
      }

      params.set('page', '1');

      return params;
    });
  };

  return (
    <div className={styles.rate}>
      {RATE_OPTIONS.map((rate) => (
        <Chip key={rate} selected={selectedRates.includes(rate)} onClick={() => handleChange(rate)}>
          {rate}
        </Chip>
      ))}
    </div>
  );
}
