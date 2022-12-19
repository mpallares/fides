import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { useAppDispatch } from "../../redux/hooks";
import { updateUser } from "../../redux/userSlice";
import { User } from "../../utils/types";
import styles from "./UpdateForm.module.css";

interface UpdateFormProps {
  userId: string;
  setShowModal: (open: boolean) => void;
}

export const UpdateForm = ({ userId, setShowModal }: UpdateFormProps) => {
  const [user, setUser] = useState({
    createdAt: "",
    firstName: "",
    lastName: "",
    email: "",
    longDescription: "",
    company: "",
    address: "",
    phone: "",
    shortDescription: "",
    id: "",
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const result = await api.get(`/users/${userId}`);
        const data = result.data;
        setUser({
          //   ...user,
          createdAt: data.createdAt,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          longDescription: data.longDescription,
          shortDescription: data.shortDescription,
          company: data.company,
          address: data.address,
          phone: data.phone,
          id: data.id,
        });
      } catch (err) {
        console.log(err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (inputName: keyof typeof user, value: string) => {
    setUser({
      ...user,
      [inputName]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const updatedUser: User = {
      ...user,
    };
    dispatch(updateUser({ userId, updatedUser }));
    setShowModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Client</h1>
      <input
        className={styles.inputText}
        type="text"
        name="id"
        placeholder="id"
        onChange={(e) => handleChange("id", e.target.value)}
        value={user.id}
      />
      <input
        className={styles.inputText}
        type="text"
        name="createdAt"
        placeholder="Created At"
        onChange={(e) => handleChange("createdAt", e.target.value)}
        value={user.createdAt}
      />
      <input
        className={styles.inputText}
        type="text"
        name="company"
        placeholder="company"
        onChange={(e) => handleChange("company", e.target.value)}
        value={user.company}
      />
      <input
        className={styles.inputText}
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={(e) => handleChange("firstName", e.target.value)}
        value={user.firstName}
      />
      <input
        className={styles.inputText}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={(e) => handleChange("lastName", e.target.value)}
        value={user.lastName}
      />
      <input
        className={styles.inputText}
        type="text"
        name="address"
        placeholder="Address"
        onChange={(e) => handleChange("address", e.target.value)}
        value={user.address}
      />
      <input
        className={styles.inputText}
        type="text"
        name="email"
        placeholder="email"
        onChange={(e) => handleChange("email", e.target.value)}
        value={user.email}
      />
      <input
        className={styles.inputText}
        type="text"
        name="phone"
        placeholder="phone"
        onChange={(e) => handleChange("phone", e.target.value)}
        value={user.phone}
      />
      <textarea
        className={styles.inputText}
        name="shortDescription"
        placeholder="short description"
        onChange={(e) => handleChange("shortDescription", e.target.value)}
        value={user.shortDescription}
      ></textarea>
      <textarea
        className={styles.inputText}
        name="longDescription"
        placeholder="long description"
        onChange={(e) => handleChange("longDescription", e.target.value)}
        value={user.longDescription}
      ></textarea>
      <button className={styles.updateForm} type="submit">
        Edit
      </button>
    </form>
  );
};
