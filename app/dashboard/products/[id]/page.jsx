import { fetchSingleProduct } from "@/app/utils/data";
import styles from "./productInfo.module.css";
import Image from "next/image";

const ProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchSingleProduct(id);
  console.log(product);

  return (
    <div className={styles.container}>
      <form accessKey="" className={styles.form}>
        <div className={styles.general}>
          <div className={styles.innerContainer}>
            <div className={styles.productInfo}>
              <Image
                className={styles.image}
                src="/noavatar.png"
                alt="productImage"
                width={120}
                height={120}
              />
              <div className={styles.productText}>
                <span>{product.title}</span>
                <span>Stock: {product.stock}</span>
                <span>Price: ${product.price}</span>
                <span>Category: {product.category}</span>
              </div>
            </div>
          </div>
          <div className={styles.innerContainer}>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className={styles.imageInput}
              name="image"
            />
            <input type="text" placeholder="Set new title" name="title" />
            <input type="text" placeholder="Set new stock" name="stock" />
            <input type="text" placeholder="Set new price" name="price" />
            <input type="text" placeholder="Set new color" name="color" />
            <input type="text" placeholder="Set new size" name="size" />
            <select name="category" id="category">
              <option value="default">Select category</option>
              <option value="kitche">Kitchen</option>
              <option value="office">Office</option>
              <option value="phones">Phones</option>
              <option value="computers">Computers</option>
            </select>
            <button className={styles.button}>Save Changes</button>
          </div>
        </div>
        <div className={styles.secondary}>
          <div className={styles.innerContainer}>
            <textarea
              name="about"
              id="about"
              placeholder={product.about || "Product description..."}
              rows="20"
            />
          </div>
          <div className={styles.innerContainer}>POTENTIALY A GALLERY</div>
        </div>
      </form>
    </div>
  );
};

export default ProductPage;
