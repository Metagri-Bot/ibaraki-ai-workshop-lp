const schedule = [
  {
    time: '13:00〜',
    title: 'オープニング',
    description: '森理事長 ご挨拶',
    icon: '🎤',
  },
  {
    time: '13:10〜',
    title: '【知る】AIでできること紹介',
    description: 'AIの基礎知識や、あっと驚く活用事例をご紹介します。',
    icon: '💡',
  },
  {
    time: '13:40〜',
    title: '【体験】ハンズオンタイム',
    description: '実際に「Gemini Build」を触ってみましょう。テンプレートがあるので安心です。',
    icon: '🛠️',
  },
  {
    time: '14:30〜',
    title: '【共有】アウトプット発表',
    description: '完成したものを参加者同士でシェアします。',
    icon: '🎉',
  },
  {
    time: '14:50〜',
    title: 'クロージング・アンケート',
    description: '',
    icon: '📝',
  },
];

export default function ProgramFlow() {
  return (
    <section id="schedule" className="py-20 bg-base-lightGray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 見出し */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-darkGray">
          タイム<span className="text-accent-orange">テーブル</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          当日の流れ
        </p>

        {/* タイムテーブル */}
        <div className="space-y-4">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border-l-4 border-accent-orange"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 p-6">
                {/* 時間 */}
                <div className="flex items-center gap-3 md:w-32 flex-shrink-0">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="bg-primary text-white font-bold px-3 py-1 rounded-lg text-sm">
                    {item.time}
                  </span>
                </div>

                {/* 内容 */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-base-darkGray mb-1">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 所要時間 */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            所要時間：約<span className="text-2xl font-bold text-primary mx-1">2</span>時間
          </p>
        </div>
      </div>
    </section>
  );
}
