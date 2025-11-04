import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ワーケーション型 地方創生×AIハッカソン in 茨城 | キックオフセミナー参加者募集',
  description: '茨城の魅力ある地域に滞在しながら、AIで課題解決。プログラミング未経験でも参加できるVibe Coding × ワーケーション型ハッカソン。2026年2月5日キックオフセミナー開催！',
  keywords: ['AI', 'ハッカソン', '茨城', 'ワーケーション', '地域課題', '生成AI', 'Vibe Coding', '地方創生'],

  // Canonical URL
  alternates: {
    canonical: 'https://ibaraki-ai-hackathon.metagri-labo.com/',
  },

  // OGP設定
  openGraph: {
    title: 'ワーケーション型 地方創生×AIハッカソン in 茨城',
    description: '茨城の魅力ある地域に滞在しながら、AIで課題解決',
    url: 'https://ibaraki-ai-hackathon.metagri-labo.com/',
    siteName: 'MetagriLabo',
    images: [
      {
        url: 'http://metagri-labo.com/wp-content/uploads/2025/10/AI_Hackathon_Ibaraki.png',
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
    title: 'ワーケーション型 地方創生×AIハッカソン in 茨城',
    description: '茨城の魅力ある地域に滞在しながら、AIで課題解決',
    images: ['http://metagri-labo.com/wp-content/uploads/2025/10/AI_Hackathon_Ibaraki.png'],
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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
