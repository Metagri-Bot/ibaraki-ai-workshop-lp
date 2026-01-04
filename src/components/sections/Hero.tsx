import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-16">
      {/* キービジュアル - 独立したエリア */}
      {/* スマホ用: 9:16縦型 */}
      <div className="relative w-full aspect-[9/16] md:hidden">
        <Image
          src="http://metagri-labo.com/wp-content/uploads/2025/12/7c650964bb610c2972416d9a7e6554a6.jpeg"
          alt="AIワークショップ - Vibe Coding体験"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      {/* PC用: 21:9横型 */}
      <div className="relative w-full aspect-[21/9] hidden md:block">
        <Image
          src="http://metagri-labo.com/wp-content/uploads/2025/12/bb79118101a1a97ac60e90a1b182020c.jpeg"
          alt="AIワークショップ - Vibe Coding体験"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* コンテンツエリア - キービジュアルの下 */}
      <div className="bg-gradient-to-br from-primary-dark to-primary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* メインキャッチコピー */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            プログラミング不要。
            <br />
            <span className="text-accent-orange">AIと話すだけ。</span>
          </h1>

          {/* サブコピー */}
          <p className="text-lg md:text-2xl mb-4 text-white/90">
            2026年の新トレンド<span className="text-accent-yellow font-bold">「Vibe Coding」</span>を体験しよう。
          </p>
          <p className="text-base md:text-xl mb-8 text-white/80">
            あなたのアイデアが、たった2時間で形になるワークショップ。
          </p>

          {/* 権威付け/補足 */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base">
            <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              初心者歓迎
            </span>
            <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              40〜50代からのリスキリング
            </span>
            <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              Google Gemini活用
            </span>
          </div>

          {/* 開催情報カード */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 max-w-2xl mx-auto border border-white/20">
            <div className="space-y-2 text-left md:text-center">
              <p className="text-base md:text-lg">
                <strong>日時:</strong> 2026年2月5日（木）13:00〜15:00
              </p>
              <p className="text-base md:text-lg">
                <strong>会場:</strong> オフライン開催（茨城県水戸市）
              </p>
              <p className="text-2xl md:text-3xl font-bold text-accent-orange mt-4">
                参加費：無料
              </p>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#application"
              className="inline-block bg-accent-orange hover:bg-accent-yellow text-base-darkGray font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              ワークショップに申し込む
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
