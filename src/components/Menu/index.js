import styles from './Menu.module.css';
import MenuLink from '../MenuLink';

function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">Início</MenuLink>
                <MenuLink to="/about-me">Sobre mim</MenuLink>
            </nav>
        </header>
    );
}

export default Menu;
