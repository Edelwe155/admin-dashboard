import { connectToDb } from "./dbUtils";
import { User, Product } from "./models";

export const fetchUsers = async (query, page, itemsPerPage) => {
  const regex = new RegExp(query, "i");

  try {
    connectToDb();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(itemsPerPage)
      .skip(itemsPerPage * (page - 1));
    return { users, count };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users");
  }
};

export const fetchSingleUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user");
  }
};

export const fetchProducts = async (query, page, itemsPerPage) => {
  const regex = new RegExp(query, "i");

  try {
    connectToDb();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(itemsPerPage)
      .skip(itemsPerPage * (page - 1));
    return { products, count };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products");
  }
};

export const fetchSingleProduct = async (id) => {
  try {
    connectToDb();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product");
  }
};
