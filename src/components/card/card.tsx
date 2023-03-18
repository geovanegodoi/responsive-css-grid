import styles from './card.module.css';

/* eslint-disable-next-line */
export interface CardProps {
  variant: 'analytics' | 'marketing' | 'development' | 'support';
}

const icons = {
  analytics: 'fas fa-chart-pie fa-4x',
  marketing: 'fas fa-globe fa-4x',
  development: 'fas fa-cog fa-4x',
  support: 'fas fa-users fa-4x',
};

export function Card({ variant }: CardProps) {
  return (
    <div className={styles.card}>
      <i className={icons[variant]}></i>
      <h3>{variant}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
        expedita?
      </p>
    </div>
  );
}

export default Card;
