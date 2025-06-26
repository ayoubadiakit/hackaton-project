import axios from "axios";
import type { Category } from "../types/Category";

const API_URL = "http://localhost:3000/caterogies";

export const CategoryService = {
  getAllCategory: async (): Promise<Category[]> => {
    const res = await axios.get(API_URL);
    return res.data;
  },
  getById: async (id: number): Promise<Category> => {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  },
  create: async (category: Category): Promise<Category> => {
    const res = await axios.post(API_URL, category);
    return res.data;
  },
  update: async (category: Category): Promise<Category> => {
    const res = await axios.put(`${API_URL}/${category.id}`, category);
    return res.data;
  },
  remove: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
};
