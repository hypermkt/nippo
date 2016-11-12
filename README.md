# vue-nippo-spa

## Setup
```sh
$ composer install
```

## migration
```
$ vendor/bin/phpmig migrate
```

## API
```
$ php -S localhost:8000 api/public/index.php
```

### Routing
* GET /api/nippoes
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
$ curl -v -X -H "Accept: application/json" -H "Content-type: application/json" -X POST -d ' {"content": "hoge"}' http://localhost:8000/api/nippoes | jq .
$ curl -v -X -H "Accept: application/json" -H "Content-type: application/json" -X PUT -d ' {"content": "fuga"}' http://localhost:8000/api/nippoes/1
$ curl -v -X -H "Accept: application/json" -H "Content-type: application/json" -X DELETE http://localhost:8000/api/nippoes/1
```
