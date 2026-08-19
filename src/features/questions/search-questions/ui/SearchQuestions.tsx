import SearchIcon from '@/shared/assets/images/icons/Search Icon.svg?url';
import { Input } from '@/shared/ui/Input';

export function SearchQuestions() {
  return (
    <Input
      type="search"
      placeholder="Введите запрос..."
      leftIcon={<img src={SearchIcon} alt="Поиск" width={20} height={20} />}
    />
  );
}
