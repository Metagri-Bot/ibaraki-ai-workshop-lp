import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // メインカラー（グリーン系）
        primary: {
          DEFAULT: '#2D7E4E',  // 深緑
          light: '#5CB85C',     // 明るい緑
          dark: '#1F5A36',      // 濃い緑
        },
        // アクセントカラー
        accent: {
          blue: '#4A90E2',      // デジタル感
          yellow: '#F5A623',    // 活力
        },
        // ベースカラー
        base: {
          white: '#FFFFFF',
          lightGray: '#F7F7F7',
          darkGray: '#333333',
        }
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
