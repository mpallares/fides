import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { Pagination } from "../../components/Pagination/Pagination";
import { Spinner } from "../../components/Spinner/Spinner";
import { Table } from "../../components/Table/Table";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addUsers } from "../../redux/userSlice";
import { getUsers } from "../../api/services/user";
import { Modal } from "../../components/Modal/Modal";
import { ModalContent } from "../../components/Modal/ModalContent";
import { Button } from "../../components/Button/Button";

export const Home = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.value);
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState("");
  const [userId, setUserId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const users = await getUsers();
      dispatch(addUsers(users));
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCreateItemClick = () => {
    setShowModal(true);
    setAction("Create");
  };

  const onViewItemClick = (userId: string) => {
    setUserId(userId);
    setShowModal(true);
    setAction("View");
  };

  const onDeleteItemClick = (userId: string) => {
    setUserId(userId);
    setShowModal(true);
    setAction("Delete");
  };

  const onUpdateItemClick = (userId: string) => {
    setUserId(userId);
    setShowModal(true);
    setAction("Edit");
  };

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
    <>
      <NavBar />
      {loading && <Spinner />}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalContent
          setShowModal={setShowModal}
          userId={userId}
          action={action}
        />
      </Modal>
      <div className={styles.optionsContainer}>
        <div className={styles.createButtonContainer}>
          <Button title="Create" onClick={() => onCreateItemClick()} />
        </div>
      </div>
      <Table
        columns={columns}
        data={currentUsers}
        onDeleteItemClick={onDeleteItemClick}
        onViewItemClick={onViewItemClick}
        onUpdateItemClick={onUpdateItemClick}
      />
      <Pagination
        paginate={paginate}
        usersPerPage={usersPerPage}
        totalUsers={users.length}
      />
    </>
  );
};
