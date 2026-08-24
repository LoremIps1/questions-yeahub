import type { ReactNode } from 'react';
import { Drawer } from '@/shared/ui';
import styles from './styles.module.css';

interface MobileMenuProps {
  trigger: ReactNode;
  navigation: (onNavigate: () => void) => ReactNode;
  authLinks: ReactNode;
}

export function MobileMenu({ trigger, navigation, authLinks }: MobileMenuProps) {
  return (
    <Drawer trigger={trigger} title="Меню">
      {({ close }) => (
        <div className={styles.content}>
          {navigation(close)}
          <div className={styles.authLinks}>{authLinks}</div>
        </div>
      )}
    </Drawer>
  );
}
