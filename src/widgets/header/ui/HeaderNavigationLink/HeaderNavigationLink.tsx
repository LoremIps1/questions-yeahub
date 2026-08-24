import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { cn } from '@/shared/lib/cn';
import type { ReactNode } from 'react';

interface HeaderNavigationLinkProps {
  link: string;
  children: ReactNode;
  onClick?: () => void;
}

export function HeaderNavigationLink({ link, children, onClick }: HeaderNavigationLinkProps) {
  return (
    <li>
      <NavLink
        onClick={onClick}
        to={link}
        className={({ isActive }) => cn(styles.link, isActive && styles.active)}
      >
        {children}
      </NavLink>
    </li>
  );
}
