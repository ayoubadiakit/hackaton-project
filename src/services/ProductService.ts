import axios from "axios";
import type { Product } from "../types/Product";

const API_URL = "http://localhost:3000/products";
export const productService = {
  getAllProduct: async (): Promise<Product[]> => {
    const res = await axios.get(API_URL);
    return res.data;
  },

  getProductById: async (id: number): Promise<Product> => {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  },

  searchByName: async (name: string): Promise<Product[]> => {
    const res = await axios.get(`${API_URL}?name_like=${name}`);
    return res.data;
  },

  create: async (product: Product): Promise<Product> => {
    const res = await axios.post(API_URL, product);
    return res.data;
  },

  update: async (product: Product): Promise<Product> => {
    const res = await axios.put(`${API_URL}/${product.id}`, product);
    return res.data;
  },

  remove: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
};
