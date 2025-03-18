import { FC } from 'react';

import styles from './Blockquote.module.scss';

type Props = {};

export const Blockquote: FC<Props> = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <p className={styles.text}>
          Hyper Audience unites publishers with premium inventory and the best buyers&nbsp;&mdash; DSP and direct
          Advertising Agencies. Own DSP and Smart bidder allow you to&nbsp;effectively buy inventory with precise
          audience targeting
        </p>
      </div>
    </section>
  );
};
