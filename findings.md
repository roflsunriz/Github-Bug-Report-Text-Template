# 調査知見

- 文書サイトなのでTypeScript/BunではなくMkDocsのstrictビルドとリンク確認を使う。ローカル表示の成功は公開サイトの表示を証明しない。
- Dependabotの分類がCI完了より遅れた場合は、`callback_workflow_file` の呼出し側を `workflow_dispatch` して現在のPR番号・head SHA・全チェックを再照合する。workflow名を変えるときはこの入力も同時更新する。
- 自動化は古いhead SHA、Dependabot以外の作成者、未完了CIをマージしてはならない。実PRがない状態の静的検査は製品経路の実証ではない。
