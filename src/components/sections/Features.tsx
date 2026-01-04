const points = [
  {
    icon: '✓',
    text: 'プログラミング経験ゼロでもOK',
  },
  {
    icon: '✓',
    text: '「AIとの会話」がそのままプログラムになる',
  },
  {
    icon: '✓',
    text: '直感（Vibe）でモノづくりができる',
  },
];

export default function Features() {
  return (
    <section id="vibecoding" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 見出し */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-darkGray">
          感覚でAIを操る。それが<span className="text-accent-orange">「Vibe Coding」</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          バイブコーディング
        </p>

        {/* 本文 */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
            Vibe Codingとは、難しいコードを書くのではなく、<br className="hidden md:inline" />
            <span className="font-bold text-primary">自分のイメージややりたいことをAIに伝えるだけでアプリを作る</span>新しい開発スタイルです。
          </p>
        </div>

        {/* 図解イメージ */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* 従来の開発 */}
            <div className="bg-gray-100 rounded-2xl p-6 text-center border-2 border-gray-300">
              <p className="text-gray-500 text-sm mb-2">従来の開発</p>
              <div className="bg-gray-800 text-green-400 font-mono text-sm p-4 rounded-lg text-left overflow-hidden">
                <code>
                  const app = new App();<br />
                  app.init(&#123;...&#125;);<br />
                  function render() &#123;<br />
                  &nbsp;&nbsp;// 難しいコード...<br />
                  &#125;
                </code>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                英語のようなコードを大量に書く
              </p>
            </div>

            {/* 矢印（モバイル: 下向き、PC: 右向き） */}
            <div className="hidden md:flex justify-center items-center absolute left-1/2 transform -translate-x-1/2">
              <div className="text-4xl text-accent-orange">→</div>
            </div>

            {/* Vibe Coding */}
            <div className="bg-gradient-to-br from-primary/10 to-accent-orange/10 rounded-2xl p-6 text-center border-2 border-accent-orange">
              <p className="text-accent-orange text-sm mb-2 font-bold">Vibe Coding</p>
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <div className="flex items-start gap-3 text-left">
                  <span className="text-2xl">💬</span>
                  <div className="bg-primary/10 rounded-2xl rounded-tl-none p-3">
                    <p className="text-gray-700 text-sm">
                      「ToDoリストアプリを作って。タスクの追加・削除ができて、完了したらチェックできるようにして」
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-primary mt-4 text-sm font-bold">
                AIチャットに「こんなの作って」と話しかけるだけ
              </p>
            </div>
          </div>
        </div>

        {/* ポイント */}
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-4">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gradient-to-r from-primary/5 to-accent-orange/5 rounded-xl p-5 border border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <span className="text-2xl text-accent-orange font-bold">{point.icon}</span>
                <p className="text-lg text-base-darkGray font-medium">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
