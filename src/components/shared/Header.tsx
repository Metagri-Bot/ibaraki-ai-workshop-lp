'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Vibe Codingとは', href: '#vibecoding' },
    { label: '体験内容', href: '#workshop' },
    { label: 'タイムテーブル', href: '#schedule' },
    { label: '開催概要', href: '#overview' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
              VC
            </div>
            <span className="font-bold text-base-darkGray hidden sm:block">
              Vibe Codingワークショップ
            </span>
          </Link>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base-darkGray hover:text-accent-orange font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#application"
              className="bg-accent-orange hover:bg-accent-yellow text-base-darkGray font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              申し込む
            </a>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6 text-base-darkGray"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base-darkGray hover:text-accent-orange font-medium px-4 py-2 rounded hover:bg-gray-100 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#application"
                onClick={() => setIsMenuOpen(false)}
                className="bg-accent-orange hover:bg-accent-yellow text-base-darkGray font-bold px-6 py-3 rounded-full text-center transition-all duration-300"
              >
                申し込む
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
