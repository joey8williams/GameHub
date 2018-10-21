import Nav from '../Nav/Nav';
import styles from './Header.scss';
import NavOrb from '../NavOrb/NavOrb';
import MenuRibbon from '../MenuRibbon/MenuRibbon';

const Header = (props) => (
    <div className={props.className}>
        <div className={styles.wrapper}>
            <div className={styles.gutter}></div>

            <NavOrb className={styles.orbPosition} />

            <MenuRibbon className={styles.menuRibbon} />
        </div>
    </div>
)
export default Header;