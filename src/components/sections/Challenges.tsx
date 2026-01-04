const eventInfo = [
  {
    label: 'イベント名',
    value: 'AIでできることを知り、体験する場「Vibe Codingワークショップ」',
    icon: '📌',
  },
  {
    label: '日時',
    value: '2026年2月5日（木） 13:00〜15:00',
    icon: '📅',
  },
  {
    label: '場所',
    value: 'オフライン開催（茨城県水戸市内 ※詳細は申込者にご連絡）',
    icon: '📍',
  },
  {
    label: '定員',
    value: '30名（先着順）',
    icon: '👥',
  },
  {
    label: '参加費',
    value: '無料',
    icon: '💰',
    highlight: true,
  },
  {
    label: '持ち物',
    value: 'ノートパソコン（Wi-Fi接続可能なもの）',
    icon: '💻',
  },
];

export default function Challenges() {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 見出し */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-darkGray">
          開催<span className="text-accent-orange">概要</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Event Overview
        </p>

        {/* イベント情報 */}
        <div className="bg-base-lightGray rounded-2xl p-8 shadow-lg">
          <div className="space-y-6">
            {eventInfo.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row md:items-center gap-3 pb-6 ${
                  index !== eventInfo.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="flex items-center gap-3 md:w-40 flex-shrink-0">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-bold text-base-darkGray">{item.label}</span>
                </div>
                <div className="flex-1">
                  <p className={`text-lg ${item.highlight ? 'text-accent-orange font-bold text-2xl' : 'text-gray-700'}`}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 参加条件 */}
        <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent-orange/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-xl font-bold text-base-darkGray mb-4 flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            参加条件
          </h3>
          <div className="space-y-3">
            <p className="text-gray-700 font-bold text-lg">
              Googleアカウントをお持ちの方
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              ※当日はGoogleのツール（Gemini Build）を使用します。<br />
              アカウントのパスワード等、ログインできる状態でお越しください。
            </p>
          </div>
        </div>

        {/* CTAボタン */}
        <div className="mt-12 text-center">
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
