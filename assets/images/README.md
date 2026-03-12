# 画像ファイルについて

このフォルダに以下の画像ファイルを追加してください。
ファイルが存在しない場合、サイトは CSS グラデーションと SVG アイコンにフォールバックするため、
画像なしでも問題なく表示されます。

## 必要な画像ファイル

| ファイル名 | 推奨サイズ | 使用箇所 | 推奨テーマ |
|---|---|---|---|
| `hero.jpg` | 1920×1080px 以上 | ヒーローセクション背景 | 瀬戸内海・四国の風景、日本の霊場 |
| `shikoku-henro.jpg` | 800×560px 以上 | 四国遍路カード | お遍路の風景、寺院、巡礼路 |
| `setouchi-cruise.jpg` | 800×560px 以上 | 瀬戸内クルーズカード | 直島・尾道・瀬戸内の海景色 |
| `bamboo.jpg` | 800×560px 以上 | バンブーカード | 竹林、タケノコ |

## 推奨フォーマット
- 形式: JPEG（.jpg）または WebP（.webp）
- 品質: 80〜90%
- 軽量化ツール: [Squoosh](https://squoosh.app/) を推奨

## Unsplash 参考フォト（ライセンスフリー）
以下から適切な写真を選んでください。

- 瀬戸内・日本の海: https://unsplash.com/s/photos/setouchi-japan
- 四国・寺院: https://unsplash.com/s/photos/shikoku-temple
- 竹林: https://unsplash.com/s/photos/bamboo-forest-japan

## GitHub Pages デプロイ手順
1. このフォルダ（`loyalx-website/`）を GitHub リポジトリのルートとして push
2. GitHub Settings > Pages > Source を `main` ブランチのルートに設定
3. カスタムドメイン `loyalx.co.jp` を設定（DNS の CNAME レコードを `<username>.github.io` に向ける）
