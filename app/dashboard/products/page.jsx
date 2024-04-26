import Search from "@/app/ui/dashboard/search/search";
import styles from "./products.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProducts } from "@/app/utils/data";
import { deleteProduct } from "@/app/utils/actions";

const ProductsPage = async ({ searchParams }) => {
  const query = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const itemsPerPage = 12;

  const { count, products } = await fetchProducts(query, page, itemsPerPage);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="product" />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Arrived At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    className={styles.image}
                    src={product.image || "/noproduct.jpg"}
                    alt="product avatar"
                    width={40}
                    height={40}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.about}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttonsContainer}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default ProductsPage;
