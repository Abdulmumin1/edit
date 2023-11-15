import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      // devOptions: {
      //   enabled: true,
      // },
      manifest: {
        name: "Edit ScreenShot",
        short_name: "Edit",
        description: "Edit screenshot, text and code snippet beautifully",
        theme_color: "#000",
        icons: [
          {
            src: "editss192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "editss512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
