import Nav from '../Nav/Nav';
import styles from './Header.scss';
import NavOrb from '../NavOrb/NavOrb';

const Header = () => (
    <div className={styles.wrapper}>
        <div className={styles.gutter}>

        </div>
        <div className={styles.menuRibbon}>
            <div className={styles.logo}>
                <a href="#">GameHub</a>
                <Nav />
            </div>
        </div>
        <NavOrb className={styles.orbPosition} />
    </div>
)
export default Header;