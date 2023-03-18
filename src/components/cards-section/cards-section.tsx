import { Card } from '../card/card';
import styles from './cards-section.module.css';

/* eslint-disable-next-line */
export interface CardsSectionProps {}

export function CardsSection(props: CardsSectionProps) {
  return (
    <div className={styles.cards_section}>
      <Card variant="analytics" />
      <Card variant="marketing" />
      <Card variant="development" />
      <Card variant="support" />
    </div>
  );
}

export default CardsSection;
