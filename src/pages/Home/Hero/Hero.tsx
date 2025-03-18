import { FC } from 'react';

import heroImg from '../../../assets/images/pages/Home/Hero/bg.png';

import styles from './Hero.module.scss';

type Props = {};

export const Hero: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.wrap}>
            <h1 className={styles.title}>
              Smart <mark>Programmatic</mark> Platform
            </h1>
            <p className={styles.text}>
              Hyper Audience proprietary technologies and supported solutions are aimed at&nbsp;selecting high-quality
              advertising inventory and campaign effectiveness analysis
            </p>
          </div>
          <div className={styles.img}>
            <img src={heroImg} width={1000} height="auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
