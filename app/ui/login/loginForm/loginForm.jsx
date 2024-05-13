"use client";

import { authenticate } from "@/app/utils/auth-actions";
import styles from "./loginForm.module.css";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

export const LoginForm = () => {
  const [err, setErr] = useState("");
  const handleLogin = async (formData) => {
    const data = await authenticate(formData);
    data?.error && setErr(data.error);
  };

  return (
    <form action={handleLogin} className={styles.form}>
      <h2>Welcome</h2>
      <input type="text" placeholder="Username" name="username" />
      <input type="text" placeholder="Password" name="password" />
      {err && (
        <span className={styles.errorString}>
          <BsInfoCircle size={20} />
          {err}
        </span>
      )}
      <button className={styles.button}>Login</button>
    </form>
  );
};
