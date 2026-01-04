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
        // メインカラー（濃紺系 - テック感）
        primary: {
          DEFAULT: '#1E3A5F',  // 濃紺
          light: '#2C5282',     // 明るい濃紺
          dark: '#0F1F38',      // 深い濃紺
        },
        // アクセントカラー
        accent: {
          orange: '#F5A623',    // 温かみのあるオレンジ
          yellow: '#FFD93D',    // 明るい黄色
        },
        // ベースカラー
        base: {
          white: '#FFFFFF',
          lightGray: '#F7F7F7',
          darkGray: '#1A1A2E',  // ダークテーマ用
          black: '#0D0D1A',     // 黒系
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
