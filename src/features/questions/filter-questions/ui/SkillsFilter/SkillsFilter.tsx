import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useGetSkillsQuery } from '@/entities/skills';

import { SkillsFilterSkeleton } from './SkillsFilter.skeleton';
import { ExpandableList, Chip } from '@/shared/ui';

const VISIBLE_COUNT = 5;

export function SkillsFilter() {
  const [limit, setLimit] = useState(VISIBLE_COUNT);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedSkillsIds = (searchParams.get('skills') ?? '')
    .split(',')
    .map(Number)
    .filter(Boolean);

  const { data, isLoading, isError } = useGetSkillsQuery({
    page: 1,
    limit,
  });

  if (isLoading) {
    return <SkillsFilterSkeleton />;
  }

  if (isError || !data) {
    return <div>Не удалось загрузить навыки</div>;
  }

  const { data: skills, total } = data;

  const handleSkillsChange = (id: number) => {
    setSearchParams((params) => {
      const selectedIds = (params.get('skills') ?? '').split(',').map(Number).filter(Boolean);

      const nextIds = selectedIds.includes(id)
        ? selectedIds.filter((selectedId) => selectedId !== id)
        : [...selectedIds, id];

      if (nextIds.length) {
        params.set('skills', nextIds.join(','));
      } else {
        params.delete('skills');
      }

      params.set('page', '1');

      return params;
    });
  };

  return (
    <ExpandableList
      items={skills}
      total={total}
      visibleCount={VISIBLE_COUNT}
      onExpandedChange={(expanded) => {
        setLimit(expanded ? total : VISIBLE_COUNT);
      }}
      renderItem={(skill) => (
        <Chip
          key={skill.id}
          imageSrc={skill.imageSrc}
          selected={selectedSkillsIds.includes(skill.id)}
          onClick={() => handleSkillsChange(skill.id)}
        >
          {skill.title}
        </Chip>
      )}
    />
  );
}
