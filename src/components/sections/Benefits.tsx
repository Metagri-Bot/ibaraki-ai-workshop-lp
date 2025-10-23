const benefits = [
  {
    icon: '💡',
    title: 'スキル習得',
    description: '最新のAI開発手法を実践で学べる',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    icon: '🏆',
    title: '実績づくり',
    description: 'ポートフォリオとして活用可能',
    color: 'from-blue-400 to-purple-400',
  },
  {
    icon: '🤝',
    title: 'ネットワーク',
    description: '同世代や地域とのつながり',
    color: 'from-green-400 to-teal-400',
  },
  {
    icon: '🌱',
    title: 'キャリア',
    description: 'UIターン支援プログラムとの連携',
    color: 'from-pink-400 to-red-400',
  },
  {
    icon: '🚀',
    title: '事業化支援',
    description: 'アイデアの社会実装まで伴走',
    color: 'from-indigo-400 to-blue-400',
  },
  {
    icon: '🎁',
    title: '特典',
    description: '優秀チームへの表彰・支援',
    color: 'from-purple-400 to-pink-400',
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          参加する<span className="text-accent-yellow">メリット</span>
        </h2>
        <p className="text-center text-white/90 mb-12 text-lg">
          成長できる環境が、ここにある
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {benefit.title}
              </h3>
              <p className="text-white/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
