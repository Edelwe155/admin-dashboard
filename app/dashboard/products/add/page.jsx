import { addProduct } from "@/app/utils/add-delete-actions";
import styles from "./addProduct.module.css";
import Image from "next/image";
import { NamedTextInput } from "@/app/ui/inputs/namedTextInput/namedTextInput";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} accessKey="" className={styles.form}>
        <div className={styles.columns}>
          <div className={styles.mainData}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src="/noproduct.jpg"
                alt="userImage"
                width={120}
                height={120}
              />
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                className={styles.imageInput}
                name="image"
              />
            </div>

            <NamedTextInput name="title" />
            <select name="category" id="category">
              <option value="default">Select category</option>
              <option value="kitche">Kitchen</option>
              <option value="office">Office</option>
              <option value="phones">Phones</option>
              <option value="computers">Computers</option>
            </select>
          </div>
          <div className={styles.secondaryData}>
            <div className={styles.inputRow}>
              <NamedTextInput name="price" type="number" />
              <NamedTextInput name="stock" type="number" />
            </div>
            <div className={styles.inputRow}>
              <NamedTextInput name="color" />
              <NamedTextInput name="size" />
            </div>
            <textarea
              name="about"
              id="about"
              placeholder="Short product description..."
              rows="16"
            />
          </div>
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
