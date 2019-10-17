# Airbnb 따라하기
## 기간
- 2019.10.14 ~ 2019.10.18

## 배포
- nginx -> 프록시 서버 (80번 포트)
- express -> 앱 서버 (3000번 포트)
- http://45.119.146.48/

## Dependencies
```
{
  "name": "airbnb",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "nodemon": "nodemon ./bin/www",
    "dev": "npm run db_initialize && npm run start",
    "db_initialize": "node ./scripts/db_initialization",
    "bundle": "webpack --watch --mode=development",
    "production": "webpack --mode=production"
  },
  "dependencies": {
    "connect-redis": "^4.0.3",
    "cookie-parser": "~1.4.4",
    "crypto": "^1.0.1",
    "debug": "~2.6.9",
    "dotenv": "^8.1.0",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1",
    "mysql2": "^1.7.0",
    "node-fetch": "^2.6.0",
    "node-sass": "^4.12.0",
    "node-sass-middleware": "0.11.0",
    "nodemon": "^1.19.3",
    "pug": "2.0.0-beta11",
    "redis": "^2.8.0",
    "uuid": "^3.3.3"
  },
  "devDependencies": {
    "@babel/core": "^7.6.4",
    "@babel/preset-env": "^7.6.3",
    "babel-loader": "^8.0.6",
    "babel-plugin-transform-runtime": "^6.23.0",
=======
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.2.0",
    "eslint": "^6.5.1",
    "eslint-loader": "^3.0.2",
    "style-loader": "^1.0.0",
    "webpack": "^4.41.0",
    "webpack-cli": "^3.3.9"
  }
}
```

## 구현사항
- 유저데이터 / 숙소데이터 조회 API
  - 코드 이해가 편하도록 모듈화에 신경씀
  - 미들웨어 적극 활용
- util_csv.js
  - csv파일 DB INSERT
  - batch job으로는 구현하지 못한 상태
- util_encryption.js
  - 유저비밀번호 암호화 
  - 저장된 salt를 이용하여 로그인되는 비밀번호 비교
- ORM(Sequelize)
  - DB테이블 생성 및 객체 간 관계 설정
- JWT
  - access-token만 구현된 상태
  - token검증 / admin검증 / decode함수 구현
  - util_jwt 및 auth.middleware.js 참고
- nginx을 이용한 배포
  - nginx을 80번 포트, express를 3000번 포트로 설정
  - 현재 80번 포트로 접속 시 파비콘이 뜨지 않는 문제 존재

## 시작하기
1. git clone
2. npm install
3. airbnb/.env 생성
   - airbnb/docs/airbnb.env 참고 
   - dotenv 환경변수 모듈 사용을 위한 것
   - 각자의 설정에 맞춰 환경변수를 입력할 것
        ```javascript
        MYSQL_HOST=     //DB서버 host
        MYSQL_USER=     //DB서버 User name
        MYSQL_PASSWORD=     //DB서버 User password
        MYSQL_DATABASE=     //DB서버 Database name

        JWT_SECRET=     //Json Web Token 발급에 쓰일 Secret key
        JWT_ISSUER=     //Json Web Token 발행자
        ```
4. airbnb/config/config.json 생성
   - airbnb/docs/sequelizeConfig.json 참고
   - ORM(Sequelize) 사용을 위한 것
   - 각자의 설정에 맞춰 변수를 입력할 것
        ```json
        {
            "development": {
                "username": "DB접속할 유저네임",
                "password": "DB접속할 유저패스워드",
                "database": "DB의 Database이름",
                "host": "DB서버 host",
                "dialect": "DB서버 종류",
            },
            "test": {
                "username": "",
                "password": "",
                "database": "",
                "host": "",
                "dialect": ""
            },
            "production": {
                "username": "",
                "password": "",
                "database": "",
                "host": "",
                "dialect": ""
            }
        }
        ```
5. npm install pm2 -g
6. sudo apt-get install nginx
7. nginx 설정을 알맞게 수정한 뒤, pm2로 구동시키면 된다.