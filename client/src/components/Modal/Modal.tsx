import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  children: React.ReactNode;
}

export const Modal = ({ showModal, setShowModal, children }: ModalProps) => {
  return (
    <div>
      {showModal && (
        <div className={styles.modalContainer}>
          <div className={styles.containerButton}>
            <button
              className={styles.modalButton}
              onClick={() => setShowModal(false)}
            >
              X
            </button>
          </div>
          {children}
        </div>
      )}
    </div>
  );
};
