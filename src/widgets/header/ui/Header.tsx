import { Container } from '@/shared/ui/Container';
import Logo from '@/shared/assets/images/logoWithIcon.svg?url';
import { Link } from 'react-router-dom';
import { cn } from '@/shared/lib/cn';
import { Navigation } from './Navigation/Navigation';
import { Button } from '@/shared/ui/Button';
import styles from './Header.module.css';
import { ROUTES } from '@/shared/config/routes/routes';

export function Header() {
  return (
    <header className={cn(styles.header)}>
      <Container>
        <div className={cn(styles.content)}>
          <Link to="/">
            <img src={Logo} alt="logo" width={172} height={33} />
          </Link>
          <Navigation />
          <div className={cn(styles.right)}>
            <Button to={ROUTES.login} variant="text">
              Вход
            </Button>
            <Button to={ROUTES.register}>Регистрация</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
