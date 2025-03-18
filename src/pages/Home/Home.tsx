import { Hero } from './Hero/Hero.tsx';
import { Contact } from './Contact/Contact.tsx';
import { Blockquote } from './Blockquote/Blockquote.tsx';
import { ClientsTypes } from './ClientsTypes/ClientsTypes.tsx';
import { Partners } from './Partners/Partners.tsx';
import { Solutions } from './Solutions/Solutions.tsx';
import { Advanced } from './Advanced/Advanced.tsx';

export const Home = () => {
  return (
    <>
      <Hero />
      <Advanced />
      <Solutions />
      <Blockquote />
      <ClientsTypes />
      <Partners />
      <Contact />
    </>
  );
};
