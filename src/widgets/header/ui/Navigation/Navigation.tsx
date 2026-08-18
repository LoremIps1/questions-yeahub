import { NavLink } from 'react-router-dom';
import { navigationItems } from '../../config/navigation';
import styles from './Navigation.module.css';
import { cn } from '@/shared/lib/cn';

export function Navigation() {
  return (
    <nav className={cn(styles.navigation)}>
      <ul className={cn(styles.navLinks)}>
        {navigationItems.map(({ label, to }) => (
          <li>
            <NavLink to={to} key={to}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
