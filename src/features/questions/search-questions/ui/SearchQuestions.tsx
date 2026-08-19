import { useSearchParams } from 'react-router-dom';

import SearchIcon from '@/shared/assets/images/icons/Search Icon.svg?url';
import { useDebouncedCallback } from '@/shared/lib/hooks/useDebouncedCallback';
import { Input } from '@/shared/ui/Input';

export function SearchQuestions() {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get('title') ?? '';

  const handleSearch = useDebouncedCallback((value: string) => {
    setSearchParams((params) => {
      if (value) {
        params.set('title', value);
      } else {
        params.delete('title');
      }

      params.set('page', '1');

      return params;
    });
  }, 500);

  return (
    <Input
      key={title}
      type="search"
      defaultValue={title}
      placeholder="Введите запрос..."
      leftIcon={<img src={SearchIcon} alt="" width={20} height={20} />}
      onChange={(event) => handleSearch(event.target.value)}
    />
  );
}
