import styles from "./defaultLayout.module.scss";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const DefaultLayout = ({ children }) => {

  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("auth")));
  }, []);

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
        {
          id: 4,
          name: "👤",
          value: "/login",
        }
      ];

    return <>
    <div className={styles.navbar__section}>
        <img src="https://img.logoipsum.com/253.svg" alt="Logo" />
        <ul className={styles.navbar__list}>
            {links.map((link) => <li key={link.id}><Link to={link.value}>{link.name}</Link></li> )}
        </ul>
    </div>
    <Outlet />
    </>
}

export default DefaultLayout;