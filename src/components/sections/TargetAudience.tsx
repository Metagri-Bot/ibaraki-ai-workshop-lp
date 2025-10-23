const audiences = [
  {
    icon: '💻',
    text: 'プログラミング未経験だけどAI技術に興味がある',
  },
  {
    icon: '🌱',
    text: '地域課題解決に関心がある学生・社会人',
  },
  {
    icon: '🏖️',
    text: 'ワーケーションで新しい働き方を体験したい',
  },
  {
    icon: '🚀',
    text: '自分のアイデアを社会実装まで実現したい',
  },
  {
    icon: '👥',
    text: 'Z世代のコミュニティに参加したい',
  },
  {
    icon: '🗾',
    text: '茨城の魅力を体感しながら学びたい',
  },
];

export default function TargetAudience() {
  return (
    <section id="about" className="py-20 bg-base-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-darkGray">
          こんな方に<span className="text-primary">おすすめ</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-primary"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{item.icon}</span>
                <p className="text-base text-base-darkGray leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
