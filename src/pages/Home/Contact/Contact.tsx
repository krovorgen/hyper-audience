import { FC, useState } from 'react';

import styles from './Contact.module.scss';
import { Input } from '../../../components/Input/Input.tsx';
import { Textarea } from '../../../components/Textarea/Textarea.tsx';
import { Button } from '../../../components/Button/Button.tsx';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import ReactFlagsSelect from 'react-flags-select';

type Props = {};

type FormData = {
  name: string;
  email: string;
  about: string;
  company: string;
  companyType: string;
  website: string;
  country: string;
};

export const Contact: FC<Props> = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [selected, setSelected] = useState('US');

  const onSubmit = (data: FormData) => {
    toast.success('Success');
    console.log(data);
    reset();
  };

  return (
    <div className={styles.root} id="contact">
      <div className="container">
        <h2 className={styles.title}>
          Fill this form and our <mark>real human</mark> manager will <mark>answer</mark> in 15 minutes
        </h2>
        <ul className={styles.items}>
          <li className={styles.item}>
            <span className={styles.counter}>1</span>
            <p className={styles.text}>Fill out the form</p>
          </li>
          <li className={styles.item}>
            <span className={styles.counter}>2</span>
            <p className={styles.text}>Book a time slot with manager</p>
          </li>
          <li className={styles.item}>
            <span className={styles.counter}>3</span>
            <p className={styles.text}>Attend a demo</p>
          </li>
        </ul>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.wrap}>
            <div className={styles.row}>
              <Input placeholder="Your name" {...register('name')} />
              <Input placeholder="Business Email" {...register('email')} />
            </div>
            <div className={styles.row}>
              <Input placeholder="Your company name" {...register('company')} />
              <Input placeholder="Type of company" {...register('companyType')} />
            </div>
            <div className={styles.row}>
              <Input placeholder="Your company's website or social media link" {...register('website')} />
            </div>
            <div className={styles.row}>
              <ReactFlagsSelect
                className={styles.flags}
                selected={selected}
                placeholder="Select country"
                onSelect={(code) => setSelected(code)}
              />
            </div>
            <div className={styles.row}>
              <Textarea placeholder="Anything else?" {...register('about')} />
            </div>
          </div>
          <Button type="submit" center variant="secondary">
            Contact us
          </Button>
        </form>
      </div>
    </div>
  );
};
