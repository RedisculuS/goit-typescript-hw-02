import css from "./ImageCard.module.css";
import { Image } from "../App/App.types";

type ImageCardProps = {
  image: Image;
  onImageClick: (image: Image) => void;
};

export const ImageCard = ({ image, onImageClick }: ImageCardProps) => {
  return (
    <div>
      <img
        className={css.imageCard}
        src={image.urls.small}
        alt={image.description}
        onClick={() => onImageClick(image)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};
