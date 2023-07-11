import styles from "./layoutUser.module.scss"

const LayoutUser = ({ children }) => {
    return <div className={styles.LayoutUser}>{children}</div>
}

export default LayoutUser;