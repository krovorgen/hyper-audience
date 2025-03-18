import { FC } from 'react';

import styles from './PolicyOutput.module.scss';
import cn from 'classnames';

type Props = {};

export const PolicyOutput: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className={cn('container', styles.container)}>
        <p>Effective Date: June 21, 2019</p>
        <p>
          As noted previously in the <a href="/privacy_policy">Hyper Audience Privacy Policy</a>, Hyper Audience Native
          Ad Platform collects non-PII to deliver deliver more relevant Advertiser’s Ads to mobile applications via ad
          customization, retargeting, interest-based and behavior advertising, and to prevent fraud.
        </p>
        <p>
          Hyper Audience does not collect any personal information that identifies You (the End-user of mobile device),
          such as your name or address and other similar Personal Data.
        </p>
        <p>
          You may at any time opt out from Hyper Audience advertising via Your mobile device settings using the
          advertising choice mechanisms provided by the most popular mobile operating systems:
        </p>
        <p>
          <h2>iOS 6:</h2>
        </p>
        <p>
          Go to Settings -&gt; General -&gt; About -&gt; Advertising from your iOS home screen. &gt; Enable “Limit Ad
          Tracking”
        </p>
        <p>
          <h2>iOS 7+:</h2>
        </p>
        <p>Go to Settings -&gt; Privacy -&gt; Advertising &gt; Enable “Limit Ad Tracking”</p>
        <p>
          <h2>Android versions 2.3 and above:</h2>
        </p>
        <p>Open your Google Settings app &gt; Ads &gt; Enable “Opt out of interest-based advertising”</p>
        <p>
          <h2>Stock Android M (6.0)+:</h2>
        </p>
        <p>Open Settings -&gt; Ads &gt; Enable “Opt out of interest-based advertising”</p>
        <p>
          <h2>Samsung's Android M (TouchWiz 6.0+):</h2>
        </p>
        <p>
          Open Settings -&gt; Applications -&gt; Scroll to the bottom -&gt; Google -&gt; Ads &gt; Enable “Opt out of
          interest-based advertising”
        </p>
        <p>
          <h2>Windows 8 Mobile Device:</h2>
        </p>
        <p>Go to Settings -&gt; Advertising ID &gt; Enable “Advertising ID”</p>
        <p>
          <h2>Important Notes:</h2>
        </p>
        <p>
          Even if You opt out, Ads may still be served to Your mobile device based on other data that is automatically
          delivered to Hyper Audience Native Ad Platform. As a result, Hyper Audience Native Ad Platform will not
          display relevant, targeted Ads to You and you may notice the same Ads multiple times or receive Ads that do
          not interest You.
        </p>
        <p>
          The instructions provided above may change at the discretion of the companies that provide the operating
          systems for these mobile devices.
        </p>
        <br />
        <p>
          You may at any time contact us about your privacy concerns via{' '}
          <a href="mailto:support@hyperaudience.com">support@hyperaudience.com</a>
        </p>
        <p>
          Alternatively, You may write to us at: 41, Misiaouli &amp; Kavazoglou 2nd Floor, Office 201, 3016 Limassol,
          Cyprus
        </p>
      </div>
    </div>
  );
};
