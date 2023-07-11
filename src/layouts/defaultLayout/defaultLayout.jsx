import styles from "./defaultLayout.module.scss";
import { Link, Outlet } from "react-router-dom";

const DefaultLayout = ({ children }) => {

    const links = [
        {
          id: 1,
          name: "Locations",
          value: "locations",
        },
        {
          id: 2,
          name: "About",
          value: "/about",
        },
        {
          id: 3,
          name: "Contacts",
          value: "/contacts",
        },
      ];

    return <>
    <div className={styles.navbar__section}>
        <img src="https://img.logoipsum.com/253.svg" alt="Logo" />
        <ul className={styles.navbar__list}>
            {links.map((link) => <li><Link to={link.value}>{link.name}</Link></li> )}
        </ul>
        
    </div>
    <Outlet />
    </>
}

export default DefaultLayout;