export default function TargetAudience() {
  return (
    <section id="about" className="py-20 bg-base-lightGray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* リード文 */}
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl text-base-darkGray leading-relaxed mb-6">
            「AIを使ってみたいけれど、難しそう…」
          </p>
          <p className="text-xl md:text-2xl text-base-darkGray leading-relaxed mb-6">
            「アプリを作ってみたいけれど、プログラミングなんてできない…」
          </p>
          <p className="text-2xl md:text-3xl font-bold text-primary mb-8">
            そう諦めていませんか？
          </p>
        </div>

        {/* 解決の提示 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-accent-orange">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            技術の進化は、<span className="font-bold text-primary">「学習する時代」</span>から<span className="font-bold text-accent-orange">「AIに任せる時代」</span>へと変わりました。
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            専門知識はもう必要ありません。<br className="hidden md:inline" />
            必要なのは、あなたの<span className="font-bold text-primary">「こんなものがあったらいいな」</span>というアイデアだけです。
          </p>
        </div>
      </div>
    </section>
  );
}
