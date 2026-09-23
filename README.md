# Github Bug Report Text Template

Bug report template distribution site:

- [Open the template](https://roflsunriz.github.io/Github-Bug-Report-Text-Template/)

Local preview:

```bash
mkdocs serve
```

## 依存更新の自動処理

Dependabot は対象の依存関係を毎週確認します。patch／minor 更新は PR のチェック（CI）が成功した後に自動で squash merge されます。CI の失敗ジョブは 1 回だけ再実行します。再失敗した PR は残して手動で修正します。major 更新は手動で確認します。マージ後はデプロイ workflow を明示起動します。
