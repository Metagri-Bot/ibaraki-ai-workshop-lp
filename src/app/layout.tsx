import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'ワーケーション型 地方創生×AIハッカソン in 茨城 | Z世代・非エンジニア歓迎',
  description: '【Z世代・非エンジニア歓迎】茨城でワーケーションしながらAIハッカソンに挑戦！生成AIとVibe Codingで地域課題を解決。プログラミング未経験OK。2026年2月キックオフセミナー開催。AIスキルを身につけながら地方創生に貢献しよう。',
  keywords: ['AI', 'ハッカソン', '茨城', 'ワーケーション', '地域課題', '生成AI', 'Vibe Coding', '地方創生', 'Z世代', '非エンジニア', 'AIハッカソン', 'プログラミング初心者', '茨城観光', 'リモートワーク', 'デジタル人材'],

  // Canonical URL
  alternates: {
    canonical: 'https://ibaraki-ai-hackathon.metagri-labo.com/',
  },

  // OGP設定
  openGraph: {
    title: 'ワーケーション型 地方創生×AIハッカソン in 茨城 | Z世代・非エンジニア歓迎',
    description: '【Z世代・非エンジニア歓迎】茨城でワーケーションしながらAIハッカソンに挑戦！生成AIで地域課題を解決',
    url: 'https://ibaraki-ai-hackathon.metagri-labo.com/',
    siteName: 'MetagriLabo',
    images: [
      {
        url: 'http://metagri-labo.com/wp-content/uploads/2025/12/89d3904632c8779b94ca6ffeccbb27c3.jpeg',
        width: 1200,
        height: 630,
        alt: 'ワーケーション型 地方創生×AIハッカソン in 茨城 メインビジュアル',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'ワーケーション型 地方創生×AIハッカソン in 茨城 | Z世代・非エンジニア歓迎',
    description: '【Z世代・非エンジニア歓迎】茨城でワーケーションしながらAIハッカソンに挑戦！生成AIで地域課題を解決',
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
