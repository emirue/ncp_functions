[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/emirue/ncp_functions/LICENSE)

# ncp_functions

## Naver Cloud Platform 의 Cloud Functions 사용시에 사용할 함수모음

## Install
#### npm
설치는 npm 을 이용하여 아래의 명령어로 설치할 수 있습니다.
```
$ npm install ncp_functions
```

## Usage
```
const ncpFunctions = require('ncp_functions');

function main(params) {
    const parseParams = ncpFunctions.parseParams(params);
    console.log(parseParams);
    //=> {headers: ..., query: ...} 
}
```

## API
### .parseParams(object)
Naver Cloud Platform 의 Cloud Functions 에서 실행되는 함수에서 받은 변수 params 를 파싱하는 함수입니다.
headers, query 등이 반환됩니다.
#### object
Type: object


