import React from "react";
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
  //   if (action === "Create") {
  //     return <CreateForm onSubmit={createClient} />;
  //   } else if (action === "Delete") {
  //     return (
  //       <DeleteForm
  //         clientId={activecClientId}
  //         onSubmit={() => deleteClient(activecClientId)}
  //       />
  //     );
  //   } else if (action === "Edit") {
  //     return <UpdateForm clientId={activecClientId} onSubmit={editClient} />;
  //   } else if (action === "View") {
  if (action === "Edit") {
    return <UpdateForm userId={userId} setShowModal={setShowModal} />;
  } else if (action === "Delete") {
    console.log("user id inside modal content", userId);
    return <DeleteForm setShowModal={setShowModal} userId={userId} />;
  } else if (action === "View") {
    return <UserDetails userId={userId} />;
  }
  return <div>hey</div>;
};
