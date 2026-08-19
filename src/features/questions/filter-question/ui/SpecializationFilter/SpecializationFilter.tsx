import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useGetSpecializationsQuery } from '@/entities/specialization';
import { Button } from '@/shared/ui/Button';
import { Chip } from '@/shared/ui/Chip';

import styles from './SpecializationFilter.module.css';

const DEFAULT_VISIBLE_COUNT = 5;

export function SpecializationFilter() {
  const [visibleCount, setVisibleCount] = useState(DEFAULT_VISIBLE_COUNT);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedSpecializationId = Number(searchParams.get('specializationId'));

  const { data, isLoading, isError } = useGetSpecializationsQuery({
    page: 1,
    limit: visibleCount,
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError || !data) {
    return <div>Не удалось загрузить специализации</div>;
  }

  const { data: specializations, total } = data;

  const isShowAll = visibleCount >= total;

  const handleSpecializationChange = (id: number) => {
    setSearchParams((params) => {
      if (selectedSpecializationId === id) {
        params.delete('specializationId');
      } else {
        params.set('specializationId', String(id));
      }

      params.set('page', '1');

      return params;
    });
  };

  const handleToggleShowAll = () => {
    setVisibleCount(isShowAll ? DEFAULT_VISIBLE_COUNT : total);
  };

  return (
    <div className={styles.group}>
      <div className={styles.specializations}>
        {specializations.map((specialization) => (
          <Chip
            key={specialization.id}
            selected={selectedSpecializationId === specialization.id}
            onClick={() => handleSpecializationChange(specialization.id)}
          >
            {specialization.title}
          </Chip>
        ))}
      </div>

      {total > DEFAULT_VISIBLE_COUNT && (
        <Button
          type="button"
          variant="text"
          className={styles.showAll}
          onClick={handleToggleShowAll}
        >
          {isShowAll ? 'Скрыть' : 'Посмотреть все'}
        </Button>
      )}
    </div>
  );
}
