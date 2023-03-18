import styles from './membership.module.css';

/* eslint-disable-next-line */
export interface MembershipProps {
  variant: 'regular' | 'pro';
}

const prices = {
  regular: 199,
  pro: 299,
};

export function Membership({ variant }: MembershipProps) {
  return (
    <div className={styles.membership}>
      <h3>{variant} membership</h3>
      <p>
        $ {prices[variant]} <span>/mo</span>
      </p>
      <button className="button">Buy Now</button>
    </div>
  );
}

export default Membership;
