import { useSearchParams } from 'react-router-dom';

import { useGetQuestionsQuery } from '@/entities/question';

export function useQuestionNavigation(questionId: number) {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;

  const title = searchParams.get('title') || undefined;
  const specializationId = Number(searchParams.get('specializationId')) || undefined;

  const skills = searchParams.get('skills')?.split(',') || undefined;
  const keywords = searchParams.get('keywords')?.split(',') || undefined;

  const complexity = searchParams.get('complexity')?.split(',').map(Number) || undefined;

  const rate = searchParams.get('rate')?.split(',').map(Number) || undefined;

  const filters = {
    title,
    specializationId,
    skills,
    keywords,
    complexity,
    rate,
  };

  const {
    currentData: data,
    isLoading,
    isFetching,
    isError,
  } = useGetQuestionsQuery({
    page,
    ...filters,
  });

  const questions = data?.data ?? [];

  const totalPages = data ? Math.ceil(data.total / data.limit) : 0;

  const currentIndex = questions.findIndex((question) => question.id === questionId);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex >= 0 && currentIndex === questions.length - 1;

  const { currentData: previousPageData, isFetching: isPreviousPageFetching } =
    useGetQuestionsQuery(
      {
        page: page - 1,
        ...filters,
      },
      {
        skip: !isFirst || page <= 1,
      },
    );

  const { currentData: nextPageData, isFetching: isNextPageFetching } = useGetQuestionsQuery(
    {
      page: page + 1,
      ...filters,
    },
    {
      skip: !isLast || page >= totalPages,
    },
  );

  const previousQuestion =
    currentIndex > 0 ? questions[currentIndex - 1] : previousPageData?.data.at(-1);

  const nextQuestion =
    currentIndex >= 0 && currentIndex < questions.length - 1
      ? questions[currentIndex + 1]
      : nextPageData?.data[0];

  const previousPage = currentIndex > 0 ? page : previousQuestion ? page - 1 : undefined;

  const nextPage =
    currentIndex >= 0 && currentIndex < questions.length - 1
      ? page
      : nextQuestion
        ? page + 1
        : undefined;

  const isNavigationLoading = isFetching || isPreviousPageFetching || isNextPageFetching;

  const isUnavailable = isLoading || isError || !data || currentIndex === -1;

  return {
    previousQuestionId: previousQuestion?.id,
    nextQuestionId: nextQuestion?.id,
    previousPage,
    nextPage,
    isNavigationLoading,
    isUnavailable,
  };
}
