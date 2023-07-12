import styles from "./layoutUser.module.scss"; 
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "../../components/form";

const LayoutUser = ({ children }) => {
  

  const [isLogged, setLogged] = useState(false);
  const [loggedUsername, setLoggedUsername] = useState("")
  const [loggedEmail, setLoggedEmail] = useState("")
  const [loggedItinerary, setLoggedItinerary] = useState("")
  const [loggedUserImg, setLoggedUserImg] = useState("")


  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("auth")));
    setLoggedUsername(localStorage.getItem("username"));
    setLoggedEmail(localStorage.getItem("email"));
    setLoggedItinerary(JSON.parse(localStorage.getItem("itinerary")))
    setLoggedUserImg(localStorage.getItem("userimg")
        )
  }, []);

    return <div>
                <div className={styles.layout__user}>
                {isLogged === true ? <div className={styles.sidebar__user}>
                    <img src={loggedUserImg} alt={loggedUsername} />
                    <h2>{loggedUsername}</h2>
                    <h4>{loggedEmail}</h4>
                </div> : <span>Login to see your dashboard!</span>}
                <div className={styles.itinerary}>
                    {loggedItinerary && loggedItinerary.map((element) => <div>
                        <img src={element.img} alt={element.name} />
                        <h4>{element.name}</h4>
                    </div>)}
                </div>
                <div className={styles.buttons__div}>
                    <button><Link to={"/"}>Return to Home</Link></button>
                    <button><Link to={"/locations"}>Return to Locations</Link></button>
                </div>
                </div>
                {children}
            </div>
        
}

export default LayoutUser;