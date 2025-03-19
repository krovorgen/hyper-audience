import { FC } from 'react';

import styles from './Advanced.module.scss';
import { Button } from '../../../components/Button/Button.tsx';
import { Link } from 'react-router-dom';

type Props = {};

export const Advanced: FC<Props> = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>
          Advanced full-stack programmatic advertising platform designed to meet the needs of both buyers and sellers
          using cutting-edge technology
        </h2>
        <div className={styles.wrap}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <mark>Hyper DSP and Smart Bidder</mark> with ML&nbsp;Optimization Algorithms ensures efficient inventory
              monetization and high profitability
            </li>
            <li className={styles.item}>
              <mark>oRTB AdExchange</mark> which provides only high-quality demand and supply for all partners
            </li>
            <li className={styles.item}>
              <mark>Trusted Fraud Protection</mark> system excludes all types of&nbsp;fraud and creates a&nbsp;blacklist
              of&nbsp;sources
            </li>
            <li className={styles.item}>
              <mark>Own DMP</mark> has various audience segments used in&nbsp;advertising placements
            </li>
          </ul>
          <Link className={styles.btn} to="/#contact">
            <Button Component="span" variant="secondary" size="md">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
