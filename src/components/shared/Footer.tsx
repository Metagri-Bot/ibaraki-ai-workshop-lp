export default function Footer() {
  return (
    <footer className="bg-base-darkGray border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* ロゴ・説明 */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Vibe Coding<span className="text-accent-orange">ワークショップ</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              プログラミング不要。AIと話すだけで、<br />
              あなたのアイデアを形にする新体験。
            </p>
          </div>

          {/* リンク */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#vibecoding" className="hover:text-accent-orange transition-colors">
                  Vibe Codingとは
                </a>
              </li>
              <li>
                <a href="#workshop" className="hover:text-accent-orange transition-colors">
                  体験内容
                </a>
              </li>
              <li>
                <a href="#overview" className="hover:text-accent-orange transition-colors">
                  開催概要
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent-orange transition-colors">
                  よくある質問
                </a>
              </li>
              <li>
                <a href="https://metagri-labo.com/contact/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          {/* SNS */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://x.com/Metagrilabo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-accent-orange/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/metagrilabo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-accent-orange/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCAvDULnFToZUnMeMb_Ghhbg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-accent-orange/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              最新情報をSNSでチェック！
            </p>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; 2026 MetagriLabo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
