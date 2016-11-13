# vue-nippo-spa

## 概要
* 本アプリケーションは[YAPC::Hokkaido 2016](http://yapcjapan.org/2016hokkaido/)の「Vue.jsによるWebアプリケーション開発」のトーク用に実装したサンプルアプリケーションです。
* [Vue.js](https://github.com/vuejs/vue) + [vue-router](https://github.com/vuejs/vue-router) + [vue-resource](https://github.com/pagekit/vue-resource) + [Lumen](https://lumen.laravel.com/)

## 必要条件
* PHP 5.6.4以上
* MySQLがローカル環境にインストール済みとし、root/パスワード無しでアクセス可能とする

## 準備

### DBのマイグレーション
composer経由で各種ライブラリをインストールします
```
$ composer install
```

### DBのマイグレーション
APIで利用するDBのマイグレーションを実行します
```
$ vendor/bin/phpmig migrate
```

### npmパッケージをインストール
各種フロントエンドパッケージをインストールします
```sh
$ npm install
```

## 使い方

### APIの起動
PHPのビルトインサーバーを利用してAPIを起動します
```
$ php -S localhost:8000 api/public/index.php
```

### httpサーバーの起動
```sh
$ npm start
```

---

以下はAPIドキュメントです

## APIドキュメント

### Routing
* GET /api/nippoes
* GET /api/nippoes/:id
* POST /api/nippoes
* PUT /api/nippoes/:id
* DELETE /api/nippoes/:id

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
```
$ curl -v http://localhost:8000/api/nippoes | jq .
$ curl -v http://localhost:8000/api/nippoes/1 | jq .
$ curl -v -X -H "Accept: application/json" -H "Content-type: application/json" -X POST -d ' {"content": "hoge"}' http://localhost:8000/api/nippoes | jq .
$ curl -v -X -H "Accept: application/json" -H "Content-type: application/json" -X PUT -d ' {"content": "fuga"}' http://localhost:8000/api/nippoes/1
$ curl -v -X -H "Accept: application/json" -H "Content-type: application/json" -X DELETE http://localhost:8000/api/nippoes/1
```
