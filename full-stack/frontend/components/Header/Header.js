import Nav from '../Nav/Nav';
import styles from './Header.scss';

const Header = () => (
    <div className={styles.wrapper}>
        <div className="bar">
            <a href="#">GameHub</a>
            <Nav />
        </div>

    </div>
)
export default Header;