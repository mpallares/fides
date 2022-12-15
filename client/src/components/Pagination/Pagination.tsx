import React from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  usersPerPage: number;
  totalUsers: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination = ({
  usersPerPage,
  totalUsers,
  paginate,
}: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className={styles.paginationContainer}>
      {pageNumbers.map((number) => (
        <li key={number} className={styles.pageNumber}>
          <button onClick={() => paginate(number)} className={styles.pageLink}>
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};
