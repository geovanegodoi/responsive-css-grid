import styles from './portifolio.module.css';

/* eslint-disable-next-line */
export interface PortifolioProps {}

const basePath = 'https://source.unsplash.com/random';
const images = [
  '200x200',
  '201x200',
  '202x200',
  '203x200',
  '204x200',
  '205x200',
  '206x200',
  '207x200',
  '208x200',
];

export function Portifolio(props: PortifolioProps) {
  return (
    <section className={styles.portfolio}>
      {images.map((image) => {
        const imagePath = `${basePath}/${image}`;
        return <img src={imagePath} alt="" />;
      })}
    </section>
  );
}

export default Portifolio;
