import { addUser } from "@/app/utils/add-delete-actions";
import styles from "./addUser.module.css";
import Image from "next/image";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} accessKey="" className={styles.form}>
        <div className={styles.columns}>
          <div className={styles.mainData}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src="/noavatar.png"
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

            <input type="text" placeholder="Username" name="username" />
            <select name="role">
              <option value="default">Select Role</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="client">Client</option>
              <option value="guest">Guest</option>
            </select>
            <select name="status">
              <option value="default">Select Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>
          <div className={styles.secondaryData}>
            <input type="text" placeholder="name" name="name" />
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="password" name="password" />
            <input type="text" placeholder="phone number" name="phone" />
            <input type="text" placeholder="address" name="address" />
            <textarea
              name="about"
              id="about"
              placeholder="Tell us about  yourself..."
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

export default AddUserPage;
