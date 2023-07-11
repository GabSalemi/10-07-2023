import styles from "./locationscards.module.scss"
import { useNavigate, useParams } from "react-router-dom"

const LocationsCards = ({data}) => {

    const navigate = useNavigate()
    const params = useParams()

    const onHandleClick = (id) => navigate(`/locations/${id}`)
    

    return <div className={`${styles.location__card}`} onClick={() => onHandleClick(data.id)}>
        <h2>{data.name}</h2>
        <h3>{data.location}</h3>
        <img src={data.imageLocation} alt={data.name} />
    </div>
}

export default LocationsCards;