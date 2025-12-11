import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-16">
      {/* キービジュアル - 独立したエリア */}
      {/* スマホ用: 9:16縦型 */}
      <div className="relative w-full aspect-[9/16] md:hidden">
        <Image
          src="http://metagri-labo.com/wp-content/uploads/2025/12/7c650964bb610c2972416d9a7e6554a6.jpeg"
          alt="茨城の自然とデジタル - ワーケーション型AIハッカソン"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      {/* PC用: 21:9横型 */}
      <div className="relative w-full aspect-[21/9] hidden md:block">
        <Image
          src="http://metagri-labo.com/wp-content/uploads/2025/12/bb79118101a1a97ac60e90a1b182020c.jpeg"
          alt="茨城の自然とデジタル - ワーケーション型AIハッカソン"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* コンテンツエリア - キービジュアルの下 */}
      <div className="bg-gradient-to-br from-primary to-primary-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            茨城の魅力ある地域に滞在しながら、
            <br />
            <span className="text-accent-yellow">AIで課題解決</span>
          </h1>

          <p className="text-lg md:text-2xl mb-8 text-white/90">
            非エンジニアでも挑戦できる<br className="md:hidden" />
            Vibe Coding × ワーケーション型ハッカソン
          </p>

          {/* 開催情報カード */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 max-w-2xl mx-auto border border-white/20">
            <p className="text-lg md:text-xl font-bold mb-4">
              キックオフセミナー開催！
            </p>
            <div className="space-y-2 text-left md:text-center">
              <p className="text-base md:text-lg">
                <strong>日程:</strong> 2026年2月5日（予定）
              </p>
              <p className="text-base md:text-lg">
                <strong>会場:</strong> 鯉渕学園農業栄養専門学校（茨城県水戸市）
              </p>
              <p className="text-base md:text-lg">
                <strong>参加:</strong> 現地参加
              </p>
              <p className="text-2xl md:text-3xl font-bold text-accent-yellow mt-4">
                参加費：無料
              </p>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#application"
              className="inline-block bg-accent-yellow hover:bg-accent-yellow/90 text-base-darkGray font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              今すぐ申し込む
            </a>
            <a
              href="#about"
              className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 border border-white/40"
            >
              詳細を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
