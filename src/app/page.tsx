import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/sections/Hero';
import TargetAudience from '@/components/sections/TargetAudience';
import Features from '@/components/sections/Features';
import KickoffSeminar from '@/components/sections/KickoffSeminar';
import ProgramFlow from '@/components/sections/ProgramFlow';
import Challenges from '@/components/sections/Challenges';
import Benefits from '@/components/sections/Benefits';
import FAQ from '@/components/sections/FAQ';
import ApplicationForm from '@/components/sections/ApplicationForm';

// 構造化データ（JSON-LD）
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "AIでできることを知り、体験する場「Vibe Codingワークショップ」",
  "description": "プログラミング不要。AIと話すだけ。2026年の新トレンド「Vibe Coding」を体験しよう。あなたのアイデアが、たった2時間で形になるワークショップ。40〜50代からのリスキリングに最適。",
  "startDate": "2026-02-05T13:00:00+09:00",
  "endDate": "2026-02-05T15:00:00+09:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "茨城県水戸市内（詳細は申込者にご連絡）",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "水戸市",
      "addressRegion": "茨城県",
      "addressCountry": "JP"
    }
  },
  "image": "http://metagri-labo.com/wp-content/uploads/2025/12/89d3904632c8779b94ca6ffeccbb27c3.jpeg",
  "organizer": [
    {
      "@type": "Organization",
      "name": "株式会社生涯現役計画",
      "url": "https://gen-eki.co.jp/"
    },
    {
      "@type": "Organization",
      "name": "Metagri研究所",
      "url": "https://metagri-labo.com/"
    }
  ],
  "offers": {
    "@type": "Offer",
    "url": "https://ibaraki-ai-hackathon.metagri-labo.com/",
    "price": "0",
    "priceCurrency": "JPY",
    "availability": "https://schema.org/InStock",
    "validFrom": "2025-12-01T00:00:00+09:00"
  }
};

export default function Home() {
  return (
    <>
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />
      <main>
        <Hero />
        <TargetAudience />
        <Features />
        <KickoffSeminar />
        <ProgramFlow />
        <Challenges />
        <FAQ />
        <Benefits />
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}
