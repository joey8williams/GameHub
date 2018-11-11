import Nav from '../Nav/Nav';
import styles from './Header.scss';
import NavOrb from '../Nav/NavOrb/NavOrb';
import MenuRibbon from '../MenuRibbon/MenuRibbon';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onHashChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

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