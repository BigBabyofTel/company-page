/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  "node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx}",
];
export const prefix = "";
export const theme = {
  extend: {
    fontFamily: {
      noto: ["Noto Sans", "sans-serif"],
    },
  },
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
};
export const plugins = ["tailwindcss-animate", nextui()];
