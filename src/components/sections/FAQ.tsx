const faqs = [
  {
    question: 'プログラミングの知識は全くありませんが大丈夫ですか？',
    answer: 'はい、大歓迎です。今回はコードを書かない「ノーコード/Vibe Coding」の手法を使いますので、専門知識は一切不要です。',
  },
  {
    question: '年齢制限はありますか？',
    answer: '特にございませんが、主に40代〜50代の方に向けた内容となっております。もちろん、他の年代の方もご参加いただけます。',
  },
  {
    question: '事前の準備は必要ですか？',
    answer: 'Googleアカウント（Gmailアドレス）のご用意をお願いします。当日のPC操作に不安がある方は、事前にログイン確認をしておいていただけるとスムーズです。',
  },
  {
    question: 'どのようなパソコンを持っていけばいいですか？',
    answer: 'Wi-Fiに接続でき、Webブラウザ（Chrome推奨）が使えるノートパソコンであれば問題ありません。WindowsでもMacでも大丈夫です。',
  },
  {
    question: '当日はどんなものを作れますか？',
    answer: '簡単なWebアプリやツールを作ります。テンプレートを用意していますので、30分程度であなただけの成果物が完成します。',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-base-lightGray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-darkGray">
          よくある<span className="text-accent-orange">質問</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          FAQ
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <summary className="cursor-pointer p-6 font-bold text-base-darkGray flex items-center justify-between hover:bg-primary/5 transition-colors">
                <span className="flex items-start gap-3">
                  <span className="text-accent-orange flex-shrink-0">Q{index + 1}.</span>
                  <span>{faq.question}</span>
                </span>
                <svg
                  className="w-5 h-5 flex-shrink-0 text-accent-orange transform group-open:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-primary/10 pt-4">
                <span className="text-primary font-bold">A. </span>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-md text-center border border-primary/20">
          <p className="text-gray-700 mb-4">
            その他ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <a
            href="https://metagri-labo.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
