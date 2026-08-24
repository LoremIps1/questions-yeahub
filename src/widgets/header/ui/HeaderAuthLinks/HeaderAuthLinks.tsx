import { ROUTES } from '@/shared/config';
import { Button } from '@/shared/ui';

export function HeaderAuthLinks() {
  return (
    <>
      <Button to={ROUTES.login} variant="text">
        Вход
      </Button>

      <Button to={ROUTES.register}>Регистрация</Button>
    </>
  );
}
