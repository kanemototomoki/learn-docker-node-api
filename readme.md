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
| PK | UK | FK| カラム物理名 | カラム論理名 | データ型 | 桁 | NotNull | default | 備考 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| ○ | | | id | ユーザID | int | 指定しない | ○ | | auto_increment, unsigned|
| | | | name | ユーザ名 | varchar | 255 | ○ | | |
| | | | password | パスワード | varchar | 255 | ○ | | |
| | | | created_at | 作成日時 | datetime| | ○ | | | 
| | | | updated_at | 更新日時 | datetime| | ○ | | | 



### posts
| PK | UK | FK | カラム物理名 | カラム論理名 | データ型 | 桁 | NotNull | default | 備考 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| ○ | | | id | 投稿ID | int | 指定しない | ○ | | auto_increment, unsigned |
| | | ○ | user_id | 投稿者ID | int | 指定しない | ○ | | |
| | | | title | タイトル | varchar| 255 | | | | |
| | | | content | 内容 | text | | | | | | |



### template
| PK | UK | FK | カラム物理名 | カラム論理名 | データ型 | 桁 | NotNull | default | 備考 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |

## memo

- Model作成
  ```sh
  root@6853d1488e1c:/app/server/mysql# npx sequelize-cli model:create --name User --underscored --attributes id:integer,name:string,password:string
  ```

- tableの詳細を確認
  ```sql
  mysql> SHOW FULL COLUMNS FROM users;
  ```

  ```sql
  mysql> show CREATE TABLE posts;
  ```
