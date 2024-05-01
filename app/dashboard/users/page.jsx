import Search from "@/app/ui/dashboard/search/search";
import styles from "./users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/utils/data";
import { deleteUser } from "@/app/utils/add-delete-actions";

const UsersPage = async ({ searchParams }) => {
  const query = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const itemsPerPage = 12;

  const { count, users } = await fetchUsers(query, page, itemsPerPage);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="user" />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    className={styles.image}
                    src={user.nonessentials.image || "/noavatar.png"}
                    alt="user avatar"
                    width={40}
                    height={40}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <div className={styles.buttonsContainer}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
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

export default UsersPage;
