import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

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

export const fetchImageWithSearch = async (
  image: string,
  page: number = 1
): Promise<Image[]> => {
  const response = await axios.get("/search/photos", {
    headers: {
      Authorization: `Client-ID _h0kEIZPGvdzLdUN5hcnliNvN3PwZMrmEJzZTyptuBg`,
    },
    params: {
      query: image,
      per_page: 10,
      page,
    },
  });
  return response.data.results;
};
