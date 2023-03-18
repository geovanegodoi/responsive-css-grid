import Hero from '../hero/hero';
import Membership from '../membership/membership';
import styles from './showcase.module.css';

/* eslint-disable-next-line */
export interface ShowcaseProps {}

export function Showcase(props: ShowcaseProps) {
  return (
    <div className={styles['showcase']}>
      <Hero />
      <Membership variant="regular" />
      <Membership variant="pro" />
    </div>
  );
}

export default Showcase;
