import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetSpecializationsQuery } from '@/entities/specialization';
import { Chip } from '@/shared/ui/Chip';
import { ExpandableList } from '@/shared/ui/ExpandableList';
import { SpecializationFilterSkeleton } from './SpecializationFilter.skeleton';

const VISIBLE_COUNT = 5;

export function SpecializationFilter() {
  const [limit, setLimit] = useState(VISIBLE_COUNT);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedSpecializationId = Number(searchParams.get('specializationId')) || undefined;

  const { data, isLoading, isError } = useGetSpecializationsQuery({
    page: 1,
    limit,
  });

  if (isLoading) {
    return <SpecializationFilterSkeleton />;
  }

  if (isError || !data) {
    return <div>Не удалось загрузить специализации</div>;
  }

  const { data: specializations, total } = data;

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

  return (
    <ExpandableList
      items={specializations}
      total={total}
      visibleCount={VISIBLE_COUNT}
      onExpandedChange={(expanded) => {
        setLimit(expanded ? total : VISIBLE_COUNT);
      }}
      renderItem={(specialization) => (
        <Chip
          key={specialization.id}
          selected={selectedSpecializationId === specialization.id}
          onClick={() => handleSpecializationChange(specialization.id)}
        >
          {specialization.title}
        </Chip>
      )}
    />
  );
}
