import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../App/App.types";
Modal.setAppElement("#root");

type ImageModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
};

export const ImageModal = ({
  isOpen,
  onRequestClose,
  image,
}: ImageModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      overlayClassName={css.modalOverlay}
      className={css.modalContent}
    >
      {image && (
        <div className={css.imageContainer}>
          <img
            src={image.urls.full}
            alt={image.description}
            className={css.imageModal}
          />
          <div className={css.imageInfo}>
            <p>{image.user.name}</p>
            <p>"{image.description || "No description available"}""</p>
            <p>Likes: {image.likes}</p>
          </div>
        </div>
      )}
    </Modal>
  );
};
