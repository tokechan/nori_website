# Next.js サイトからS3+CloudFrontへの段階的移行計画
正直まだ迷っている。。。。。
構成を変更します！！！

本日更新！！！

フロントエンド	Next.js（App Router / SSG）
バックエンド（API）	Next.js API Routes（Node.js）※別サーバーで実行
データベース	Neon（PostgreSQL）
ホスティング	S3（静的ファイル） + CloudFront（CDN）
デプロイ	GitHub Actions で S3 に自動アップロード

## 背景

現在のNext.jsウェブサイト「UNLABELING」をより費用効率の高いS3+CloudFront構成に移行するための段階的な計画です。この移行により、SSRからSSGへの変更が必要となりますが、低コストで高性能な静的ウェブサイトホスティングが可能になります。

## 移行のメリット

- **コスト効率**: S3のストレージとCloudFrontを介した配信は非常に低コスト
- **高パフォーマンス**: CloudFrontのグローバルCDNによる高速コンテンツ配信
- **高い信頼性**: AWSインフラストラクチャの信頼性とスケーラビリティ
- **セキュリティ**: S3の直接アクセスを制限し、CloudFrontを介したアクセスのみ許可

## 段階的移行計画

### フェーズ1: 現状分析と準備（1-2日）

1. **現在のコードベース分析**:
   - SSRを使用している箇所を特定
   ```
   components/note-preview.tsx
   app/api/note-posts/route.ts
   app/api/contact/route.ts（推測）
   middleware.ts（認証部分）
   ```

2. **静的データポイントの特定**:
   - ビルド時に取得可能なデータを特定
   - 更新頻度の低いデータ（プロフィールなど）と高いデータ（ブログなど）を区別

3. **テスト環境構築**:
   ```bash
   git checkout -b static-migration
   npm install
   ```

### フェーズ2: 基本ページの静的化（2-3日）

1. **静的なページから順次移行**:
   - HOME, ABOUT, WORKSなど単純なページから開始
   
   ```tsx
   // 例: app/about/page.tsx をSSGに変更
   export const dynamic = 'force-static'; // App Routerでの静的生成強制
   ```

2. **基本ビルドテスト**:
   ```bash
   next build
   # 出力の.nextディレクトリのサイズと内容を確認
   ```

### フェーズ3: 動的データ取得の静的化（3-4日）

1. **API Routes修正**:
   ```tsx
   // 例: app/api/note-posts/route.ts の修正
   import { NextResponse } from 'next/server'
   
   // ビルド時に実行されるデータ取得関数
   async function getNotePostsData() {
     const response = await fetch('https://note.com/unlabeling/rss')
     // 以下処理は変更なし
   }
   
   // データを事前取得してJSONファイルとして出力
   export async function generateStaticParams() {
     const posts = await getNotePostsData()
     // ここでデータを処理し、静的に出力されるファイルに含める
     return []
   }
   
   // 静的なレスポンスを返す
   export function GET() {
     // public/data/note-posts.json に事前ビルドしたデータを配置
     return NextResponse.json({ posts: [] }) // 実際のデータに置き換え
   }
   
   export const dynamic = 'force-static'
   ```

2. **コンポーネント修正**:
   ```tsx
   // components/note-preview.tsx の修正
   
   // 静的なデータ取得に変更
   async function getNotePostsData() {
     // オプション1: ビルド時にデータを事前取得
     // オプション2: public/data/に置いた静的JSONを読み込む
     const data = await import('@/public/data/note-posts.json')
     return data.posts
   }
   ```

### フェーズ4: 認証部分の代替実装（3-4日）

1. **認証機能の静的代替**:
   - CloudFrontのBasic認証または簡易的なクライアントサイド認証に変更
   - 重要度によってはこの機能は別のサービスに移行

   ```tsx
   // 例: 簡易的なクライアントサイド認証
   'use client'
   
   import { useState, useEffect } from 'react'
   
   export default function ProtectedPage() {
     const [isAuthenticated, setIsAuthenticated] = useState(false)
     
     // 認証状態をローカルストレージから回復
     useEffect(() => {
       const token = localStorage.getItem('auth-token')
       setIsAuthenticated(token === 'authenticated')
     }, [])
     
     if (!isAuthenticated) {
       return <LoginForm onLogin={() => {
         localStorage.setItem('auth-token', 'authenticated')
         setIsAuthenticated(true)
       }} />
     }
     
     return <ProtectedContent />
   }
   ```

