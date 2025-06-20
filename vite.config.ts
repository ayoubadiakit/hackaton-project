import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        product: path.resolve(__dirname, "src/pages/Product.tsx"),
        dashboard: path.resolve(__dirname, "src/pages/Dashboard.tsx"),
        detailProduct: path.resolve(__dirname, "src/pages/DetailProduct.tsx"),
        PageNotFound: path.resolve(__dirname, "src/pages/PageNotFound.tsx"),
      },
    },
  },
});
