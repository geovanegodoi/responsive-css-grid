// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  CardsSection,
  InfoSection,
  Navbar,
  Portifolio,
  Showcase,
} from 'src/components';
import styles from './app.module.css';

export function App() {
  return (
    <div className={styles['app']}>
      <Navbar />
      <Showcase />
      <CardsSection />
      <InfoSection />
      <Portifolio />
    </div>
  );
}

export default App;
