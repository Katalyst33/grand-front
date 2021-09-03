import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import * as path from "path";
const target = `http://localhost:5300`;

// @ts-ignore
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue()],
    server: {
      port: 3400,
      proxy: {
        "/files": target,
        "/assets": target,
        "/api": {
          target,
          ws: false,
          changeOrigin: true,
        },
        "/storage": {
          target,
          ws: false,
          changeOrigin: true,
        },
        "/uploads": {
          target,
          ws: false,
          changeOrigin: true,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "/src"),
      },
    },
  });
};
