# Nippo [![wercker status](https://app.wercker.com/status/844ced4f65f2dfadc72f81c0532cd50d/s/master "wercker status")](https://app.wercker.com/project/byKey/844ced4f65f2dfadc72f81c0532cd50d)

## 概要
* 本アプリケーションは[YAPC::Hokkaido 2016](http://yapcjapan.org/2016hokkaido/)の「Vue.jsによるWebアプリケーション開発」のトーク用に実装したサンプルアプリケーションです。
* 自分専用の日報Webアプリケーション。日報の投稿・一覧表示・削除。
* [Vue.js](https://github.com/vuejs/vue) + [vue-router](https://github.com/vuejs/vue-router) + [vue-resource](https://github.com/pagekit/vue-resource) + [Lumen](https://lumen.laravel.com/)

## 必要条件
* PHP 5.6.4以上
  * Lumen 5.3で必要
* MySQLがローカル環境にインストール済みとし、root/パスワード無しでアクセス可能とする

## 準備
### DBのマイグレーション
APIで利用するDBのマイグレーションを実行します。詳しくは[migrationsディレクトリ](./migrations)をご確認ください。

```
# DBマイグレーションに必要なライブラリをダウンロードします
$ composer install

# DBマイグレーションを実行します
$ vendor/bin/phpmig migrate
```

### npmパッケージをインストール
各種フロントエンドパッケージをインストールします

```
$ npm install
```

## 使い方
### Nippoをローカル起動
* 下記コマンド実行後にブラウザで `http://127.0.0.1:8080/#/` が立ち上がり閲覧できるようになります。
* 内部でhttpサーバー、API、ビルドを同時に実行します。

```
$ npm start
```

---

以下はAPIドキュメントです

## APIドキュメント

### Routing
* [GET /api/nippoes](#get-apinippoes)
* [GET /api/nippoes/:id](#get-apinippoesid)
* [POST /api/nippoes](#post-apinippoes)
* [PUT /api/nippoes/:id](#put-apinippoesid)
* [DELETE /api/nippoes/:id](#delete-apinippoesid)

#### GET /api/nippoes
##### リクエストパラメーター
無し

##### レスポンス
```sh
[
  {
    "id": 5,
    "content": "hoge",
    "created_at": "2016-11-12 06:45:56",
    "updated_at": "2016-11-12 06:45:56"
  },
  {
    "id": 6,
    "content": "hoge",
    "created_at": "2016-11-12 07:00:52",
    "updated_at": "2016-11-12 07:00:52"
  }
]
```

#### GET /api/nippoes/:id
##### リクエストパラメーター
* id: 日報ID

##### レスポンス
```sh
{
  "id": 5,
  "content": "hoge",
  "created_at": "2016-11-12 06:45:56",
  "updated_at": "2016-11-12 06:45:56"
}
```

#### POST /api/nippoes
##### リクエストパラメーター
* content: 日報本文

##### レスポンス
```sh
{
  "content": "hoge",
  "updated_at": "2016-11-12 07:08:29",
  "created_at": "2016-11-12 07:08:29",
  "id": 7
}
```

####  PUT /api/nippoes/:id
##### リクエストパラメーター
* id: 日報ID

##### レスポンス
```sh
{
  "id": 7,
  "content": "fuga",
  "created_at": "2016-11-12 07:08:29",
  "updated_at": "2016-11-12 07:09:54"
}
```

####  DELETE /api/nippoes/:id
##### リクエストパラメーター
* id: 日報ID

##### レスポンス


### 確認用curl
手元でAPIの挙動を確認したい際にご利用ください。

```
$ curl -v http://localhost:8000/api/nippoes | jq .
$ curl -v http://localhost:8000/api/nippoes/1 | jq .
$ curl -v -X -H "Accept: application/json" -H "Content-type: application/json" -X POST -d ' {"content": "hoge"}' http://localhost:8000/api/nippoes | jq .
$ curl -v -X -H "Accept: application/json" -H "Content-type: application/json" -X PUT -d ' {"content": "fuga"}' http://localhost:8000/api/nippoes/1
$ curl -v -X -H "Accept: application/json" -H "Content-type: application/json" -X DELETE http://localhost:8000/api/nippoes/1
```
