import { FC } from 'react';

import styles from './Terms.module.scss';
import cn from 'classnames';

type Props = {};

export const Terms: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className={cn('container', styles.container)}>
        <div className="sticky-anchor" id="advertiser"></div>
        <h2 className={styles.title}>Advertiser Agreement</h2>
        <p className={styles.note}>Last updated: February 16, 2023</p>
        <p>
          Hyper Audience (“Company”) is a corporation MAELICO LTD., existing under the laws of the Republic of Cyprus,
          under incorporation number HE 350887, welcomes You (“Advertiser”) to use Hyper Audience's online software
          located at website <a href="https://hyperaudience.com">https://hyperaudience.com</a> (“Native Ad Platform”) in
          accordance with the terms of this Hyper Audience Services Agreement for Advertisers.
        </p>
        <p>
          Native Ad Platform provides You (“Advertiser”) opportunities to advertise goods and / or services on third
          party’s Mobile Network Resources by launching online Advertising Campaign(s) and define the requirements of
          Advertising Campaign(s) choosing among CPA, CPI, CPC, CPL, CPM models.
        </p>
        <p>
          This Advertiser Agreement is an official proposal (“Offer”) issued by Company to enter into a services
          agreement between Advertiser and the Company on the terms as described herein. This Offer, the appslicable
          insertion order (“IO”) and the applicable selections made by Advertiser in its personal User’s account
          (“User’s account”) shall be collectively referred to as “this Agreement”.
        </p>
        <p>
          By registering for User’s account on the Native Ad Platform you are deemed to have executed this Agreement
          electronically, effective on the date you enter your Account via your login and password.
        </p>
        <p>
          Your User’s account registration constitutes an acknowledgement that You are able to electronically receive,
          download, and print this Agreement, any amendments and other information from Company.
        </p>
        <p>
          By accessing and using any part of the Native Ad Platform described herein, You agree to and consent to be
          bound by all of the terms of this Agreement. If You do not agree to all of the terms of this Agreement, You
          may not access and/or use any part of the Native Ad Platform.
        </p>
        <p>1. Definitions</p>
        <p>
          1.1. For the purposes of this Advertiser Agreement, the following terms shall have the following meanings:
        </p>
        <p>“Ad” means any advertisement provided by the Advertiser or on behalf of Advertiser to Company;</p>
        <p>
          “Ad Tag” means Company’s and/or Publisher’s instruction(s) and Publisher's code(s) for the purpose of
          integration of advertising;
        </p>
        <p>
          “Advertiser” means the User of the Native Ad Platform and Company’s services who desires to distribute and
          advertise his goods and services through Campaigns on the Native Ad Platform;
        </p>
        <p>
          “Advertising Campaign” means a specific advertising program, which is available through Native Ad Platform,
          under which Ads should be delivered on Mobile Network Resources for the benefit of the Advertiser;
        </p>
        <p>
          “Creative” means promotional advertising materials in different graphical forms for display advertising
          (including but not limited to text advertising, text links, banners, buttons, videos, graphics and other
          similar online media) placed through the Native Ad Platform to Mobile Network Resources, which have direct
          hypertext links to the relevant Advertiser’s Product(s) and are accessible and "clickable" via mobile
          telecommunication networks with the help of customers’ mobile devices;
        </p>
        <p>“IO” means a mutually agreed insertion order, which may specify terms of Campaigns;</p>
        <p>
          “Mobile Network Resources” means the websites, mobile applications, mobile content, and/or other promotional
          platforms and/or software that is accessible via mobile telecommunication networks and customers’ mobile
          devices, which are not owned, operated, or controlled by Company, but on which Company has a contractual right
          to serve Ads and Creatives;
        </p>
        <p>
          “Native Ad Platform” means a unique software, which is the exclusive property of Company and is used to
          accommodate Advertising Campaign(s) on third party Mobile Network Resources;
        </p>
        <p>
          “Product” means proprietary software applications, websites, or any other software, information, content,
          brands, trademarks or other materials developed and/or owned by Advertiser that are sold, streamed,
          transmitted, are available for download or are otherwise made available to any consumers, customers, or other
          end users via mobile telecommunication networks with the help of customers’ mobile devices;
        </p>
        <p>
          “Publisher” means the entity, which allows its Mobile Network Resources and/or other traffic sources to
          include Creative and to permit the traffic between the Publisher and the programs pursuant to this
          Advertiser’s License Agreement.
        </p>
        <p>
          “Qualified Event” means an affirmative action (e.g., impressions, clicks, or other desired actions) of an
          Advertiser’s customer, agreed upon by Advertiser and Company according to an Internet-based advertising model
          chosen via Native Ad Platform;
        </p>
        <p>
          “Qualified Event Price” means the price that the Advertiser agrees to pay Company for 1 (One) completed
          Qualified Event;
        </p>
        <p>“Tracking link” means link, which Advertiser provides for Advertising campaign;</p>
        <p>
          “User’s account” means provided by Company online point of interaction through which Advertiser may use the
          Native Ad Platform, manage Advertising Campaign(s).
        </p>
        <p>2. Company’s Services to Advertiser</p>
        <p>
          2.1. Advertiser may use Native Ad Platform to advertise Products. Company hereby provides Advertiser the
          ability to i) upload files with Ads conforming to the technical requirements of the Native Ad Platform; ii)
          set up the Qualified Event of each Advertising Campaign; iii) set up the Qualified Event Price of each
          Advertising Campaign; iv) monitor Advertising campaign(s); v) modify the acquirer requirements of Advertising
          Campaign(s), Qualified Event and Qualified Event Price; vi) observe the information about available Publishers
          with different internet-based advertising models (such as CPA, CPI, CPC, CPL, CPM) and to determine which
          Publisher(s) Advertiser will be serviced by; vii) stop each Advertising Campaign upon at least twenty-four
          (24) hours prior written notice or email unless otherwise specified on the applicable IO(s); viii) use other
          technical abilities in accordance with the Native Ad Platform Technical descriptions and Tutorials.
        </p>
        <p>
          2.2. The abilities listed in Article 2.1 of this Agreement are provided through the User’s account or with the
          help of Company’s technical support, which is determined in Company’s sole discretion depending on the
          technical availabilities of the Advertiser.
        </p>
        <p>3. Company’s License to Advertiser</p>
        <p>
          3.1. Scope of Licence. In order to provide Advertiser with the Services, Hyper Audience grants to Advertiser a
          worldwide, revocable, non-exclusive, non-sublicensable and non-transferable license to use Native Ad Platform
          and Hyper Audience’s SDK.
        </p>
        <p>
          3.2. License Limitations. Advertiser will use Native Ad Platform and Hyper Audience's SDK only as provided by
          Company, without modification.
        </p>
        <p>
          3.3. Updates. Company reserves the right to update Native Ad Platform and Hyper Audience's SDK in its sole
          discretion, provides Advertiser with a new version or an update to the Native Ad Platform and Hyper Audience's
          SDK (“Update”), Advertiser shall promptly cease to use of the prior version of Native Ad Platform and Hyper
          Audience's SDK, and instead, shall incorporate and use such Update in connection with this Agreement.
        </p>
        <p>
          3.3. Ownership. All exclusive rights and ownership of the software ‘Native Ad Platform’ Hyper Audience’s SDK,
          Update(s), including but not limited to algorithms, source code, object code, specifications, visual
          interfaces and technical documentation, any database or other information used in ‘Native Ad Platform’
          software are and shall remain the sole and exclusive property of Hyper Audience.
        </p>
        <p>4. Provisions for the use of the Native Ad Platform.</p>
        <p>
          4.1. In order to use Native Ad Platform Advertiser confirms that he is a legal entity or self-employed person
          and provides Company with the valid content and valid profile information including but not limited to legal
          entity’s name, legal entity’s address, company registration ID, VAT and/or other tax ID, country of residence,
          duly authorized representative, duly authorized representative’s email, support email, and any other
          information, which Company may reasonably require.
        </p>
        <p>
          4.2. Advertiser is responsible for his own User’s account usage (e.g. login, authorization and authentication
          data, security tokens etc.) and activity and declares to keep this information confidential.
        </p>
        <p>
          4.3. Advertiser is responsible for maintaining the security of his own account and must immediately notify
          Company of any unauthorized uses of his account or any other breaches of security. Advertiser is responsible
          for preventing such unauthorized use, and agrees to accept all risks of unauthorized access to his own
          registration data and their own content. Advertiser will be liable for any damages of any kind incurred
          because of such unauthorized access.
        </p>
        <p>5. Insertion orders (IO)</p>
        <p>
          5.1. From time to time, the parties may execute IO(s) that will be accepted as set forth in Article 5.3. of
          this Agreement
        </p>
        <p>
          5.2. The IO(s) may specify: (i) the type(s) and amount(s) of Qualified Event, (ii) the price(s) for such
          Qualified Event, (iii) the maximum amount of money to be spent pursuant to the IO, (iv) the start and end
          dates of the Advertising Campaign, and (v) other items that may be included are, but are not limited to,
          reporting requirements, any special Ad delivery scheduling and/or Ad placement requirements, and
          specifications concerning ownership of data collected.
        </p>
        <p>
          5.3. Acceptance of the IO will be deemed the earlier of (i) written (which, unless otherwise specified, for
          the purposes of this Advertiser’s License Agreement, will include paper, fax, User’s account or e-mail
          communication) approval of the IO by Advertiser and Company, or (ii) the display of the first Ad impression or
          Qualified Event through the Native Ad Platform, unless otherwise agreed on the IO.
        </p>
        <p>5.4. Revisions to accepted IOs will be made in writing and acknowledged by the other party in writing.</p>
        <p>6. Payment Terms</p>
        <p>
          6.1. Advertiser shall pay Company for all the impressions, purchased through the Native Ad Platform during a
          calendar month, within 30 days of the month following the month of purchase.
        </p>
        <p>
          6.2. All reported numbers for the purposes of billing are based on Advertiser’s ad server reports or third
          party tracking partners. If there is a discrepancy of greater than ten per cent (10%) between Advertiser’s
          reports and the data of Company, the parties will work together in good faith in order to verify the relevant
          data and agree on a final report.
        </p>
        <p>
          6.3. All reported numbers for the purposes of billing do not include any taxes, bank fees, customs, duties,
          levies, and charges of any kind whatsoever that may be incurred in connection with the Company’s services to
          Advertiser under this Agreement. All such applicable taxes and fees shall be paid by the Advertiser as
          specified by Company in any invoice, and all payments by the Advertiser to Company shall be made without any
          deduction or withholding of amounts on the account of taxes and fees.
        </p>
        <p>
          6.4. All amounts under this Agreement will be invoiced in U.S. dollars and paid by wire transfer to an account
          to be designated by Company in the invoice unless otherwise agreed in writing by the parties hereto.
        </p>
        <p>
          6.5. PayPal method of payment is used only for payments less than 1000 USD. When PayPal method is used, in
          addition to the amount due Advertiser should pay Company the interest of 4 % of the payment.
        </p>
        <p>
          6.6. Company may choose not to issue an invoice if the amount due for the billing period is 100 USD or less.
          The outstanding amount will be included in the invoice Company issues for the subsequent billing period.
        </p>
        <p>
          6.7. For any delay in payment, Advertiser is liable also to pay a daily interest of 0,1% on the amount of past
          due payments upon receipt of a written request of Company, however without exceeding 25% of the outstanding
          amount.
        </p>
        <p>
          6.8. For the purposes of the payment terms described herein, the invoice is: (a) received by Advertiser if it
          is physically delivered to the addressee; (b) deemed to have been received to Advertiser if it is delivered at
          the email, provided by Advertiser.
        </p>
        <p>7. Advertising Campaign(s) Reporting</p>
        <p>
          7.1. In order to track Qualified Events Advertiser agrees to set up the conversion tracking with Native Ad
          Platform: implement the special transaction tracking computer code on the Product(s) or server side and
          provide Company with a Tracking link including all required macroses before the start of Advertising Campaign.
          If Advertiser uses third party tracking systems, he agrees to choose Company as a partner for all Advertising
          campaigns, which run through Native Ad Platform, and generate the relevant Tracking link for Company.
        </p>
        <p>
          7.2. Advertiser ensures that he will not knowingly modify, circumvent, impair, disable or otherwise interfere
          with Tracking link(s) or Tag(s), otherwise Advertiser has to pay Company under this Agreement and the
          applicable IO(s) is calculated as an average conversion value for the period of such prohibited termination.
        </p>
        <p>
          7.3. Company may suggest Advertiser to re-write Tracking link(s) and Tag(s) on the Product(s) in order to
          obtain the best value for Advertising Campaign(s).
        </p>
        <p>
          7.4. In order to obtain the best value for Advertising Campaign(s) Advertiser agrees to provide Company with
          Advertising Campaign(s) reports at least as often as weekly, either electronically or in writing, unless
          otherwise specified on the applicable IO. Reports will be broken down by day and summarized by creative
          execution, impressions, clicks, spend/cost, or other requested information.
        </p>
        <p>
          7.5. If Advertiser refuses to pay for some Qualified Events in case of fraud suspicion, he should provide the
          report with the with the reason and all the information (with all sub_id and etc.) about the Qualified Events,
          which were rejected by Advertiser, within 15 days after Advertiser obtained the Qualified Events, otherwise
          all Qualified Events are considered valid and Advertiser should pay for all of them.
        </p>
        <p>
          7.6. If Advertiser breaches the terms of Advertising Campaign’s termination, the remuneration, which
          Advertiser has to pay Company under this Agreement and the applicable IO(s) is calculated as an average
          conversion value for the period of such prohibited termination.
        </p>
        <p>8. Intellectual Property and Intellectual Property Rights</p>
        <p>8.1. Company Intellectual Property Rights:</p>
        <p>
          8.1.1. All exclusive rights and ownership of the software ‘Native Ad Platform’, including but not limited to
          algorithms, source code, object code, specifications, visual interfaces and technical documentation, any
          database or other information used in ‘Native Ad Platform’ software are and shall remain the sole and
          exclusive property of Company.
        </p>
        <p>
          8.1.2. Advertiser agrees that he shall not use Native Ad Platform for purposes beyond the scope hereof and he
          shall not, at any point in time, make or assert any claim whatsoever to any Intellectual Property Rights of
          Company, and shall not violate, misappropriate, or infringe any copyright, patent, design, trademark, trade
          secret, privacy or publicity rights, or any proprietary, Intellectual Property Rights or other legal right of
          Company. Advertiser further agrees that he shall not attempt to register at any point in time any Intellectual
          Property Rights or other similar rights that may amount to infringement or result in any other violation of
          the rights, title or interest of Company.
        </p>
        <p>8.2. Advertiser Intellectual Property Rights:</p>
        <p>
          8.2.1. All exclusive rights, title and interest to the promotional products are and shall remain the sole and
          exclusive property of Company. Advertiser grants no ownership hereunder to Company or any third party of any
          portion of the promotional products. All creatives provided are copyrighted materials and proprietary assets
          of their respective owners and should only be used for the specific advertiser and campaign designated in this
          Advertiser’s License Agreement.
        </p>
        <p>
          8.2.2. Company agrees that it shall not edit or modify the submitted Ads, creatives or other Advertiser’s
          content in any way without Advertiser’s approval.
        </p>
        <p>
          8.2.3. Advertiser hereby grants Company, and all Publishers inscribed in the Native Ad Platform and potential
          Publishers, the right to display and distribute Advertisers name, logo, trademarks, all Creative, links and
          other copyrighted materials that Advertiser provides to Company in order to promote Advertisers' participation
          in Native Ad Platform.
        </p>
        <p>9. Privacy</p>
        <p>
          9.1. Company will protect all information collected from Advertiser and Publisher during the use of the Native
          Ad Platform in accordance with the Company's Privacy Policy.
        </p>
        <p>
          9.2. Advertiser acknowledges and agrees that it is his responsibility to disclose to his customers and users
          his terms of the privacy practices and policies with respect to the personal data and personally identifiable
          information (“PII”) collected from such users and customers. The Advertiser’s privacy policy must comply with
          the applicable foreign, federal, state or local laws, rules, regulations and ordinances.
        </p>
        <p>10. Data.</p>
        <p>
          10.1. Company has the right to use and disclose data derived from Advertiser’s use of the Native Ad Platform
          including without limitation, Advertiser’s name, the Ad(s), the landing page destination URL, Ad(s) sizes,
          impressions, clicks, conversions and etc., for the purpose of (i) performing its obligations under this
          Agreement; (ii) operating, testing, maintaining and enhancing the Native Ad Platform; (iii) passing this
          information to participants in the Native Ad Platform auctions to help facilitate and optimize such
          participation; (vi) if required by court order, or law, or required or requested by any governmental agency.
        </p>
        <p>11. Warranties and Representations</p>
        <p>
          11.1 Company warrants that: (i) the Native Ad Platform belongs to Company under the property right; (ii)
          Company does not infringe the intellectual property rights of any third party.
        </p>
        <p>
          11.2. Company does not warrant the results of use of the Native Ad Platform, including whether Advertiser will
          earn any particular amounts (or any amounts at all), and Advertiser assumes all risk and responsibility with
          respect thereto. Advertiser acknowledges and agrees that revenue from the Native Ad Platform varies based on
          factors that may not be within Company's control.
        </p>
        <p>
          11.3. Advertiser warrants that: (i) all Advertiser’s Ad(s) or any Advertiser’s website(s) linked to from the
          Ads, all Advertiser’s Mobile Application(s) or any other software, all Advertiser’s content, brand(s),
          trademark(s) or other material(s) belong to Advertiser under the property right or that Advertiser has a legal
          right of the usage and the display of this information for the purposes of this Agreement; (ii) all
          Advertiser’s Ad(s) or any Advertiser’s website(s) linked to from the Ads, all Advertiser’s Mobile
          Application(s) or any other software, all Advertiser’s content, brand(s), trademark(s) or other material(s)
          will comply with applicable foreign, federal, state or local laws, rules, regulations and ordinances; (iii)
          Advertiser will not use Native Ad Platform in unlawful way and will not violate any applicable law by
          advertising prohibited Ads and content including, but not limited to pornographic, hate, violence, racism,
          ethnically offensive, threatening, gambling, illegal drugs, misleading or deceptive ads, services or products,
          fraudulent or contain links to content of such nature; (vi) Advertiser will not forge, or otherwise manipulate
          any revenue or impression data and will provide all such revenue and impression data in the form and format
          requested by Company.
        </p>
        <p>
          11.4. Upon Advertiser’s violation his obligations under provision 11.3 of this Agreement, Company reserves the
          right to (i) terminate the Account and/or to remove Advertiser and/or any Advertiser’s Ad(s) or any
          Advertiser’s website(s) linked to from the Ads, all Advertiser’s Mobile Application(s) or any other software,
          all Advertiser’s content, brand(s), trademark(s) or other material(s) from the Native Ad Platform at any time
          in Company’s sole discretion; (ii) demand a penalty of 1000 U.S. dollars for every violation; (iii) request
          full compensation from Advertiser for losses caused; (iv) bring a case before a court if the penalty doesn't
          cover the Company’s loss; (iv) release the information relating to the Advertiser's identity and location to
          any third party if required.
        </p>
        <p>12. Limitation of Liability</p>
        <p>
          12.1. The Native Ad Platform is provided ‘as is’ and Company does not make any representations or warranties
          whatsoever concerning the use of the the Native Ad Platform. Company expressly disclaims any and all express,
          implied and statutory representations and warranties, including but not limited to, implied warranties of
          merchantability, fitness for a particular purpose, error-free or uninterrupted operation and any warranties
          arising from usage of the Native Ad Platform.
        </p>
        <p>
          12.2. In no event will Company be liable to Advertiser or any third party (including, but not limited to, any
          customer) (i) for any lost profits or lost revenue, or for any indirect, incidental, special, punitive
          exemplary or consequential damages arising out of or in connection with the Native Ad Platform or otherwise
          with respect to this Agreement; (ii) for indirect or consequential damages and costs incurred by the
          Advertiser for any reason whatsoever; (iii) for defects in the service, interruptions in the accessibility to
          the service, infringements on data or loss of data on the information handling system, defects in the security
          system or viruses or other harmful software components in Company service or for any damage caused by viruses
          or components to the service, the Advertiser’s software and/or the Advertiser's website (iv) for any error in
          the implementation of the links on the Advertisers' website or for the specified function of the links.
        </p>
        <p>13. Confidentiality</p>
        <p>
          13.1. Regarding the topic of confidential information, both Parties agree to exercise an equivalent degree of
          care in protecting the confidentiality of Confidential Information as that which it uses to protect its own
          information of like sensitivity and importance.
        </p>
        <p>Which can be summarized as:</p>
        <p>
          1. To take proper an all reasonable measures to ensure the confidentiality of such Confidential Information;
        </p>
        <p>2. To use Confidential Information only for the Proper Use;</p>
        <p>
          3. To permit access to such Confidential Information only to such of its employees (including employees of
          affiliated companies controlled by the Recipient) and to identified consultants or outside advisors on a
          need‐to‐know basis. In the case of identified consultants or outside advisors and upon request of Discloser,
          Recipient shall obtain a written acknowledgement of this Agreement and a commitment to be bound by its terms
          as though the consultants or outside advisor were a party hereto;
        </p>
        <p>
          4. Not use the Confidential Information in the design or manufacture of its products or in the design of its
          processes or in any other manner without the prior written consent of Discloser; The use of information
          relevant to campaigns or with any other commercial interest may be used in the context of the Company service
          in order to stimulate commercial transactions.
        </p>
        <p>
          13.2. The Advertiser hereby agrees that Company may provide all information that the Advertiser displays in
          the Company platform to its Publishers and other commercial partners. Furthermore, Company may use data or
          statistics obtained by campaigns on Advertisers websites for all purposes like data studies, trend analysis,
          commercial presentations and etc.
        </p>
        <p>14. Term and Termination</p>
        <p>
          14.1. The Advertiser is entitled to terminate this Agreement upon 20 business days advance notice in written
          form (Email, Standard Mail or any other written form). The Advertiser will delete all further reference to
          Native Ad Platform and it's services and agrees to compensate Company for all outstanding results or campaign
          performance or any future booked campaigns to the full amount within days after termination
        </p>
        <p>
          14.2. Company is entitled to terminate this Agreement or temporary halt the Agreement immediately for the
          entire Company service or parts of it in case of:
        </p>
        <p>1. Fraud or any illegal activity in any way by the Advertiser;</p>
        <p>2. The Advertiser has not booked any results or running campaigns for 6 months;</p>
        <p>3. The content or context of the Advertiser is no longer appropriate.</p>
        <p>
          14.3. Company will notify Advertiser by email in case his account will be terminated or put on temporary halt,
          in this situation the Advertiser is required to take all reference and running campaigns directly of his Site
          and agrees to compensate Affiliate for all outstanding results or campaign performance or any future booked
          campaigns to the full amount within days after termination.
        </p>
        <p>14.4. This Agreement expires immediately on termination.</p>
        <p>15. Indemnification</p>
        <p>
          15.1. Each party shall indemnify, defend, and hold harmless the other and its affiliates, officers, agents,
          and employees, from all claims, suits, actions, demands, damages, liabilities, expenses (including reasonable
          fees and disbursements of counsel), judgments, settlements and penalties of every kind to the extent resulting
          from, arising out of, or incurred in connection with (a) any breach by such party of any representation,
          warranty, covenant, agreement or other obligation contained herein; and/or (b) the negligent, intentionally
          wrongful or illegal acts or omissions of such party,its employees, agents, subcontractors or other
          representatives and/or (c) violations of any federal, state, local and/or international laws, rules and/or
          regulations to which such party is subject.
        </p>
        <p>
          15.2. The indemnified party(s) will promptly notify the indemnifying party of all claims of which it becomes
          aware (provided that a failure or delay in providing such notice will not relieve the indemnifying party’s
          obligations except to the extent such party is prejudiced by such failure or delay), and will: (i) provide
          reasonable cooperation to the indemnifying party at the indemnifying party’s expense in connection with the
          defense or settlement of all claims; and (ii) be entitled to participate at its own expense in the defense of
          all claims. The indemnified party(s) agrees that the indemnifying party will have sole and exclusive control
          over the defense and settlement of all claims; provided, however, the indemnifying party will not acquiesce to
          any judgment or enter into any settlement, either of which imposes any obligation or liability on an
          indemnified party(s) without its prior written consent.
        </p>
        <p>16. Assignment of this Agreement</p>
        <p>
          16.1 The Advertiser may not assign or pledge his rights or obligations under this Agreement in whole or in
          part to any third party without the prior written consent of Company.
        </p>
        <p>17. Severability</p>
        <p>
          17.1 If any provision of this Agreement is found by a proper authority to be unenforceable or invalid, such
          unenforceability or invalidity shall not affect the other provisions of this Agreement and the unenforceable
          or invalid provision shall be construed to be amended in order to avoid such enforceability or invalidity
          while preserving as closely as possible the intent of the Parties.
        </p>
        <p>18. Governing law</p>
        <p>
          18.1 This Agreement shall be construed and enforced in accordance with the laws of Cyprus. All disputes
          arising from this Agreement shall be finally settled by the competent Courts in Nicosia.
        </p>
        <p>19. Miscellaneous</p>
        <p>
          19.1. Company reserves the right to amend this Agreement, modify, amend, change Native Ad Platform Services at
          any time, and it is your responsibility to review this Agreement for any changes.
        </p>
        <p>
          When Company makes changes to this Agreement, the ‘last updated’ date at the top of this Agreement will be
          revised.
        </p>
        <p>
          19.2. You continue use Native Ad Platform after any changes or revisions to this Agreement will signify the
          assent to and acceptance of the revised Agreement’ conditions.
        </p>
        <p>
          19.3. This Agreement contains the entire agreement of the parties concerning the subject matter hereof and
          supersedes all existing agreements and all other oral, written or other communication between the parties
          concerning its subject matter.
        </p>
        <p>
          19.4 You warrant and represent at all times that You have full power and authority to enter into this
          Agreement and to carry out the provisions hereof.
        </p>
        <p>
          19.5 If you are entering into this Agreement on behalf of a company or other organization, you hereby warrant
          and represent that:
        </p>
        <p>1. You are authorized to enter into this Agreement on behalf of such company or other organization;</p>
        <p>2. it is duly organized and validly existing and in good standing under the laws of its incorporation;</p>
        <p>
          3. it has full corporate power and authority to enter into this Agreement and to carry out the provisions
          hereof;
        </p>
        <p>
          4. it is duly authorized to execute and deliver this Agreement and duly authorized to perform its obligations
          and exercise its rights hereunder;
        </p>
        <p>
          5. the execution, delivery and performance of this Agreement does not conflict with any agreement, instrument
          or understanding, oral or written, to which it is a party or by which it may be bound, nor violate any law or
          regulation of any court, governmental body or administrative or other agency having jurisdiction over it.
        </p>
        <p>
          <strong>MAELICO LTD</strong>
          <br />
          <strong>Reg No:</strong>HE 350887
          <br />
          <strong>Legal Address:</strong>41, Misiaouli &amp; Kavazoglou 2nd Floor, Office 201, 3016 Limassol, Cyprus
        </p>
        <div className="sticky-anchor" id="publisher"></div>
        <h2 className={styles.title}>Publisher Agreement</h2>
        <p className={styles.note}>Last updated: February 16, 2023</p>
        <p>
          Hyper Audience (‘Company’) is a corporation MAELICO LTD., existing under the laws of the Republic of Cyprus,
          under incorporation number HE 350887, welcomes You (“Publisher”) to use Hyper Audience’s online software
          located at website <a href="https://hyperaudience.com/">https://hyperaudience.com</a> (“Native Ad Platform”)
          in accordance with the terms of this Hyper Audience Publisher Agreement.
        </p>
        <p>
          Native Ad Platform provides Publisher opportunities to serve the third party's advertisements (“Ads”) or third
          party's mobile applications, content, software, brands, trademarks or any other information to End-users of
          Publisher’s mobile applications, mobile friendly websites, mobile content and/or promotional platforms and/or
          software that is accessible via mobile telecommunication networks and mobile devices (“Mobile Network
          Resources”) and receive payments from Company for Publisher’s services as described herein.
        </p>
        <p>
          This Publisher Agreement is an official proposal (“Offer”) issued by Company to enter into a services
          agreement between Publisher and the Company on the terms as described herein. This Offer, the applicable
          insertion order (“IO”) and the applicable selections made by Publisher in its personal User’s account (“User’s
          account”) shall be collectively referred to as “this Agreement”.
        </p>
        <p>
          By registering for User’s account on the Native Ad Platform you are deemed to have executed this Agreement
          electronically, effective on the date you enter your Account via your login and password.
        </p>
        <p>
          Your User’s account registration constitutes an acknowledgement that You are able to electronically receive,
          download, and print this Agreement, any amendments and other information from Company.
        </p>
        <p>
          By accessing and using any part of the Native Ad Platform described herein, You agree to and consent to be
          bound by all of the terms of this Agreement. If You do not agree to all of the terms of this Agreement, You
          may not access and/or use any part of the Native Ad Platform.
        </p>
        <p>1. Definitions</p>
        <p>
          1.1. For the purposes of this Hyper Audience Publisher Agreement, the following terms shall have the following
          meanings:
        </p>
        <p>“Ad” means any advertisement provided by the Advertiser or on behalf of Advertiser to Company;</p>
        <p>
          “Ad Tag” means Company’s and/or Publisher’s instruction(s) and Publisher's code(s) for the purpose of
          integration of advertising;
        </p>
        <p>
          “Advertiser” means the User of the Native Ad Platform and Company’s services who desires to distribute and
          advertise his goods and services through Campaigns on the Native Ad Platform;
        </p>
        <p>
          “Advertising Campaign” means a specific advertising program, which is available through Native Ad Platform,
          under which Ads should be delivered on Mobile Network Resources for the benefit of the Advertiser;
        </p>
        <p>
          “Creative” means promotional advertising materials in different graphical forms for display advertising
          (including but not limited to text advertising, text links, banners, buttons, videos, graphics and other
          similar online media) placed through the Native Ad Platform to Mobile Network Resources, which have direct
          hypertext links to the relevant Advertiser’s Product(s) and are accessible and "clickable" via mobile
          telecommunication networks with the help of customers’ mobile devices;
        </p>
        <p>“IO” means a mutually agreed insertion order, which may specify terms of Campaigns;</p>
        <p>
          “Mobile Network Resources” means mobile applications, mobile friendly websites, mobile content and/or other
          promotional platforms and/or software that is accessible via mobile telecommunication networks and End-users’
          mobile devices, which are not owned, operated, or controlled by Company, but on which Company has a
          contractual right to serve Ads and Creatives;
        </p>
        <p>
          “Native Ad Platform” means a unique software, which is the exclusive property of Company and is used to
          accommodate Advertising Campaign(s) on third party Mobile Network Resources;
        </p>
        <p>
          “Product” means proprietary software applications, websites, or any other software, information, content,
          brands, trademarks or other materials developed and/or owned by Advertiser that are sold, streamed,
          transmitted, are available for download or are otherwise made available to any consumers, customers, or other
          end users via mobile telecommunication networks with the help of customers’ mobile devices;
        </p>
        <p>
          “Publisher” means the entity, which allows its Mobile Network Resources to include Creative and to permit the
          traffic between the Publisher and the programs pursuant to this Agreement.
        </p>
        <p>
          “Qualified Event” means an affirmative action (e.g., impressions, clicks, or other desired actions) of an
          Advertiser’s customer, agreed upon by Advertiser and Company according to an Internet-based advertising model
          chosen via Native Ad Platform;
        </p>
        <p>
          “Qualified Event Price” means the price that the Advertiser agrees to pay Company for 1 (One) completed
          Qualified Event;
        </p>
        <p>
          “User’s account” means provided by Company online point of interaction through which Advertiser may use the
          Native Ad Platform, manage Advertising Campaign(s).
        </p>
        <p>2. Company License to Publisher</p>
        <p>
          2.1. Scope of Licence. In order to obtain Publisher’s services, Hyper Audience grants to Publisher a
          worldwide, free, revocable, non-exclusive, non-sublicensable and non-transferable license to use Native Ad
          Platform and Hyper Audience's SDK.
        </p>
        <p>
          2.2. License Limitations. Publisher will use Native Ad Platform and Hyper Audience's SDK only as provided by
          Hyper Audience, without modification.
        </p>
        <p>
          2.3. Updates. Company reserves the right to update Native Ad Platform and Hyper Audience's SDK in its sole
          discretion, provides Publisher a new version or an update to the Native Ad Platform and Hyper Audience's SDK
          (“Update”), Publisher shall promptly cease use of the prior version of Native Ad Platform and Hyper Audience's
          SDK, and instead, shall incorporate and use such Update in connection with this Agreement.
        </p>
        <p>
          2.3. Ownership. All exclusive rights and ownership of the software ‘Native Ad Platform’ Hyper Audience's SDK,
          Update(s), including but not limited to algorithms, source code, object code, specifications, visual
          interfaces and technical documentation, any database or other information used in ‘Native Ad Platform’
          software are and shall remain the sole and exclusive property of Hyper Audience.
        </p>
        <p>3. Provisions for the use of the Native Ad Platform.</p>
        <p>
          3.1. In order to use Native Ad Platform Publisher confirms that he is a legal entity or self-employed person
          and provides Company with the valid content and valid profile information including but not limited to legal
          entity’s name, legal entity’s address, company registration ID, VAT and/or other tax ID, country of residence,
          duly authorized representative, duly authorized representative’s email, support email, and any other
          information, which Company may reasonably require.
        </p>
        <p>
          3.2. Publisher is responsible for his own User’s account usage (e.g. login, authorization and authentication
          data, security tokens etc.) and activity and declares to keep this information confidential.
        </p>
        <p>
          3.3. Publisher is responsible for maintaining the security of his own account and must immediately notify
          Company of any unauthorized uses of his account or any other breaches of security. Publisher is responsible
          for preventing such unauthorized use, and agree to accept all risks of unauthorized access to his own
          registration data and their own content. Publisher will be liable for any damages of any kind incurred because
          of such unauthorized access.
        </p>
        <p>4. Insertion orders (IO)</p>
        <p>
          4.1. From time to time, the parties may execute IO(s) that will be accepted as set forth in Article 4.3. of
          this Agreement
        </p>
        <p>
          4.2. The IO(s) may specify: (i) the type(s) and amount(s) of Revenue Share, (ii) the price(s) for Qualified
          Event(s), (iii) the maximum amount of money to be spent pursuant to the IO, (iv) the start and end dates of
          the Advertising Campaign, and (v) other items that may be included are, but are not limited to, reporting
          requirements, any special Ad delivery scheduling and/or Ad placement requirements, and specifications
          concerning ownership of data collected.
        </p>
        <p>
          4.3. Acceptance of the IO will be deemed the earlier of (i) written (which, unless otherwise specified, for
          the purposes of this Agreement, will include paper, fax, User’s account or e-mail communication) approval of
          the IO by Publisher and Company, or (ii) the display by Publisher the Ads or the first Qualified Event through
          the Native Ad Platform, unless otherwise agreed on the IO.
        </p>
        <p>4.4. Revisions to accepted IOs will be made in writing and acknowledged by the other party in writing.</p>
        <p>5. Payment Terms</p>
        <p>
          5.1. Company will pay Publisher a portion of the revenues actually received by Company from Advertisers for
          advertisements displayed on Publisher’s Mobile Network Resources via Native Ad Platform as determined by this
          Agreement, provided that Publisher is not in breach with the terms of this Agreement and Publisher’s account
          balance is currently greater than 100 USD.
        </p>
        <p>
          5.2. Company will pay Publisher within thirty (30) days after the end of the calendar month in which the
          applicable revenues was received by Company. Publisher’s account with a balance of less than 100 USD will roll
          over to the next week, and will continue to roll over until the day 100 USD is reached.
        </p>
        <p>
          5.3. The amount of revenue payable to Publisher shall be based on the percentage of the Revenue Share or
          Qualified Event Price as set forth online in the User’s Account unless otherwise specified on the applicable
          IO(s).
        </p>
        <p>
          5.4. All reported numbers for the purposes of billing are based on Company’s ad server reports, and no other
          measurements or statistics of any kind will be accepted or have any effect. Company will enable Publisher to
          access such reports online, showing the bases for calculating the revenue of Publisher for each calendar
          month.
        </p>
        <p>
          5.5. If there is a discrepancy of greater than ten per cent (10%) between Company’s reports and the data of
          Publisher, the parties will work together in good faith in order to verify the relevant data and agree on a
          final report.
        </p>
        <p>6. Advertising Campaign(s) Reporting</p>
        <p>
          6.1. In order to track Qualified Events Publisher agrees to set up the conversion tracking with Native Ad
          Platform: implement the special transaction tracking computer code on Mobile Network Resource(s) or provide
          Company with the Ad Tag(s).
        </p>
        <p>
          6.2. Publisher ensure that he will not knowingly modify, circumvent, impair, disable or otherwise interfere
          with special transaction tracking computer code or Ad Tag(s), otherwise Publisher has to pay Company under
          this Agreement and the applicable IO(s) is calculated as an average conversion value for the period of such
          prohibited action.
        </p>
        <p>7. Intellectual Property and Intellectual Property Rights</p>
        <p>7.1. Company Intellectual Property Rights:</p>
        <p>
          7.1.1. All exclusive rights and ownership of the software ‘Native Ad Platform’, including but not limited to
          algorithms, source code, object code, specifications, visual interfaces and technical documentation, any
          database or other information used in ‘Native Ad Platform’ software are and shall remain the sole and
          exclusive property of Company.
        </p>
        <p>
          7.1.2. Publisher agrees that he shall not use Native Ad Platform for purposes beyond the scope hereof and he
          shall not, at any point in time, make or assert any claim whatsoever to any Intellectual Property Rights of
          Company, and shall not violate, misappropriate, or infringe any copyright, patent, design, trademark, trade
          secret, privacy or publicity rights, or any proprietary, Intellectual Property Rights or other legal right of
          Company. Publisher further agrees that he shall not attempt to register at any point in time any Intellectual
          Property Rights or other similar rights that may amount to infringement or result in any other violation of
          the rights, title or interest of Company.
        </p>
        <p>7.2. Publisher Intellectual Property Rights:</p>
        <p>
          7.2.1. All creatives provided are copyrighted materials and proprietary assets of their respective owners and
          should only be used for the specific advertiser and campaign designated in this Agreement.
        </p>
        <p>
          7.3. Publisher agrees that it shall not edit or modify the submitted Ads, creatives or other Advertiser’s
          content in any way without Company’s or Advertiser’s approval.
        </p>
        <p>8. Privacy</p>
        <p>
          8.1. Company will protect all information collected from Publisher during the use of the Native Ad Platform in
          accordance with the Company's Privacy Policy.
        </p>
        <p>
          8.2. Publisher acknowledges and agrees that it is his responsibility to disclose to his customers and users
          his terms of the privacy practices and policies with respect to the personal data and personally identifiable
          information (“PII”) collected from such users and customers. The Advertiser’s privacy policy must comply with
          the applicable foreign, federal, state or local laws, rules, regulations and ordinances.
        </p>
        <p>9. Data.</p>
        <p>
          9.1. Company has the right to use and disclose data derived from Publisher’s use of the Native Ad Platform
          including without limitation, Publisher’s name, the landing page destination and Mobile Network Resources URL,
          impressions, clicks, conversions and etc., for the purpose of (i) performing its obligations under this
          Agreement; (ii) operating, testing, maintaining and enhancing the Native Ad Platform; (iii) passing this
          information to participants in the Native Ad Platform auctions to help facilitate and optimize such
          participation; (vi) if required by court order, or law, or required or requested by any governmental agency.
        </p>
        <p>10. Warranties and Representations</p>
        <p>
          10.1 Company warrants that: (i) the Native Ad Platform belongs to Company under the property right; (ii)
          Company does not infringe the intellectual property rights of any third party.
        </p>
        <p>
          10.2. Company does not warrant the results of use of the Native Ad Platform, including whether Publisher will
          earn any particular amounts (or any amounts at all), and Publisher assumes all risk and responsibility with
          respect thereto. Publisher acknowledges and agrees that revenue from the Native Ad Platform varies based on
          factors that may not be within Company's control.
        </p>
        <p>
          10.3. Publisher warrants that: (i) all Publisher’s Mobile Network Resources or any Publisher’s website(s)
          linked to from the Mobile Network Resources, all Publisher’s Mobile Application(s) or any other software, all
          Publisher’s content, brand(s), trademark(s) or other material(s) belong to Publisher under the property right
          or that Publisher has a legal right of the usage and the display of this information for the purposes of this
          Agreement; (ii) all Publisher’s Mobile Network Resources or any Publisher’s website(s) linked to from the
          Mobile Network Resources, all Publisher’s Mobile Application(s) or any other software, all Publisher’s
          content, brand(s), trademark(s) or other material(s) will comply with applicable foreign, federal, state or
          local laws, rules, regulations and ordinances; (iii) Publisher will not use Native Ad Platform in unlawful way
          and will not violate any applicable law by advertising Ads through prohibited Mobile Network Resources and
          content including, but not limited to pornographic, hate, violence, racism, ethnically offensive, threatening,
          gambling, illegal drugs, misleading or deceptive ads, services or products, fraudulent or contain links to
          content of such nature; (vi) Publisher will not forge, or otherwise manipulate any revenue or impression data
          and will provide all such revenue and impression data in the form and format requested by Company.
        </p>
        <p>
          10.4. Upon Publisher’s violation his obligations under provision 10.3 of this Agreement, Company reserves the
          right to (i) terminate the Account and/or to remove Publisher and/or any linkes to Publisher’s Mobile Network
          Resources or website(s), all Publisher’s Mobile Application(s) or any other software, all Publisher’s content,
          brand(s), trademark(s) or other material(s) from the Native Ad Platform at any time in Company’s sole
          discretion; (ii) demand a penalty of 1000 U.S. dollars for every violation; (iii) request full compensation
          from Publisher for losses caused; (iv) bring a case before a court if the penalty doesn't cover the Company’s
          loss; (iv) release the information relating to the Publisher's identity and location to any third party if
          required.
        </p>
        <p>11. Limitation of Liability</p>
        <p>
          11.1. The Native Ad Platform is provided ‘as is’ and Company does not make any representations or warranties
          whatsoever concerning the use of the the Native Ad Platform. Company expressly disclaims any and all express,
          implied and statutory representations and warranties, including but not limited to, implied warranties of
          merchantability, fitness for a particular purpose, error-free or uninterrupted operation and any warranties
          arising from usage of the Native Ad Platform.
        </p>
        <p>
          11.2. In no event will Company be liable to Publisher or any third party (including, but not limited to, any
          End-user) (i) for any lost profits or lost revenue, or for any indirect, incidental, special, punitive
          exemplary or consequential damages arising out of or in connection with the Native Ad Platform or otherwise
          with respect to this Agreement; (ii) for indirect or consequential damages and costs incurred by the Publisher
          for any reason whatsoever; (iii) for defects in the service, interruptions in the accessibility to the
          service, infringements on data or loss of data on the information handling system, defects in the security
          system or viruses or other harmful software components in Company service or for any damage caused by viruses
          or components to the service, the Publisher software and/or the Publisher's website (iv) for any error in the
          implementation of the links on the Publisher's website or for the specified function of the links.
        </p>
        <p>12. Confidentiality</p>
        <p>
          12.1. Regarding the topic of confidential information, both Parties agree to exercise an equivalent degree of
          care in protecting the confidentiality of Confidential Information as that which it uses to protect its own
          information of like sensitivity and importance.
        </p>
        <p>Which can be summarized as:</p>
        <p>
          1. To take proper an all reasonable measures to ensure the confidentiality of such Confidential Information;
        </p>
        <p>2. To use Confidential Information only for the Proper Use;</p>
        <p>
          3. To permit access to such Confidential Information only to such of its employees (including employees of
          affiliated companies controlled by the Recipient) and to identified consultants or outside advisors on a
          need‐to‐know basis. In the case of identified consultants or outside advisors and upon request of Discloser,
          Recipient shall obtain a written acknowledgement of this Agreement and a commitment to be bound by its terms
          as though the consultants or outside advisor were a party hereto;
        </p>
        <p>
          4. Not use the Confidential Information in the design or manufacture of its products or in the design of its
          processes or in any other manner without the prior written consent of Discloser; The use of information
          relevant to campaigns or with any other commercial interest may be used in the context of the Company service
          in order to stimulate commercial transactions.
        </p>
        <p>
          12.2. Publisher hereby agrees that Company may provide all information that Publisher displays in the Company
          platform to its Advertiser and other commercial partners. Furthermore, Company may use data or statistics
          obtained by campaigns on Publisher’s Mobile Network Resources for all purposes like data studies, trend
          analysis, commercial presentations and etc.
        </p>
        <p>13. Term and Termination</p>
        <p>
          13.1. Publisher is entitled to terminate this Agreement upon 20 business days advance notice in written form
          (Email, Standard Mail or any other written form). Publisher will delete all further reference to Native Ad
          Platform and it's services and agrees to compensate Company for all outstanding results or campaign
          performance or any future booked campaigns to the full amount within days after termination.
        </p>
        <p>
          13.2. Company is entitled to terminate this Agreement or temporary halt the Agreement immediately for the
          entire Company service or parts of it in case of:
        </p>
        <p>1. Fraud or any illegal activity in any way by Publisher;</p>
        <p>2. Publisher has not booked any results or running campaigns for 6 months;</p>
        <p>
          13.3. Company will notify Publisher by email in case his account will be terminated or put on temporary halt,
          in this situation the Publisher is required to take all reference and running campaigns directly of his Site
          and agrees to compensate Affiliate for all outstanding results or campaign performance or any future booked
          campaigns to the full amount within days after termination.
        </p>
        <p>13.4. This Agreement expires immediately on termination.</p>
        <p>14. Indemnification</p>
        <p>
          14.1. Each party shall indemnify, defend, and hold harmless the other and its affiliates, officers, agents,
          and employees, from all claims, suits, actions, demands, damages, liabilities, expenses (including reasonable
          fees and disbursements of counsel), judgments, settlements and penalties of every kind to the extent resulting
          from, arising out of, or incurred in connection with (a) any breach by such party of any representation,
          warranty, covenant, agreement or other obligation contained herein; and/or (b) the negligent, intentionally
          wrongful or illegal acts or omissions of such party,its employees, agents, subcontractors or other
          representatives and/or (c) violations of any federal, state, local and/or international laws, rules and/or
          regulations to which such party is subject.
        </p>
        <p>
          14.2. The indemnified party(s) will promptly notify the indemnifying party of all claims of which it becomes
          aware (provided that a failure or delay in providing such notice will not relieve the indemnifying party’s
          obligations except to the extent such party is prejudiced by such failure or delay), and will: (i) provide
          reasonable cooperation to the indemnifying party at the indemnifying party’s expense in connection with the
          defense or settlement of all claims; and (ii) be entitled to participate at its own expense in the defense of
          all claims. The indemnified party(s) agrees that the indemnifying party will have sole and exclusive control
          over the defense and settlement of all claims; provided, however, the indemnifying party will not acquiesce to
          any judgment or enter into any settlement, either of which imposes any obligation or liability on an
          indemnified party(s) without its prior written consent.
        </p>
        <p>15. Assignment of this Agreement</p>
        <p>
          15.1. Publisher may not assign or pledge his rights or obligations under this Agreement in whole or in part to
          any third party without the prior written consent of Company.
        </p>
        <p>16. Severability</p>
        <p>
          16.1. If any provision of this Agreement is found by a proper authority to be unenforceable or invalid, such
          unenforceability or invalidity shall not affect the other provisions of this Agreement and the unenforceable
          or invalid provision shall be construed to be amended in order to avoid such enforceability or invalidity
          while preserving as closely as possible the intent of the Parties.
        </p>
        <p>17. Governing law</p>
        <p>
          17.1 This Agreement shall be construed and enforced in accordance with the laws of Cyprus. All disputes
          arising from this Agreement shall be finally settled by the competent Courts in Nicosia.
        </p>
        <p>18. Miscellaneous</p>
        <p>
          18.1. Company reserves the right to amend this Agreement, modify, amend, change Native Ad Platform Services at
          any time, and it is your responsibility to review this Agreement for any changes.
        </p>
        <p>
          When Company makes changes to this Agreement, the ‘last updated’ date at the top of this Agreement will be
          revised.
        </p>
        <p>
          18.2. You continue use Native Ad Platform after any changes or revisions to this Agreement will signify the
          assent to and acceptance of the revised Agreement’ conditions.
        </p>
        <p>
          18.3. This Agreement contains the entire agreement of the parties concerning the subject matter hereof and
          supersedes all existing agreements and all other oral, written or other communication between the parties
          concerning its subject matter.
        </p>
        <p>
          18.4. You warrant and represent at all times that You have full power and authority to enter into this
          Agreement and to carry out the provisions hereof.
        </p>
        <p>
          18.5. If you are entering into this Agreement on behalf of a company or other organization, you hereby warrant
          and represent that:
        </p>
        <p>1. You are authorized to enter into this Agreement on behalf of such company or other organization;</p>
        <p>2. it is duly organized and validly existing and in good standing under the laws of its incorporation;</p>
        <p>
          3. it has full corporate power and authority to enter into this Agreement and to carry out the provisions
          hereof;
        </p>
        <p>
          4. it is duly authorized to execute and deliver this Agreement and duly authorized to perform its obligations
          and exercise its rights hereunder;
        </p>
        <p>
          5. the execution, delivery and performance of this Agreement does not conflict with any agreement, instrument
          or understanding, oral or written, to which it is a party or by which it may be bound, nor violate any law or
          regulation of any court, governmental body or administrative or other agency having jurisdiction over it.
        </p>
        <div>
          <b>MAELICO LTD</b>
          <br />
          <b>Reg No:</b>
          <span className="c7 c8"> HE 350887</span>
          <br />
          <b>Legal Address:</b>
          <span className="c7 c8"> 41, Misiaouli &amp; Kavazoglou 2nd Floor, Office 201, 3016 Limassol, Cyprus</span>
        </div>
      </div>
    </div>
  );
};
