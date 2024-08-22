import "./App.css";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { ImageModal } from "../ImageModal/ImageModal";
import { Loader } from "../Loader/Loader";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import { SearchBar } from "../SearchBar/SearchBar";
import { fetchImageWithSearch } from "../../searchImages-api";

import { useState } from "react";

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

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [topic, setTopic] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleSearch = async (topic: string) => {
    setPage(1);
    setTopic(topic);
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImageWithSearch(topic, 1);
      setImages(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    try {
      setLoading(true);
      const data = await fetchImageWithSearch(topic, nextPage);
      setImages((prevImages) => [...prevImages, ...data]);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <h1>Let`s find some images!</h1>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {error && (
        <ErrorMessage message="Something went wrong. Try to reload the page" />
      )}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
}

export default App;
