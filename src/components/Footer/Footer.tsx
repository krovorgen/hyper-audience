import { FC } from 'react';

import styles from './Footer.module.scss';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { MENU_ANCHOR, RoutePaths } from '../../constants';
import inLogo from '../../assets/images/components/Footer/in.svg';
import facebookLogo from '../../assets/images/components/Footer/facebook.svg';

type Props = {};

export const Footer: FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrap}>
          <Link to={RoutePaths.HOME} className={styles.logo}>
            <img src={logo} width={117} height="auto" alt="Логотип" />
          </Link>
          <ul className={styles.items}>
            {MENU_ANCHOR.map(({ path, label }) => (
              <li key={path} className={styles.item}>
                <Link to={path} className={styles.link}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.socials}>
            <a
              className={styles.social}
              href="https://www.linkedin.com/company/hyper-adtech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={inLogo} width={48} height={48} alt="linkedin.com" />
            </a>
            <a
              className={styles.social}
              href="https://www.facebook.com/hyperadtech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookLogo} width={48} height={48} alt="linkedin.com" />
            </a>
          </div>
        </div>
        <ul className={styles.elements}>
          <li className={styles.element}>
            <Link to={RoutePaths.TERMS} className={styles.link}>
              Terms of use
            </Link>
          </li>
          <li className={styles.element}>
            <Link to={RoutePaths.POLICY} className={styles.link}>
              Privacy Policy
            </Link>
          </li>
          <li className={styles.element}>
            <Link to={RoutePaths.POLICY_OUTPUT} className={styles.link}>
              Opt Out Policy
            </Link>
          </li>
        </ul>
        <p className={styles.copyright}>© 2016-2025 Hyper Audience</p>
      </div>
    </footer>
  );
};
