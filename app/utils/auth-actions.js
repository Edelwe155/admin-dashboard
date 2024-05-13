"use server";

import { signIn } from "../auth-credentials";

export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.type?.includes("CredentialsSignin")) {
      return { error: "Wrong Credentials" };
    }
    throw err;
  }
};
