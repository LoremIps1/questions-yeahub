import Logo from '@/shared/assets/images/logo.svg?url';
import { Container } from '@/shared/ui';

import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <img src={Logo} alt="YeaHub" width={99} height={32} />

          <p className={styles.slogan}>Выбери, каким будет IT завтра, вместе с нами</p>

          <p className={styles.description}>
            YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш
            исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для
            ознакомления в Figma.
          </p>
        </div>

        <hr className={styles.hr} />

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <span>© 2024 YeaHub</span>

            <a href="#" className={styles.link}>
              Документы
            </a>
          </div>

          <div className={styles.social}>
            <span className={styles.socialText}>Ищите нас и в других соцсетях</span>

            <a href="https://t.me/yeahub_it" target="_blank" rel="noreferrer">
              @yeahub_it
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
