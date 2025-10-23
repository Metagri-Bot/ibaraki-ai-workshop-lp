const challengeCategories = [
  {
    icon: '🌾',
    title: '地域産業振興',
    color: 'bg-green-50 border-green-300',
    iconBg: 'bg-green-100',
    challenges: [
      '農林水産業の生産性向上',
      '販路拡大支援システム',
      '後継者育成支援ツール',
      '伝統工芸のデジタル化',
    ],
  },
  {
    icon: '🗾',
    title: '観光振興',
    color: 'bg-blue-50 border-blue-300',
    iconBg: 'bg-blue-100',
    challenges: [
      '観光ルート最適化アプリ',
      '多言語対応システム',
      'インバウンド対応ソリューション',
      '地域資源のデジタルアーカイブ',
    ],
  },
];

export default function Challenges() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-darkGray">
          解決する<span className="text-primary">地域課題の例</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          茨城の現場が抱えるリアルな課題に挑戦
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {challengeCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.color} rounded-2xl p-8 border-2 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${category.iconBg} w-16 h-16 rounded-full flex items-center justify-center text-3xl`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-base-darkGray">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.challenges.map((challenge, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm"
                  >
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent-blue/10 rounded-2xl p-8 border border-primary/20">
          <p className="text-center text-gray-700 leading-relaxed">
            <strong className="text-primary">その他の課題も募集中！</strong><br />
            キックオフセミナーで地域の方々からリアルな課題を直接ヒアリングし、<br className="hidden md:inline" />
            参加者の皆さんと一緒に解決すべき課題を選定します。
          </p>
        </div>
      </div>
    </section>
  );
}
