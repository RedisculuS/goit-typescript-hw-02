import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

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

type ImageGalleryProps = {
  images: Image[];
  onImageClick: (image: Image) => void;
};

export const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <ul className={css.imageCardBox}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};
