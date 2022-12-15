import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { deleteUser } from "../../redux/userSlice";
import styles from "./DeleteForm.module.css";

interface DeleteFormProps {
  userId: string;
  setShowModal: (open: boolean) => void;
}

export const DeleteForm = ({ userId, setShowModal }: DeleteFormProps) => {
  const dispatch = useAppDispatch();

  const deleteUserForm = async (userId: string) => {
    // console.log("userId", userId);
    // const data = await deleteUser(userId);
    dispatch(deleteUser(userId));
    // await fetchClients();
    setShowModal(false);
  };
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    deleteUserForm(userId);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Delete Client</h1>
      <input
        className={styles.inputText}
        type="text"
        name="id"
        placeholder="id"
        value={userId}
      />
      <button type="submit">Delete</button>
    </form>
  );
};
