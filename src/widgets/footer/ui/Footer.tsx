import { cn } from '@/shared/lib/cn';
import styles from './Footer.module.css';
import { Container } from '@/shared/ui/Container';
import Logo from '@/shared/assets/images//logo.svg?url';

export function Footer() {
  return (
    <footer className={cn(styles.footer)}>
      <Container>
        <div className={cn(styles.top)}>
          <img src={Logo} alt="Yeahub" width={99} height={32} />
          <p className={cn(styles.slogan)}>Выбери, каким будет IT завтра, вместе с нами</p>
          <p className={cn(styles.description)}>
            YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш
            исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для
            ознакомления в Figma.
          </p>
        </div>
        <hr className={cn(styles.hr)} />
        <div className={cn(styles.bottom)}>
          <div className={cn(styles.legal)}>
            <span>© 2024 YeaHub</span>
            <a href="#" className={styles.link}>
              Документы
            </a>
          </div>
          <div className={styles.social}>
            <span className={styles.socialText}>Ищите нас и в других соцсетях</span>
            <a href="https://t.me/yeahub_it">@yeahub_it</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
