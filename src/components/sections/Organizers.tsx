import Image from 'next/image';

const organizers = [
  {
    type: '主催',
    name: '株式会社生涯現役計画',
    logo: 'https://gen-eki.co.jp/wp-content/uploads/2025/04/cpp-logo-main.svg',
    url: 'https://gen-eki.co.jp/',
    description: '地域課題解決とキャリア支援を通じて、生涯現役社会の実現を目指す',
  },
  {
    type: '主催',
    name: 'Metagri研究所 / 株式会社農情人',
    logo: 'https://metagri-labo.com/wp-content/uploads/2025/06/7b4279d2e6a9adb876529df2fcc013c1.png',
    url: 'https://metagri-labo.com/',
    description: '農業×AI×Web3で次世代の農業イノベーションを創造',
  },
  {
    type: '協力',
    name: '鯉渕学園農業栄養専門学校',
    logo: 'https://www.koibuchi.ac.jp/assets/images/logo/koibuchi.svg',
    url: 'https://www.koibuchi.ac.jp/',
    description: '農業と栄養の専門教育を通じて、地域社会に貢献する人材を育成',
  },
];

export default function Organizers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-darkGray">
          運営<span className="text-primary">体制</span>
        </h2>

        <div className="space-y-8">
          {organizers.map((org, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-base-lightGray to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* ロゴ */}
                <div className="flex-shrink-0 w-48 h-24 relative bg-white rounded-xl p-4 shadow-md">
                  <Image
                    src={org.logo}
                    alt={org.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* 説明 */}
                <div className="flex-1 text-center md:text-left">
                  <span className="inline-block bg-primary text-white text-sm font-bold px-3 py-1 rounded-full mb-2">
                    {org.type}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-base-darkGray">
                    {org.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {org.description}
                  </p>
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold transition-colors"
                  >
                    公式サイトへ
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
