"use client";

import styles from "./pagination.module.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count, itemsPerPage }) => {
  const { replace } = useRouter();

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);

  const hasPrev = itemsPerPage * (parseInt(page) - 1) > 0;
  const hasNext = itemsPerPage * (parseInt(page) - 1) + itemsPerPage < count;

  const handleChangePage = (buttonType) => {
    buttonType === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);

    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        <SlArrowLeft color="white" size={20} />
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        <SlArrowRight color="white" size={20} />
      </button>
    </div>
  );
};

export default Pagination;
