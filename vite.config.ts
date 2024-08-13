import { defineConfig } from "vite";
import path from "path";
import reactPlugin from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

const apiBaseURL = process.env.VITE_API_BASE_URL;
const itemsPerPage = process.env.VITE_ITEMS_PER_PAGE;
const librariesBaseURL = process.env.LIBRARIES_BASE_URL;
const librariesAPIKey = process.env.LIBRARIES_API_KEY;
const port = parseInt(process.env.PORT || "3000", 10);

if (!apiBaseURL || !librariesBaseURL || !librariesAPIKey || !itemsPerPage) {
  throw new Error(
    "Missing environment variables. Please check your .env file."
  );
}

export default defineConfig({
  plugins: [reactPlugin()],
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "src/shared"),
      "@home": path.resolve(__dirname, "src/home"),
      "@package": path.resolve(__dirname, "src/package"),
    },
  },
  server: {
    port,
    open: true,
    proxy: {
      [apiBaseURL]: {
        target: librariesBaseURL, // Replace with your API server
        changeOrigin: true,
        rewrite: (path) => {
          const url: URL | string = new URL(
            path,
            process.env.LIBRARIES_BASE_URL
          );
          // Append the API key as a search parameter
          url.searchParams.append("api_key", librariesAPIKey);
          url.searchParams.append("per_page", itemsPerPage);
          return url.toString();
        },
      },
    },
  },
});
