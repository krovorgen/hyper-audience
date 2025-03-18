import { Link } from 'react-router-dom';
import { JSX, useEffect, useState } from 'react';
import cn from 'classnames';
import { MENU_ANCHOR, RoutePaths } from '../../constants';
import logo from '../../assets/images/logo.svg';
import Burger from '../../assets/icons/burger.svg?react';
import Close from '../../assets/icons/close.svg?react';
import styles from './Header.module.scss';
import { Button } from '../Button/Button.tsx';

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  return (
    <header className={styles.header}>
      <div className={cn('container', styles.container)}>
        <Link to={RoutePaths.HOME} className={styles.logo}>
          <img src={logo} width={117} height={33} alt="Логотип" />
        </Link>

        <button className={styles.burger} onClick={toggleMenu}>
          {isOpen ? <Close /> : <Burger />}
        </button>
        <nav className={cn(styles.nav, { [styles.navOpen]: isOpen })}>
          <ul className={styles.items}>
            {MENU_ANCHOR.map(({ path, label }) => (
              <li key={path} className={styles.item}>
                <Link to={path} className={styles.link} onClick={closeMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button className={styles.contact} Component="a" href="/#contact" size="sm">
          Contact Us
        </Button>
      </div>
    </header>
  );
};
