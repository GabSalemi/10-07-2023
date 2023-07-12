import styles from "./input.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Input = ({type, setState}) => {

   
    
    const onHandleChange = (e) => {
        setState(e.target.value)

       /*  switch (type) {
            case "text":
                setUsername(e.target.value)
                break;
            case "email":
                setEmail(e.target.value)
                break;
            case "password":
                setPassword(e.target.value)
                break; }*/
        }
    



    return <div>
                {type === "textarea" 
            ? <textarea name="" id="" cols="30" rows="10"></textarea> 
            : <input type={type} onChange={(e) => onHandleChange(e)} />}
            </div>
    
    
}

export default Input;