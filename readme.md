## 概要
- node.js環境でのAPIを作る練習

```sh
server
└── src
│   ├── express // express-generator で作成
│   └── nest    // nest new で作成
└── database    // 共通のDB
```
## アーキテクチャ

| 名前 | バージョン|
| :-: | :-: |
| docker-compose | 3.x |
| node | 12.x |
| express | 4.x |
| sequelize | 6.x |
| mysql | 5.7 |

## テーブル定義

### users
| PK | UK | カラム論理名 | カラム物理名 | データ型 | 桁 | NotNull | default | 備考 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| ○ | | id | ユーザID | int | 指定しない | ○ | | auto_increment, unsigned|
| | | name | ユーザ名 | varchar | 255 | ○ | | |
| | | password | パスワード | varchar | 255 | ○ | | |
| | | created_at | 作成日時 | datetime



### template
| PK | UK | カラム論理名 | カラム物理名 | データ型 | 桁 | NotNull | default | 備考 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
