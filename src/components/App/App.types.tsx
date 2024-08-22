export type Image = {
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

export type AppState = {
  images: Image[];
  loading: boolean;
  error: boolean;
  page: number;
  topic: string;
  modalIsOpen: boolean;
  selectedImage: Image | null;
};
