import { Link } from 'react-router-dom';

import Logo from '@/shared/assets/images/logoWithIcon.svg?url';
import { ROUTES } from '@/shared/config/routes/routes';
import { Button, Container } from '@/shared/ui';

import { Navigation } from './Navigation/Navigation';

import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Link to="/">
            <img src={Logo} alt="YeaHub" width={172} height={33} />
          </Link>

          <Navigation />

          <div className={styles.right}>
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