### フェーズ5: フォーム処理の代替実装（2-3日）

1. **コンタクトフォームの静的代替**:
   - Formspree, Netlify Forms, AWS Lambdaなどの外部サービスに切り替え
   
   ```tsx
   // 例: Formspreeを使用
   'use client'
   
   export default function ContactForm() {
     return (
       <form action="https://formspree.io/f/your-form-id" method="POST">
         <input type="text" name="name" />
         <input type="email" name="email" />
         <textarea name="message"></textarea>
         <button type="submit">送信</button>
       </form>
     )
   }
   ```

### フェーズ6: 静的エクスポートとテスト（2-3日）

1. **next.config.js修正**:
   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export', // 静的HTMLファイルの出力
     images: {
       unoptimized: true // S3+CloudFrontでの使用では必要
     },
     // 他の設定はそのまま
   }
   ```

2. **ビルドとエクスポート**:
   ```bash
   next build
   # outディレクトリに静的ファイルが出力されていることを確認
   ```

3. **ローカルテスト**:
   ```bash
   npx serve out
   # ブラウザで http://localhost:3000 にアクセスして動作確認
   ```

### フェーズ7: AWS環境構築とデプロイ（2-3日）

1. **S3バケット作成**:
   ```bash
   aws s3 mb s3://your-bucket-name
   # または管理コンソールから作成
   ```

2. **CloudFront設定**:
   - S3バケットをOriginとして設定
   - OAIを作成し、S3への直接アクセスを制限
   - キャッシュ設定の最適化

3. **初回デプロイ**:
   ```bash
   aws s3 sync out s3://your-bucket-name
   # CloudFrontのキャッシュを確認
   ```

### フェーズ8: CI/CDとデプロイ自動化（2-3日）

1. **GitHub Actions設定**:
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to S3 and invalidate CloudFront
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: aws-actions/configure-aws-credentials@v1
           with:
             aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
             aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
             aws-region: ap-northeast-1
         - run: aws s3 sync out s3://your-bucket-name --delete
         - run: aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"
   ```

2. **定期ビルド設定（オプション）**:
   - 定期的にデータを更新する場合、スケジュールされたビルドを設定

### フェーズ9: 最終テストと移行（2-3日）

1. **本番環境での徹底的なテスト**:
   - すべてのページの動作確認
   - フォーム送信テスト
   - 各種デバイスでの表示確認

2. **DNSの切り替え**:
   - CloudFrontディストリビューションに向けてDNSを設定
   - TTL値を低く設定して素早く反映させる

### フェーズ10: 監視と最適化（継続的）

1. **アクセス分析の設定**:
   - Google Analyticsの実装
   - CloudWatchでのメトリクス監視

2. **パフォーマンス最適化**:
   - Lighthouseスコアの確認と改善
   - 画像最適化の見直し

## 注意点と推奨事項

1. **各フェーズ後のテスト**:
   - フェーズごとに徹底的なテストを実施
   - 問題があれば前のフェーズに戻り修正

2. **データ更新戦略**:
   - ブログやメディア情報など頻繁に更新するコンテンツはどう扱うか事前に計画
   - 更新頻度に応じた自動ビルド設定

3. **バックアップ体制**:
   - 移行前の状態を複数ポイントでバックアップ
   - ロールバック手順の準備

4. **静的サイトの制限事項**:
   - ユーザー入力に基づく動的な処理はクライアントサイドで実装
   - APIコールが必要な機能はJamstack的アプローチで代替

## 期待されるタイムライン

合計で約3-4週間の実装期間を見込みます。各フェーズの終了時にはレビューを行い、必要に応じて計画を調整します。

## リソース

- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Developer Guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions) 
