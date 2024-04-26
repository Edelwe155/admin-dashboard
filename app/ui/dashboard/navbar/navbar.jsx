"use client";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const pathParts = pathName.split("/");
  const navbarTitle = pathName.split("/").includes("add")
    ? `add ${pathParts[pathParts.length - 2]}`
    : `${pathName.split("/").pop()}`;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{navbarTitle}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input className={styles.input} type="text" placeholder="Search..." />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
