const phases = [
  {
    phase: 'Phase 1',
    title: '課題ヒアリング&キックオフ',
    period: '2026年1月末~2月上旬',
    icon: '🎯',
    items: [
      '地域課題の公募・選定',
      '参加者募集&キックオフセミナー',
    ],
    color: 'from-primary to-primary-light',
  },
  {
    phase: 'Phase 2',
    title: 'ワーケーション&オンライン参加型ハッカソン',
    period: '2026年2月~4月上旬',
    icon: '💻',
    items: [
      '茨城の各会場に滞在しながら開発（現地参加）',
      'Discordでオンライン開発（リモート参加）',
      'Vibe Codingでプロトタイプ開発',
    ],
    color: 'from-accent-blue to-primary',
  },
  {
    phase: 'Phase 3',
    title: '地域交流&成果発表',
    period: '2026年4月内',
    icon: '🎉',
    items: [
      '地域住民・事業者との交流イベント',
      '開発成果の発表会',
    ],
    color: 'from-accent-yellow to-accent-blue',
  },
  {
    phase: 'Phase 4',
    title: '実証実験&社会実装',
    period: '2026年5月~',
    icon: '🚀',
    items: [
      '現場での実証&改善',
      '事業化支援まで伴走',
    ],
    color: 'from-primary-dark to-primary',
  },
];

export default function ProgramFlow() {
  return (
    <section id="flow" className="py-20 bg-base-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-darkGray">
          プログラム<span className="text-primary">全体の流れ</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          4つのフェーズで、アイデアを社会実装まで導きます
        </p>

        <div className="relative">
          {/* タイムライン縦線（PC） */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent-blue to-primary-dark transform -translate-x-1/2" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                }`}
              >
                {/* タイムラインドット */}
                <div className="hidden md:block absolute left-1/2 top-8 w-6 h-6 bg-white rounded-full border-4 border-primary transform -translate-x-1/2 z-10" />

                {/* カード */}
                <div
                  className={`bg-gradient-to-br ${phase.color} rounded-2xl p-8 shadow-xl text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{phase.icon}</span>
                    <div>
                      <p className="text-sm font-bold opacity-90">{phase.phase}</p>
                      <h3 className="text-2xl font-bold">{phase.title}</h3>
                    </div>
                  </div>

                  <p className="text-lg font-bold mb-4 opacity-90">
                    {phase.period}
                  </p>

                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent-yellow">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 補足説明 */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-md border border-primary/20">
          <p className="text-center text-gray-700 leading-relaxed">
            <strong className="text-primary">Phase 1のキックオフセミナー</strong>から参加することで、プログラム全体の流れを理解できます。<br />
            <strong className="text-primary">Phase 2からの参加</strong>も可能です。ご自身のスケジュールに合わせてご参加ください。
          </p>
        </div>
      </div>
    </section>
  );
}
