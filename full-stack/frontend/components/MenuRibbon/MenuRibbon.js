import styles from './MenuRibbon.scss'
import Nav from '../Nav/Nav';

const MenuRibbon = props => (
  <div className={props.className}>
    <div className={styles.wrapper}>
        <div className={styles.logo}>
            <h1 className={styles.brand}>P</h1>
        </div>
        <Nav className={styles.nav}/>
    </div>
  </div>
)
export default MenuRibbon;