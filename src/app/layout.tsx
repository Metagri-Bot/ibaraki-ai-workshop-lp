import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vibe Codingワークショップ | プログラミング不要・AIと話すだけでアプリを作る',
  description: '【40〜50代からのリスキリング】プログラミング不要。AIと話すだけでアプリを作る「Vibe Coding」を2時間で体験。Google Gemini活用。2026年2月5日開催。初心者歓迎・参加費無料。',
  keywords: ['Vibe Coding', 'AI', 'ワークショップ', 'プログラミング不要', 'ノーコード', 'リスキリング', '40代', '50代', 'Google Gemini', 'AI体験', '茨城', '水戸', '初心者歓迎', 'アプリ開発', 'ハンズオン'],

  // Canonical URL
  alternates: {
    canonical: 'https://ibaraki-ai-hackathon.metagri-labo.com/',
  },

  // OGP設定
  openGraph: {
    title: 'Vibe Codingワークショップ | プログラミング不要・AIと話すだけ',
    description: '【40〜50代からのリスキリング】プログラミング不要。AIと話すだけでアプリを作る新体験。2026年2月5日開催・参加費無料',
    url: 'https://ibaraki-ai-hackathon.metagri-labo.com/',
    siteName: 'MetagriLabo',
    images: [
      {
        url: 'http://metagri-labo.com/wp-content/uploads/2025/12/89d3904632c8779b94ca6ffeccbb27c3.jpeg',
        width: 1200,
        height: 630,
        alt: 'Vibe Codingワークショップ メインビジュアル',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe Codingワークショップ | プログラミング不要・AIと話すだけ',
    description: '【40〜50代からのリスキリング】プログラミング不要。AIと話すだけでアプリを作る新体験。2026年2月5日開催・参加費無料',
    images: ['http://metagri-labo.com/wp-content/uploads/2025/12/89d3904632c8779b94ca6ffeccbb27c3.jpeg'],
  },

  // ファビコン
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: 'https://metagri-labo.com/wp-content/uploads/2025/06/7b4279d2e6a9adb876529df2fcc013c1.png', type: 'image/png' },
    ],
    apple: [
      { url: 'https://metagri-labo.com/wp-content/uploads/2025/06/7b4279d2e6a9adb876529df2fcc013c1.png' },
    ],
  },

  // その他
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z128H9EBES"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z128H9EBES');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
