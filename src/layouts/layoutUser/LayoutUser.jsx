import styles from "./layoutUser.module.scss"; 
import { Link, Outlet } from "react-router-dom";

const LayoutUser = ({ children }) => {

    let user = {
        name: "utente",
        email: "utente@gmail.com",
        image__url: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
        logged: true,
        itinerary: [{
            name: "Greece",
            img: "https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_1280.jpg"
        },
        {
            name: "Finland",
            img: "https://cdn.pixabay.com/photo/2020/04/15/04/11/lake-5045059_1280.jpg"
        },
        {
            name: "Singapore",
            img: "https://cdn.pixabay.com/photo/2017/01/18/21/49/singapore-1990959_1280.jpg"
        },]

    }

    return <div>
                <div className={styles.layout__user}>
                {user.logged ? <div className={styles.sidebar__user}>
                    <img src={user.image__url} alt={user.name} />
                    <h2>{user.name}</h2>
                    <h4>{user.email}</h4>
                </div> : <Form />}
                <div className={styles.itinerary}>
                    {user.itinerary && user.itinerary.map((element) => <div>
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