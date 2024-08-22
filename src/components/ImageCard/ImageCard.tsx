import css from "./ImageCard.module.css";

type Image = {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  description: string;
  user: {
    name: string;
  };
  likes: number;
};

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
