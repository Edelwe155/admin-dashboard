import { authenticate } from "../utils/auth-actions";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <h2>Welcome</h2>
        <input type="text" placeholder="Username" name="username" />
        <input type="text" placeholder="Password" name="password" />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
