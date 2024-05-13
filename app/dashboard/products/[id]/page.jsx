import { fetchSingleProduct } from "@/app/utils/data";
import styles from "./productInfo.module.css";
import Image from "next/image";
import { updateProduct } from "@/app/utils/add-delete-actions";
import { NamedTextInput } from "@/app/ui/inputs/namedTextInput/namedTextInput";

const ProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchSingleProduct(id);

  return (
    <div className={styles.container}>
      <form action={updateProduct} accessKey="" className={styles.form}>
        <input type="hidden" name="id" value={product.id} />
        <div className={styles.general}>
          <div className={styles.innerContainer}>
            <div className={styles.productInfo}>
              <Image
                className={styles.image}
                src={product.image || "/noproduct.jpg"}
                alt="productImage"
                width={120}
                height={120}
              />
              <div className={styles.productText}>
                <span>{product.title}</span>
                <span>Stock: {product.stock}</span>
                <span>Price: ${product.price}</span>
                <span>Color: {product.color}</span>
                <span>Dimensions: {product.size}</span>
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
            <NamedTextInput name="title" />
            <NamedTextInput name="stock" />
            <NamedTextInput name="price" />
            <NamedTextInput name="color" />
            <NamedTextInput name="size" />
            <select name="category" defaultValue={product.category}>
              <option value="default">Select category</option>
              <option value="kitchen">Kitchen</option>
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
