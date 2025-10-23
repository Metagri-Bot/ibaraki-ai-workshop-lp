const features = [
  {
    icon: '🚀',
    title: 'Vibe Coding手法',
    description: 'プログラミング経験不問！生成AIと対話しながら開発できる新しい開発スタイル',
  },
  {
    icon: '🎯',
    title: 'リアル課題挑戦',
    description: '農業、観光、教育分野の現場が抱える本当の「困った」を解決',
  },
  {
    icon: '🔄',
    title: '社会実装まで伴走',
    description: '開発→実証→事業化まで一貫サポート。作って終わりにしない',
  },
  {
    icon: '🏖️',
    title: 'ワーケーション型開催',
    description: '茨城の魅力的な会場に滞在しながら開発。地域との深いつながりを構築',
  },
  {
    icon: '👥',
    title: 'Z世代主導運営',
    description: 'Z世代インターンが企画・運営。同世代目線の参加しやすい環境',
  },
  {
    icon: '🤝',
    title: '地域交流イベント',
    description: '地元住民・事業者との交流会で地域のリアルな声を聞く',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-darkGray">
          プログラムの<span className="text-primary">6つの特徴</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          他のハッカソンとは一味違う、実践的な学びと体験がここに
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-primary-light/10 to-primary/10 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-primary/20"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-base-darkGray">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* ホバーエフェクト */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
