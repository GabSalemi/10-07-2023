import styles from "./navbar.module.scss";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {

    return <>
    <div className={styles.navbar__section}>
        <img src="https://img.logoipsum.com/253.svg" alt="Logo" />
        <ul className={styles.navbar__list}>
            <li><Link to={"/locations"}>Locations</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contacts"}>Contacts</Link></li>
        </ul>
        
    </div>
    <Outlet />
    </>
}

export default Navbar;