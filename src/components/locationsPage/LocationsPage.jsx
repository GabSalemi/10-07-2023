import styles from "./locationsPage.module.scss"
import LocationCards from "../locationsCards";
import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { roomList } from "../../mocks/roomlist";

const LocationsPage = () => {
    const [locations, setLocations] = useState(roomList)
    
    

    return <div className={styles.location__page}>
        {locations.map((room, id) => <LocationCards data={room} />)}
    </div>
}

export default LocationsPage;