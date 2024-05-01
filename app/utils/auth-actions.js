"use server";

import { signIn } from "../auth-credentials";

export const authenticate = async (FormData) => {
  const { username, password } = Object.fromEntries(FormData);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
