export default function KickoffSeminar() {
  const schedule = [
    { time: '13:00-13:10', title: '開会挨拶・主催者紹介', description: '株式会社生涯現役計画 / Metagri研究所 / 鯉渕学園の紹介' },
    { time: '13:10-13:20', title: '企画全体説明', description: 'プログラムの目的と4つのPhaseの流れ' },
    { time: '13:20-13:35', title: '農業AIハッカソン2025の実績紹介', description: '過去の成果事例' },
    { time: '13:35-13:50', title: 'Vibe Codingデモ', description: '生成AI×開発の実演・簡単なハンズオン体験' },
    { time: '13:50-14:00', title: '休憩', description: '' },
    { time: '14:00-14:50', title: '地域課題例の紹介とディスカッション', description: '農業・観光・教育分野の課題' },
    { time: '14:50-15:00', title: '地域課題の発表と選定プロセス説明', description: '応募方法・選定基準・質疑応答・クロージング' },
  ];

  return (
    <section id="kickoff" className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          キックオフセミナー詳細
        </h2>
        <p className="text-center text-white/90 mb-12 text-lg">
          まずはここから！プログラム全体の理解を深めよう
        </p>

        {/* 開催概要カード */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-white/70 mb-1">日程</p>
                <p className="text-xl font-bold">2026年1月末~2月上旬</p>
                <p className="text-sm text-white/80">※具体的な日時は決定次第更新</p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">時間</p>
                <p className="text-xl font-bold">13:00～16:00（3時間）</p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">会場</p>
                <p className="text-xl font-bold">鯉渕学園農業栄養専門学校</p>
                <p className="text-sm text-white/80">〒319-0323 茨城県水戸市鯉淵町5965</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-white/70 mb-1">参加形態</p>
                <p className="text-xl font-bold">ハイブリッド開催</p>
                <p className="text-sm text-white/80">現地参加 or オンライン参加（Zoom）</p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">定員</p>
                <p className="text-xl font-bold">現地30名 / オンライン50名</p>
              </div>
              <div className="bg-accent-yellow text-base-darkGray rounded-xl p-4 text-center">
                <p className="text-sm mb-1">参加費</p>
                <p className="text-3xl font-bold">無料</p>
              </div>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="mt-8 text-center">
            <a
              href="#application"
              className="inline-block bg-accent-yellow hover:bg-accent-yellow/90 text-base-darkGray font-bold text-lg px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
            >
              今すぐ申し込む
            </a>
          </div>
        </div>

        {/* プログラムスケジュール */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">プログラム内容</h3>
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="flex-shrink-0 bg-accent-yellow text-base-darkGray font-bold px-4 py-2 rounded-lg text-center md:w-32">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg mb-1">{item.title}</p>
                    {item.description && (
                      <p className="text-sm text-white/80">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* アクセス情報 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-6">アクセス</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3 text-lg">バスでお越しの方</h4>
              <ul className="space-y-2 text-white/90">
                <li>• JR常磐線 友部駅前から茨城交通バス 約10分</li>
                <li>• JR常磐線 水戸駅前から茨城交通バス 約40分</li>
                <li>• 鯉淵学園前 下車すぐ</li>
              </ul>

              <h4 className="font-bold mb-3 text-lg mt-6">タクシーでお越しの方</h4>
              <p className="text-white/90">JR常磐線 友部駅前から約10分</p>

              <h4 className="font-bold mb-3 text-lg mt-6">お車でお越しの方</h4>
              <p className="text-white/90">駐車場あり（無料）</p>
            </div>

            <div>
              <div className="bg-white/5 rounded-xl p-4 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.8459629175936!2d140.43127831525923!3d36.41568098002144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022295fb80efeb9%3A0x4bfb4e3bc7f7c7e0!2z6oy35rex5a2m5ZyS6L6y5qWt5qCE6aSK5a2m!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0.75rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-sm text-white/80 mt-2 text-center">
                〒319-0323 茨城県水戸市鯉淵町5965
              </p>
            </div>
          </div>

          <div className="mt-6 bg-accent-blue/20 rounded-xl p-4 border border-accent-blue/40">
            <p className="font-bold mb-2">オンライン参加の方へ</p>
            <p className="text-sm text-white/90">
              Zoomの接続URLは、お申込み後にメールでお送りします。<br />
              開始10分前から入室可能です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
