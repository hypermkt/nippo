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

### 確認用curl
```
$ curl -v http://localhost:8000/api/nippoes | jq .
$ curl -v -X -H "Accept: application/json" -H "Content-type: application/json" -X POST -d ' {"content": "hoge"}' http://localhost:8000/api/nippoes | jq .
$ curl -v -X -H "Accept: application/json" -H "Content-type: application/json" -X PUT -d ' {"content": "fuga"}' http://localhost:8000/api/nippoes/1
```
