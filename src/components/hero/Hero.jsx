import { Outlet } from "react-router-dom";
import styles from "./hero.module.scss"
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Hero = () => {

    console.log(useLocation())
    

    return <div className={styles.hero__section}>{
        useLocation !== "/" ?  <Outlet /> : <div><h1>Hero</h1><Outlet /></div>
    }
    </div>
}

export default Hero;