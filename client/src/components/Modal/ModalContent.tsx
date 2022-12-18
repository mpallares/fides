import React from "react";
import { CreateForm } from "../../views/CreateForm/CreateForm";
import { DeleteForm } from "../../views/DeleteForm/DeleteForm";
import { UpdateForm } from "../../views/UpdateForm/UpdateForm";
import { UserDetails } from "../UserDetails/UserDetails";

interface ModalContentProps {
  action: string;
  userId: string;
  setShowModal: (open: boolean) => void;
}

export const ModalContent = ({
  action,
  userId,
  setShowModal,
}: ModalContentProps) => {
  if (action === "Create") {
    return <CreateForm setShowModal={setShowModal} />;
  } else if (action === "Edit") {
    return <UpdateForm userId={userId} setShowModal={setShowModal} />;
  } else if (action === "Delete") {
    console.log("user id inside modal content", userId);
    return <DeleteForm setShowModal={setShowModal} userId={userId} />;
  } else if (action === "View") {
    return <UserDetails userId={userId} />;
  }
  return <div>hey</div>;
};
