import styles from './styles.module.css';
import GuruAvatar from '@/shared/assets/images/Ruslan-guru.png?url';
import Telegram from '@/shared/assets/images/icons/Telegram.svg?url';
import Youtube from '@/shared/assets/images/icons/Youtube.svg?url';
import Profile from '@/shared/assets/images/icons/Profile.svg?url';
import { Card } from '@/shared/ui';

export function GuruCard() {
  return (
    <Card className={styles.card}>
      <div className={styles.head}>
        <div className={styles.avatar}>
          <img src={GuruAvatar} alt="Руслан Куянец" loading="lazy" width={45} height={45} />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>Руслан Куянец</span>
          <span className={styles.skill}>Python Guru</span>
        </div>
      </div>
      <p className={styles.description}>
        Guru – это эксперты YeaHub, которые помогают развивать комьюнити.
      </p>

      <div className={styles.socials}>
        <a href="https://t.me/ruslan_kuyanets">
          <img src={Telegram} alt="Telegram" />
        </a>
        <a href="https://www.youtube.com/@reactify-it">
          <img src={Youtube} alt="Youtube" />
        </a>
        <a href="#">
          <img src={Profile} alt="Profile" />
        </a>
      </div>
    </Card>
  );
}
