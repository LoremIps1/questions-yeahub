import { Footer } from '@/widgets/footer/ui/Footer';
import { Header } from '@/widgets/header/ui/Header';
import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.css';
import { cn } from '@/shared/lib/cn';

export function AppLayout() {
  return (
    <div className={cn(styles.layout)}>
      <Header />
      <main className={cn(styles.main)}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
