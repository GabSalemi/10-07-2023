import styles from "./form.module.scss"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../input/Input"
import { auth } from "../../mocks/auth"

const Form = ({type}) => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const onHandleSubmit = (e) => {
        e.preventDefault();

        try {
            if (auth.email === email && auth.password === password ) {
                navigate("/dashboard");
                localStorage.setItem("auth", true)
                localStorage.setItem("username", auth.username)
                localStorage.setItem("email", auth.email)
                localStorage.setItem("itinerary", JSON.stringify(auth.itinerary))
                localStorage.setItem("userimg", auth.profileImg)
            }
            throw new Error("Credenziali non valide")
        } catch (error) {
            console.log(error)
        }
        
    }

    return <div>{type === "login" ? <div className={styles.login__form}>
            <label htmlFor="">Your Username</label>
            <Input type={"text"} setState={setUsername}/>
            <label htmlFor="">Your E-mail</label>
            <Input type={"email"} setState={setEmail}/>
            <label htmlFor="">Your password</label>
            <Input type={"password"} setState={setPassword}/>
            <input type="submit" onClick={(e) => onHandleSubmit(e)}/>
        </div> : <div className={styles.message__form}>
                <label htmlFor="">Your Name</label>
                <Input type={"text"}/>
                <label htmlFor="">Your E-mail</label>
                <Input type={"email"}/>
                <label htmlFor="">Your Message</label>
                <Input type={"textarea"}/>
            </div>}
            </div>
}

export default Form;