import React from "react";
import { User } from "../../utils/types";
import { Button } from "../Button/Button";
import styles from "./Table.module.css";

export interface TableProps {
  users?: User[];
  onViewItemClick: (userId: string) => void;
  onDeleteItemClick: (userId: string) => void;
  onUpdateItemClick: (userId: string) => void;
  columns: string[];
  data: User[];
}

export const Table = ({
  columns,
  data,
  onViewItemClick,
  onDeleteItemClick,
  onUpdateItemClick,
}: TableProps) => {
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
          {data?.map((user: any) => {
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
