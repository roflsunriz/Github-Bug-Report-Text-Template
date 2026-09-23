# 変更履歴

このプロジェクトの主な変更はこのファイルに記録します。

書式は [Keep a Changelog](https://keepachangelog.com/ja/1.1.0/) に基づきます。

## [Unreleased]

### Fixed

- CI と Dependabot の分類の実行順が前後しても更新を取りこぼさないよう、同じ PR 番号と head SHA を再照合する経路を追加した。

### Changed

- デプロイワークフローの実行環境を最新のアクションに追随させるため、`actions/checkout` を v4 から v7、`actions/setup-python` を v5 から v7、`actions/upload-pages-artifact` を v3 から v5、`actions/deploy-pages` を v4 から v5 へ更新した。

- 依存更新を安全に省力化するため、Dependabot の patch／minor PR を既存 CI の全チェック成功後に自動取り込みし、失敗ジョブを一度再実行する設定を追加した。
- 作業開始時の共通指針見落としを防ぐため、調査やコマンド実行より前に `COMMON-AGENTS.md` を先頭から末尾まで読み、EOFを確認する必須ゲートを追加した。
