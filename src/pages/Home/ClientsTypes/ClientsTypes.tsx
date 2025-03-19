import { FC } from 'react';

import ArrowRight from '../../../assets/icons/arrow-right.svg?react';

import styles from './ClientsTypes.module.scss';
import { Link } from 'react-router-dom';

type Props = {};

export const ClientsTypes: FC<Props> = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <ul className={styles.items}>
          <li className={styles.item} id="sellers">
            <h2 className={styles.title}>For Sellers</h2>
            <p className={styles.text}>
              Hyper DSP platform connects with the world&rsquo;s largest advertisers/agencies, it&nbsp;gets high quality
              ads from trusted advertisers only. The basis of&nbsp;DSP is&nbsp;Hyper&rsquo;s own Smart Bidder, which
              buying only relevant inventory and increases the income of&nbsp;publishers. Join&nbsp;us to&nbsp;maximize
              your income today!
            </p>
            <Link className={styles.link} to="/#contact">
              Request a demo for sellers <ArrowRight />
            </Link>
          </li>
          <li className={styles.item} id="buyers">
            <h2 className={styles.title}>For Buyers</h2>
            <p className={styles.text}>
              Hyper Audience SSP providing access to&nbsp;more than 30&nbsp;billion daily ad&nbsp;requests across apps
              and web sites, to&nbsp;largest and most trusted premium supply partners. Real time automated and smart
              ad&nbsp;buying services maximize the performance of&nbsp;digital advertising for your brand.
            </p>
            <Link className={styles.link} to="/#contact">
              Request a demo for buyers <ArrowRight />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
