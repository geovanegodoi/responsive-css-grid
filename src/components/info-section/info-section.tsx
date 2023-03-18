import styles from './info-section.module.css';

/* eslint-disable-next-line */
export interface InfoSectionProps {}

export function InfoSection(props: InfoSectionProps) {
  return (
    <section className={styles.info}>
      <img src="https://image.ibb.co/j4Qz8x/pic1.jpg" alt="" />
      <div>
        <h2>Your Business On The Web</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias
          reiciendis deleniti possimus nemo non repellendus? Quae atque vero
          modi quidem! Autem cupiditate fugit doloribus ad amet, asperiores
          provident commodi.
        </p>
        <button className="button">Learn More</button>
      </div>
    </section>
  );
}

export default InfoSection;
