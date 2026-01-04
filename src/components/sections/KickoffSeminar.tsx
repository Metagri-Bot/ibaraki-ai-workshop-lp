const features = [
  {
    icon: '🤖',
    title: '最新AIツール「Gemini Build」を体験',
    description: 'Googleアカウントがあれば誰でも使える最新ツールを使用します。',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: '✨',
    title: 'コピペで簡単ハンズオン',
    description: '用意された「魔法の言葉（プロンプト）」を貼るだけ。30分であなただけの成果物が完成します。',
    color: 'from-accent-orange to-yellow-400',
  },
  {
    icon: '👥',
    title: '仲間と共有する楽しさ',
    description: '参加者同士でアイデアを見せ合うことで、新しい発見や刺激が得られます。',
    color: 'from-primary to-primary-light',
  },
];

export default function KickoffSeminar() {
  return (
    <section id="workshop" className="py-20 bg-gradient-to-br from-primary-dark to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 見出し */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-accent-yellow">「自分でもできた！」</span>を持ち帰ろう。
        </h2>
        <p className="text-center text-white/90 mb-12 text-lg">
          ワークショップで体験できること
        </p>

        {/* 3つの特徴 */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
            >
              {/* アイコン */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
              </div>

              {/* タイトル */}
              <h3 className="text-xl font-bold mb-4 text-white">
                {feature.title}
              </h3>

              {/* 説明 */}
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTAボタン */}
        <div className="text-center">
          <a
            href="#application"
            className="inline-block bg-accent-orange hover:bg-accent-yellow text-base-darkGray font-bold text-lg px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
          >
            ワークショップに申し込む
          </a>
        </div>
      </div>
    </section>
  );
}
