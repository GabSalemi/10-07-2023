import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./dashboard.scss"

export default function Dashboard() {
  const navigate = useNavigate();

  const [isLogged, setLogged] = useState(false);
  const [loggedUsername, setLoggedUsername] = useState("")
  const [loggedEmail, setLoggedEmail] = useState("")
  const [loggedItinerary, setLoggedItinerary] = useState("")


  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("auth")));
    setLoggedUsername(localStorage.getItem("username"));
    setLoggedEmail(localStorage.getItem("email"));
    setLoggedItinerary(JSON.parse(localStorage.getItem("itinerary")))
  }, []);

  return isLogged ? (
    <div className="Dashboard">
      <div className="title__div">
        <h1>Your Profile</h1>
        <Link to={"/"}><h3>Return to home</h3></Link>
      </div>
      <h2>{loggedUsername}</h2>
      <p>{loggedEmail}</p>
      <h2>Itineraies</h2>
      {loggedItinerary.map((element) => <div>
                        <img src={element.img} alt={element.name} />
                        <h4>{element.name}</h4>
                    </div>)}
    </div>
  ) : (
    navigate("/login")
  );
}