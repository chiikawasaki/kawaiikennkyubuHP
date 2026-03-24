# かわいい研求部HP

Next.jsで構築された成蹊大学かわいい研求部の公式ホームページです。

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

### 3. ビルド（静的エクスポート）

```bash
npm run build
```

`out` ディレクトリに静的ファイルが生成されます。

## プロジェクト構造

```
kawaii/
├── app/              # Next.js App Router
│   ├── layout.tsx    # ルートレイアウト（共通レイアウト）
│   ├── page.tsx      # ホームページ
│   ├── about/        # Aboutページ
│   └── globals.css   # グローバルスタイル
├── components/       # Reactコンポーネント
│   ├── Header.tsx    # ヘッダー
│   ├── Sidebar.tsx   # サイドバー（訪問者カウンター含む）
│   └── Footer.tsx    # フッター
├── public/           # 静的ファイル
│   └── image/       # 画像ファイル
└── package.json
```

## 主な機能

- **共通レイアウト**: `app/layout.tsx`で全ページに共通のレイアウトを適用
- **訪問者カウンター**: LocalStorageとSessionStorageを使用
- **静的サイト生成**: `next.config.js`で静的エクスポートを設定
