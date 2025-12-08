import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/sections/Hero';
import TargetAudience from '@/components/sections/TargetAudience';
import Features from '@/components/sections/Features';
import KickoffSeminar from '@/components/sections/KickoffSeminar';
import ProgramFlow from '@/components/sections/ProgramFlow';
import Challenges from '@/components/sections/Challenges';
import Benefits from '@/components/sections/Benefits';
import Venue from '@/components/sections/Venue';
import Organizers from '@/components/sections/Organizers';
import FAQ from '@/components/sections/FAQ';
import ApplicationForm from '@/components/sections/ApplicationForm';

// 構造化データ（JSON-LD）
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "ワーケーション型 地方創生×AIハッカソン in 茨城 キックオフセミナー",
  "description": "茨城の魅力ある地域に滞在しながら、AIで課題解決。プログラミング未経験でも参加できるVibe Coding × ワーケーション型ハッカソン",
  "startDate": "2026-01-30T13:00:00+09:00",
  "endDate": "2026-01-30T16:00:00+09:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "鯉渕学園農業栄養専門学校",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "鯉淵町5965",
      "addressLocality": "水戸市",
      "addressRegion": "茨城県",
      "postalCode": "319-0323",
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
        <Benefits />
        <Venue />
        <Organizers />
        <FAQ />
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}
