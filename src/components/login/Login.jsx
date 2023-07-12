import styles from "./login.module.scss";
import Form from "../form";

const Login = () => {

    return <div className={styles.login__div}>
        <Form type="login"/>
    </div>
}

export default Login;