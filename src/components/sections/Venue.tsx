import Image from 'next/image';

export default function Venue() {
  return (
    <section className="py-20 bg-base-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-darkGray">
          会場<span className="text-primary">紹介</span>
        </h2>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* 画像 */}
            <div className="relative h-64 md:h-auto">
              <Image
                src="https://image.shingakunet.com/48ef80a8-6fd0-4079-b802-8505158e4351_800x800r.JPG"
                alt="鯉渕学園農業栄養専門学校"
                fill
                className="object-cover"
              />
            </div>

            {/* 説明 */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                鯉渕学園農業栄養専門学校
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                茨城県水戸市に位置する、農業と栄養の専門教育を行う伝統ある学校。
                広大なキャンパスと最新の施設を備え、実践的な学びの場として知られています。
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-base-darkGray mb-2 flex items-center gap-2">
                    <span className="text-primary">📍</span> 所在地
                  </h4>
                  <p className="text-gray-600 pl-6">
                    〒319-0323 茨城県水戸市鯉淵町5965
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-base-darkGray mb-2 flex items-center gap-2">
                    <span className="text-primary">🚌</span> アクセス
                  </h4>
                  <ul className="text-gray-600 pl-6 space-y-1">
                    <li>• JR常磐線 友部駅からバス10分</li>
                    <li>• JR常磐線 水戸駅からバス40分</li>
                    <li>• タクシー：友部駅から10分</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-base-darkGray mb-2 flex items-center gap-2">
                    <span className="text-primary">🚗</span> 駐車場
                  </h4>
                  <p className="text-gray-600 pl-6">
                    無料駐車場あり
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
