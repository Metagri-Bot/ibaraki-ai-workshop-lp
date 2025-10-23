'use client';

import { useState } from 'react';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    furigana: '',
    email: '',
    phone: '',
    affiliation: '',
    age: '',
    prefecture: '',
    participationType: '',
    programmingExperience: '',
    aiToolExperience: '',
    interests: [] as string[],
    motivation: '',
    questions: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyDhe00p92k7fhOnl8Qv8jmtQOtoAGb4hx6EEoZImSAnCpsXYM9Lu0ej66U3rLANNOE/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      setSubmitStatus('success');
      // フォームリセット
      setFormData({
        name: '',
        furigana: '',
        email: '',
        phone: '',
        affiliation: '',
        age: '',
        prefecture: '',
        participationType: '',
        programmingExperience: '',
        aiToolExperience: '',
        interests: [],
        motivation: '',
        questions: '',
        consent: false,
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'consent') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        setFormData(prev => ({
          ...prev,
          interests: checked
            ? [...prev.interests, value]
            : prev.interests.filter(i => i !== value),
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <section id="application" className="py-20 bg-gradient-to-br from-primary to-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          キックオフセミナー<span className="text-accent-yellow">申込フォーム</span>
        </h2>
        <p className="text-center text-white/90 mb-12 text-lg">
          下記のフォームよりお申し込みください
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                お申し込みありがとうございます！
              </h3>
              <p className="text-white/90 leading-relaxed">
                ご登録いただいたメールアドレス宛に、<br />
                確認メールをお送りしました。<br />
                開催日が近づきましたら、詳細情報をお送りいたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 氏名 */}
              <div>
                <label className="block text-white font-bold mb-2">
                  氏名 <span className="text-accent-yellow">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="山田 太郎"
                />
              </div>

              {/* フリガナ */}
              <div>
                <label className="block text-white font-bold mb-2">
                  フリガナ <span className="text-accent-yellow">*</span>
                </label>
                <input
                  type="text"
                  name="furigana"
                  value={formData.furigana}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="ヤマダ タロウ"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label className="block text-white font-bold mb-2">
                  メールアドレス <span className="text-accent-yellow">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="example@email.com"
                />
              </div>

              {/* 電話番号 */}
              <div>
                <label className="block text-white font-bold mb-2">
                  電話番号 <span className="text-accent-yellow">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="090-1234-5678"
                />
              </div>

              {/* 所属 */}
              <div>
                <label className="block text-white font-bold mb-2">
                  所属（学校名/会社名）
                </label>
                <input
                  type="text"
                  name="affiliation"
                  value={formData.affiliation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="〇〇大学 / 株式会社〇〇"
                />
              </div>

              {/* 年齢層 */}
              <div>
                <label className="block text-white font-bold mb-2">
                  年齢層 <span className="text-accent-yellow">*</span>
                </label>
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                >
                  <option value="" className="text-gray-900">選択してください</option>
                  <option value="10代" className="text-gray-900">10代</option>
                  <option value="20代" className="text-gray-900">20代</option>
                  <option value="30代" className="text-gray-900">30代</option>
                  <option value="40代" className="text-gray-900">40代</option>
                  <option value="50代以上" className="text-gray-900">50代以上</option>
                </select>
              </div>

              {/* 居住地 */}
              <div>
                <label className="block text-white font-bold mb-2">
                  居住地（都道府県） <span className="text-accent-yellow">*</span>
                </label>
                <input
                  type="text"
                  name="prefecture"
                  value={formData.prefecture}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                  placeholder="茨城県"
                />
              </div>

              {/* 参加形態 */}
              <div>
                <label className="block text-white font-bold mb-2">
                  参加形態 <span className="text-accent-yellow">*</span>
                </label>
                <select
                  name="participationType"
                  value={formData.participationType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                >
                  <option value="" className="text-gray-900">選択してください</option>
                  <option value="現地参加" className="text-gray-900">現地参加</option>
                  <option value="オンライン参加" className="text-gray-900">オンライン参加</option>
                </select>
              </div>

              {/* プログラミング経験 */}
              <div>
                <label className="block text-white font-bold mb-2">
                  プログラミング経験 <span className="text-accent-yellow">*</span>
                </label>
                <select
                  name="programmingExperience"
                  value={formData.programmingExperience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                >
                  <option value="" className="text-gray-900">選択してください</option>
                  <option value="なし" className="text-gray-900">なし</option>
                  <option value="少しあり" className="text-gray-900">少しあり</option>
                  <option value="ある程度あり" className="text-gray-900">ある程度あり</option>
                  <option value="実務経験あり" className="text-gray-900">実務経験あり</option>
                </select>
              </div>

              {/* AI生成ツール使用経験 */}
              <div>
                <label className="block text-white font-bold mb-2">
                  AI生成ツール使用経験 <span className="text-accent-yellow">*</span>
                </label>
                <select
                  name="aiToolExperience"
                  value={formData.aiToolExperience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                >
                  <option value="" className="text-gray-900">選択してください</option>
                  <option value="なし" className="text-gray-900">なし</option>
                  <option value="ChatGPTを使ったことがある" className="text-gray-900">ChatGPTを使ったことがある</option>
                  <option value="複数のAIツールを使ったことがある" className="text-gray-900">複数のAIツールを使ったことがある</option>
                  <option value="開発にAIを活用している" className="text-gray-900">開発にAIを活用している</option>
                </select>
              </div>

              {/* 興味のある課題分野 */}
              <div>
                <label className="block text-white font-bold mb-3">
                  興味のある課題分野（複数選択可）
                </label>
                <div className="space-y-2">
                  {['農業', '観光', '教育', '地域産業', 'その他'].map((interest) => (
                    <label key={interest} className="flex items-center gap-3 text-white cursor-pointer hover:text-accent-yellow transition-colors">
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleChange}
                        className="w-5 h-5 rounded border-white/30 text-accent-yellow focus:ring-accent-yellow"
                      />
                      {interest}
                    </label>
                  ))}
                </div>
              </div>

              {/* 参加動機 */}
              <div>
                <label className="block text-white font-bold mb-2">
                  参加動機
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-yellow resize-none"
                  placeholder="このハッカソンに参加したい理由をお聞かせください"
                />
              </div>

              {/* 質問・要望 */}
              <div>
                <label className="block text-white font-bold mb-2">
                  質問・要望
                </label>
                <textarea
                  name="questions"
                  value={formData.questions}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-yellow resize-none"
                  placeholder="ご質問やご要望があればお聞かせください"
                />
              </div>

              {/* 同意チェックボックス */}
              <div>
                <label className="flex items-start gap-3 text-white cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 mt-1 rounded border-white/30 text-accent-yellow focus:ring-accent-yellow flex-shrink-0"
                  />
                  <span className="text-sm">
                    <a href="https://metagri-labo.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-yellow">
                      個人情報の取り扱い
                    </a>
                    に同意する <span className="text-accent-yellow">*</span>
                  </span>
                </label>
              </div>

              {/* 送信ボタン */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent-yellow hover:bg-accent-yellow/90 disabled:bg-gray-400 text-base-darkGray font-bold text-lg px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '送信中...' : '申し込む'}
                </button>
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-white text-center">
                  送信に失敗しました。もう一度お試しください。
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
