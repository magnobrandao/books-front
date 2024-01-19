import { TBook } from "../../types/book";
import api from "../api";

const getAll = async (page: number): Promise<TBook> => {
  try {
    const { data } = await api.get(`/books?page=${page}&limit=4`);

    return data;
  } catch (error) {
    throw error;
  }
};

const findById = async (): Promise<any> => {};

const search = async (text = ""): Promise<TBook> => {
  try {
    const { data } = await api.get(
      `/books/search?text=${text}&?page=1&limit=4`
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export const BookService = {
  getAll,
  findById,
  search,
};
