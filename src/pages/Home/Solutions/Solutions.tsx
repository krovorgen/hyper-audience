import { FC } from 'react';

import img1 from '../../../assets/images/pages/Home/Solutions/1.svg';
import img2 from '../../../assets/images/pages/Home/Solutions/2.svg';
import img3 from '../../../assets/images/pages/Home/Solutions/3.svg';
import img4 from '../../../assets/images/pages/Home/Solutions/4.svg';
import img5 from '../../../assets/images/pages/Home/Solutions/5.svg';

import styles from './Solutions.module.scss';

type Props = {};

export const Solutions: FC<Props> = () => {
  return (
    <section className={styles.root} id="solutions">
      <div className="container">
        <h2 className={styles.title}>
          Hyper Audience <mark>Technological</mark> Solutions
        </h2>
        <ul className={styles.items}>
          <li className={styles.item}>
            <div className={styles.info}>
              <h3 className={styles.subtitle}>
                Smart <mark>Ad Exchange</mark>
              </h3>
              <div className={styles.text} style={{ maxWidth: 395 }}>
                <p>
                  Embraces all types of media-inventory: mobile, desktop, or CTV. Hyper Ad Exchange will help to find
                  buyers for every single impression.
                </p>
              </div>
            </div>
            <div className={styles.img}>
              <img src={img1} width={540} height={398} alt="Picture" />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.info}>
              <h3 className={styles.subtitle}>
                <mark>Predictive</mark>
                Algorithms
              </h3>
              <div className={styles.text} style={{ maxWidth: 396 }}>
                <p>
                  A system of own predictive algorithms, the purpose of which is to ensure the fulfillment of key
                  indicators for the quality of inventory and the effectiveness of advertising campaigns.
                </p>
              </div>
            </div>
            <div className={styles.img}>
              <img src={img2} width={484} height={356} alt="Picture" />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.info}>
              <h3 className={styles.subtitle}>
                Verification and Efficiency <mark>Analysis</mark>
              </h3>
              <div className={styles.text} style={{ maxWidth: 406 }}>
                <p>Hyper AdTech's ad inventory supports measurements from all major independent verifiers.</p>
                <p>
                  Hyper AdTech is one of the first in-app platforms in the market that has implemented support for
                  advertising inventory . . .
                </p>
              </div>
            </div>
            <div className={styles.img}>
              <img src={img3} width={521} height={415} alt="Picture" />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.info}>
              <h3 className={styles.subtitle}>
                Fraud <mark>Protection</mark>
              </h3>
              <div className={styles.text} style={{ maxWidth: 408 }}>
                <p>
                  Hyper Audience implement its own internal fraud protection system that perfectly allows to identify
                  invalid traffic and has a smart system that excludes the main types of fraud on the traffic of sites
                  and applications, such as GIVT and SIVT. Our platform supports measurements of all the main fraud
                  verifiers, such as Pixelate and Protected Media.
                </p>
              </div>
            </div>
            <div className={styles.img}>
              <img src={img4} width={577} height={338} alt="Picture" />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.info}>
              <h3 className={styles.subtitle}>DMP</h3>
              <div className={styles.text} style={{ maxWidth: 377 }}>
                <p>
                  We form accurate segments based on a wide range of data and mobile audience parameters. Own DMP and
                  data from third-party data platforms allow you to build segments for targeting at the intersection of
                  various parameters.
                </p>
              </div>
            </div>
            <div className={styles.img}>
              <img src={img5} width={601} height={464} alt="Picture" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
