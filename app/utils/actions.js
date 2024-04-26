"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./dbUtils";
import { Product, User } from "./models";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const {
    image,
    username,
    name,
    email,
    password,
    phone,
    address,
    status,
    role,
    about,
  } = Object.fromEntries(formData);

  try {
    connectToDb();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
      status,
      nonessentials: {
        name: name,
        // image: image,
        phone: phone,
        address: address,
        about: about,
      },
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create new user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, price, image, stock, category, color, size, about } =
    Object.fromEntries(formData);

  try {
    connectToDb();
    const newProduct = new Product({
      title,
      price,
      //   image,
      stock,
      category,
      color,
      size,
      about,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create new product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user");
  }

  revalidatePath("/dashboard/users");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product");
  }

  revalidatePath("/dashboard/products");
};
