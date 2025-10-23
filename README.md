# ワーケーション型 地方創生×AIハッカソン in 茨城 - ランディングページ

茨城の魅力ある地域に滞在しながら、AIで課題解決に取り組むワーケーション型ハッカソンのランディングページです。

## プロジェクト概要

- **イベント名**: ワーケーション型 地方創生×AIハッカソン in 茨城
- **キックオフセミナー**: 2026年1月末～2月上旬（決定次第お知らせします）
- **会場**: 鯉渕学園農業栄養専門学校（茨城県水戸市）
- **参加形態**: 現地参加 or オンライン参加（ハイブリッド開催）
- **参加費**: 無料

## 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form**: Google Apps Script連携
- **Hosting**: Vercel / GitHub Pages

## ディレクトリ構造

```
ibaraki-hackathon-lp/
├── public/
│   ├── favicon.ico
│   └── images/
│       └── logos/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # レイアウト・メタデータ設定
│   │   ├── page.tsx          # メインページ
│   │   └── globals.css       # グローバルスタイル
│   ├── components/
│   │   ├── sections/         # 各セクションコンポーネント
│   │   │   ├── Hero.tsx
│   │   │   ├── TargetAudience.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── KickoffSeminar.tsx
│   │   │   ├── ProgramFlow.tsx
│   │   │   ├── Challenges.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── Venue.tsx
│   │   │   ├── Organizers.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── ApplicationForm.tsx
│   │   └── shared/           # 共通コンポーネント
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── lib/
│   └── styles/
├── package.json
├── tailwind.config.ts
└── README.md
```

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### 3. ビルド

```bash
npm run build
```

### 4. 本番環境での起動

```bash
npm start
```

## 主な機能

### 11のセクション構成

1. **Hero（ファーストビュー）**: キャッチコピーとCTA
2. **こんな方におすすめ**: ターゲットオーディエンス
3. **プログラムの6つの特徴**: Vibe Coding、ワーケーション型など
4. **キックオフセミナー詳細**: 日程、プログラム、アクセス情報
5. **プログラム全体の流れ**: 4つのPhase説明
6. **解決する地域課題の例**: 農業、観光分野の課題例
7. **参加するメリット**: スキル習得、ネットワーキングなど
8. **会場紹介**: 鯉渕学園農業栄養専門学校
9. **運営体制**: 主催・協力団体の紹介
10. **FAQ**: よくある質問
11. **申込フォーム**: Google Apps Script連携

### SEO対策

- メタデータ最適化（タイトル、description、keywords）
- OGP設定（Twitter Card含む）
- 構造化データ（JSON-LD）
- ファビコン設定

### レスポンシブデザイン

- Mobile: ~640px
- Tablet: 641px~1024px
- Desktop: 1025px~

## カラーパレット

- **プライマリー**: #2D7E4E（深緑）
- **プライマリーライト**: #5CB85C（明るい緑）
- **プライマリーダーク**: #1F5A36（濃い緑）
- **アクセントブルー**: #4A90E2
- **アクセントイエロー**: #F5A623

## フォーム連携

申込フォームはGoogle Apps Scriptと連携しています。
フォームのエンドポイントURLは `src/components/sections/ApplicationForm.tsx` で設定されています。

```typescript
const response = await fetch(
  'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
  {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }
);
```

## デプロイ

### Vercel（推奨）

```bash
# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel
```

### GitHub Pages

1. `next.config.js` に以下を追加:

```javascript
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. ビルドとデプロイ:

```bash
npm run build
# out/ ディレクトリをGitHub Pagesにデプロイ
```

## ライセンス

このプロジェクトは株式会社生涯現役計画とMetagri研究所の共同制作です。

## お問い合わせ

- **公式サイト**: [https://metagri-labo.com/](https://metagri-labo.com/)
- **お問い合わせ**: [https://metagri-labo.com/contact/](https://metagri-labo.com/contact/)

## 運営

- **主催**: 株式会社生涯現役計画
- **主催**: Metagri研究所 / 株式会社農情人
- **協力**: 鯉渕学園農業栄養専門学校
