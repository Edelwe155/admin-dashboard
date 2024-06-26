import { fetchSingleUser } from "@/app/utils/data";
import styles from "./userInfo.module.css";
import Image from "next/image";
import { updateUser } from "@/app/utils/add-delete-actions";
import { NamedTextInput } from "@/app/ui/inputs/namedTextInput/namedTextInput";

const UserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchSingleUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.general}>
        <div className={styles.innerContainer}>
          <div className={styles.userInfo}>
            <Image
              className={styles.image}
              src={user.nonessentials.image || "/noavatar.png"}
              alt="userImage"
              width={120}
              height={120}
            />
            <div className={styles.userText}>
              <span>{user.username}</span>
              <span>{user.role}</span>
              <span>{user.status}</span>
              <span>Online/Offline</span>
            </div>
          </div>
        </div>
        <form
          action={updateUser}
          accessKey=""
          className={styles.innerContainer}
        >
          <input type="hidden" name="id" value={user.id} />
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className={styles.imageInput}
            name="image"
          />
          <input type="text" placeholder="Set new username" name="username" />
          <select name="role" defaultValue={user.role}>
            <option value="default">Select Role</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="client">Client</option>
            <option value="guest">Guest</option>
          </select>
          <button className={styles.button}>Save Changes</button>
        </form>
        <div className={styles.innerContainer}>
          <input type="text" placeholder="reason" name="reason" />
          <button className={`${styles.button} ${styles.attention}`}>
            Block user
          </button>
        </div>
      </div>

      <div className={styles.secondary}>
        <div className={styles.innerContainer}>
          <NamedTextInput
            placeholder={user.nonessentials.name || "name"}
            name="name"
            disabled
          />
          <NamedTextInput
            placeholder={user.email || "email"}
            name="email"
            disabled
          />
          <NamedTextInput
            placeholder={user.password || "password"}
            name="password"
            disabled
          />
          <NamedTextInput
            placeholder={user.nonessentials.phone || "phone number"}
            name="phone number"
            disabled
          />
          <NamedTextInput
            placeholder={user.nonessentials.address || "address"}
            name="address"
            disabled
          />
          <textarea
            name="desc"
            id="desc"
            placeholder={
              user.nonessentials.about || "Tell us about yourself..."
            }
            rows="14"
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
