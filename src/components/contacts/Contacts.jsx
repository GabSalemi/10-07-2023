import styles from "./contacts.module.scss"
import Form from "../form";

const Contacts = () => {

    return <div className={styles.contacts__section}>
        <Form type={"message"}/>
    </div>
}

export default Contacts;