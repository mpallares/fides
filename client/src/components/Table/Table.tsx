import React from "react";
import { User } from "../../utils/types";
import { Button } from "../Button/Button";
// import { ClientListViewType } from "../../utils/types";
// import { Button } from "../Button/Button";
import styles from "./Table.module.css";

export interface TableProps {
  users?: User[];
  onViewItemClick: (userId: string) => void;
  onDeleteItemClick: (userId: string) => void;
  onUpdateItemClick: (userId: string) => void;
  //   columns: string[];
  //   data: ClientListViewType[];
  //   sorted?: { columnName: string; columnValue: string };
  //   onSort: (columnName: string, value: string) => void;
  //   onCreateItemClick: () => void;
  //   onViewItemClick: (click: string) => void;
  //   onUpdateItemClick: (click: string) => void;
  //   onDeleteItemClick: (click: string) => void;
}

export const Table = ({
  users,
  onViewItemClick,
  onDeleteItemClick,
  onUpdateItemClick,
}: //   columns,
//   data,
//   sorted,
//   onSort,
//   onViewItemClick,
//   onUpdateItemClick,
//   onDeleteItemClick,
TableProps) => {
  const columns = [
    "ID",
    "Created At",
    "Company",
    "Name",
    "Surname",
    "Email",
    "Actions",
  ];

  return (
    <div className={styles.container}>
      <table>
        <thead className={styles.header}>
          <tr className={styles.header}>
            {columns.map((column) => {
              return <th key={column}>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {users?.map((user: any) => {
            return (
              <tr key={user.id}>
                <td>{user?.id}</td>
                <td>{user?.createdAt}</td>
                <td>{user.company}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <Button
                    title="Edit"
                    onClick={() => onUpdateItemClick(user.id)}
                  />
                  <Button
                    title="View"
                    onClick={() => onViewItemClick(user.id)}
                  />
                  <Button
                    title="Delete"
                    onClick={() => onDeleteItemClick(user.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
