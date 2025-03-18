import { FC } from 'react';

import partnersImg from '../../../assets/images/pages/Home/Partners/partners.png';

import styles from './Partners.module.scss';

type Props = {};

export const Partners: FC<Props> = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>Partners</h2>
        <div className={styles.img}>
          <img src={partnersImg} width={859} height={335} alt="Partners" />
        </div>
      </div>
    </section>
  );
};
