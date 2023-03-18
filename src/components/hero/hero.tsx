import styles from './hero.module.css';

/* eslint-disable-next-line */
export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <div className={styles.hero}>
      <h1>Your Web Presence</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam!
        Nihil quo minima nulla atque!
      </p>
      <button className="button">Read More</button>
    </div>
  );
}

export default Hero;
