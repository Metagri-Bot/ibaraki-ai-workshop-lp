export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark to-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* メッセージ */}
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-relaxed">
          AIと話す力が、<br className="md:hidden" />
          <span className="text-accent-yellow">これからのあなたの武器になる。</span>
        </h2>

        <p className="text-lg md:text-2xl text-white/90 mb-12">
          まずは2時間、新しい世界を覗いてみませんか？
        </p>

        {/* CTAボタン */}
        <a
          href="#application"
          className="inline-block bg-accent-orange hover:bg-accent-yellow text-base-darkGray font-bold text-xl px-16 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
        >
          ワークショップに申し込む
        </a>

        {/* 補足情報 */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-white/80 text-sm">
          <span className="flex items-center gap-2">
            <span className="text-accent-yellow">●</span>
            2026年2月5日（木）13:00〜
          </span>
          <span className="flex items-center gap-2">
            <span className="text-accent-yellow">●</span>
            参加費無料
          </span>
          <span className="flex items-center gap-2">
            <span className="text-accent-yellow">●</span>
            定員30名
          </span>
        </div>
      </div>
    </section>
  );
}
