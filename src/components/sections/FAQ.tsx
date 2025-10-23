const faqs = [
  {
    question: 'プログラミング経験がなくても参加できますか？',
    answer: 'はい、可能です！Vibe Coding手法により、生成AIと対話しながら開発できます。プログラミング未経験の方でも安心してご参加ください。',
  },
  {
    question: '全てのPhaseに参加する必要がありますか？',
    answer: 'いいえ、ハッカソンに参加する場合はPhase2からの参加でOKです。ただし、プログラム全体を理解するためにキックオフセミナーへの参加を推奨します。',
  },
  {
    question: 'オンライン参加のみでも大丈夫ですか？',
    answer: 'はい！Discordを通じて参加できます。ただし、現地参加の方がワーケーション体験や地域交流を楽しめるためおすすめです。',
  },
  {
    question: '参加費用はかかりますか？',
    answer: 'キックオフセミナーおよびハッカソンへの参加は基本無料です。ただし、現地参加の場合の宿泊費や交通費は自己負担となります。',
  },
  {
    question: 'チーム参加・個人参加どちらも可能ですか？',
    answer: 'はい、どちらも可能です。個人参加の場合は、キックオフセミナーや開発期間中にチームを組むことができます。',
  },
  {
    question: '茨城県外からも参加できますか？',
    answer: 'はい、全国どこからでも参加可能です！むしろ県外の方にこそ茨城の魅力を体感していただきたいと考えています。',
  },
  {
    question: '使用するAIツールは何ですか？',
    answer: 'ChatGPT、Claude、Gemini、Cursorなど、各種生成AIツールを推奨しています。開発に慣れていない方には特にCursorがおすすめです。',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-base-lightGray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-darkGray">
          よくある<span className="text-primary">質問</span>
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
                  <span className="text-primary flex-shrink-0">Q{index + 1}.</span>
                  <span>{faq.question}</span>
                </span>
                <svg
                  className="w-5 h-5 flex-shrink-0 text-primary transform group-open:rotate-180 transition-transform duration-300"
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
