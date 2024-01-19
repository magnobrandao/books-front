import api from "../api";

export type TBook = {
  data: Record<string, string>;
  id: string;
  name: string;
};

const getAll = async (page = 1, text = "Great"): Promise<TBook> => {
  try {
    const { data } = await api.get(`/books?text=${text}&?page=${page}&limit=8`);

    return data;
  } catch (error) {
    throw error;
  }
};

const findById = async (): Promise<any> => {};

const search = async (): Promise<any> => {};

export const BookService = {
  getAll,
  findById,
  search,
};
