import type { Category } from "../models/Category";
import type { Product } from "../models/Product";
import img1 from "../assets/img/banane.jpg";
import img2 from "../assets/img/mangue.jpg";
import img3 from "../assets/img/papaye.jpg";
import img4 from "../assets/img/citron.png";
import img5 from "../assets/img/tomate.jpg";
import img6 from "../assets/img/piment.jpg";
import img7 from "../assets/img/oignon.jpg";
import img8 from "../assets/img/gombo.jpg";
import img9 from "../assets/img/riz.jpg";
import img10 from "../assets/img/maïs.jpg";
import img11 from "../assets/img/fonio.jpg";
import img12 from "../assets/img/avoine.jpg";

export const categories: Category[] = [
  { id: 2, label: "Légumes", category: "légumes" },
  { id: 3, label: "Fruits", category: "Fruits" },
  { id: 4, label: "Céréales", category: "Céréales" },
  { id: 1, label: "Tous", category: null },
];

export const allCategories: Category[] = [
  {
    id: 1,
    label: "Tout",
    category: null,
  },
  {
    id: 2,
    label: "Légumes",
    category: "légumes",
  },
  {
    id: 3,
    label: "Fruits",
    category: "Fruits",
  },
  {
    id: 4,
    label: "Céréales",
    category: "Céréales",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Bananes",
    price: "$4.99 / kg",
    image: img1,
    category: "Fruits",
  },
  {
    id: 2,
    name: "Mangue",
    price: "$4.99 / kg",
    image: img2,
    category: "Fruits",
  },
  {
    id: 3,
    name: "Papaye",
    price: "$4.99 / kg",
    image: img3,
    category: "Fruits",
  },
  {
    id: 4,
    name: "Citron",
    price: "$4.99 / kg",
    image: img4,
    category: "Fruits",
  },
  {
    id: 5,
    name: "Tomate",
    price: "$4.99 / kg",
    image: img5,
    category: "légumes",
  },
  {
    id: 6,
    name: "Piment",
    price: "$4.99 / kg",
    image: img6,
    category: "légumes",
  },
  {
    id: 7,
    name: "Oignon",
    price: "$4.99 / kg",
    image: img7,
    category: "légumes",
  },
  {
    id: 8,
    name: "Gombo",
    price: "$4.99 / kg",
    image: img8,
    category: "légumes",
  },
  {
    id: 9,
    name: "Riz",
    price: "$4.99 / kg",
    image: img9,
    category: "Céréales",
  },
  {
    id: 10,
    name: "Maïs",
    price: "$4.99 / kg",
    image: img10,
    category: "Céréales",
  },
  {
    id: 11,
    name: "Fonio",
    price: "$4.99 / kg",
    image: img11,
    category: "Céréales",
  },
  {
    id: 12,
    name: "Avoine",
    price: "$4.99 / kg",
    image: img12,
    category: "Céréales",
  },
];