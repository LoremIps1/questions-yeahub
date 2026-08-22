import { useSearchParams } from 'react-router-dom';

export function useQuestionFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    page = '1',
    title = '',
    keywords,
    specializationId,
    skills,
    complexity,
    rate,
  } = Object.fromEntries(searchParams);

  const filters = {
    page: Number(page) || 1,
    title: title || undefined,
    keywords: keywords ? keywords.split(',') : undefined,
    specializationId: specializationId ? Number(specializationId) : undefined,

    skills: skills ? skills.split(',') : undefined,

    complexity: complexity ? complexity.split(',').map(Number) : undefined,

    rate: rate ? rate.split(',').map(Number) : undefined,
  };

  const setPage = (page: number) => {
    setSearchParams((params) => {
      params.set('page', String(page));
      return params;
    });
  };

  const resetFilters = () => {
    setSearchParams({
      page: '1',
    });
  };

  return {
    filters,
    setPage,
    resetFilters,
  };
}
