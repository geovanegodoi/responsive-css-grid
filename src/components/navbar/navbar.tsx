import styles from './navbar.module.css';

/* eslint-disable-next-line */
export interface NavbarProps {}

const options: string[] = ['home', 'about', 'services', 'contact'];

export function Navbar(props: NavbarProps) {
  return (
    <nav>
      {options.map((option) => (
        <div className={styles.nav_item}>{option}</div>
      ))}
    </nav>
  );
}

export default Navbar;
