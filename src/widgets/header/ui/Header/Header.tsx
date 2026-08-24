import { Link } from 'react-router-dom';

import { MobileMenu } from '@/features/navigation/mobile-menu';
import Logo from '@/shared/assets/images/logoWithIcon.svg?url';
import { Button, Container } from '@/shared/ui';

import { HeaderAuthLinks } from '../HeaderAuthLinks/HeaderAuthLinks';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';

import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Link to="/">
            <img src={Logo} alt="YeaHub" width={172} height={33} />
          </Link>

          <div className={styles.desktopNavigation}>
            <HeaderNavigation />
          </div>

          <div className={styles.right}>
            <HeaderAuthLinks />
          </div>

          <div className={styles.mobileMenu}>
            <MobileMenu
              trigger={
                <Button variant="ghost" size="icon" aria-label="Открыть меню">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20M4 12H20M4 18H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </Button>
              }
              navigation={(onNavigate) => (
                <HeaderNavigation variant="mobile" onNavigate={onNavigate} />
              )}
              authLinks={<HeaderAuthLinks />}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
