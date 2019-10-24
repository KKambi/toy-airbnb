# Airbnb 따라하기
> 에어비엔비의 숙소 필터링을 따라하는 토이 프로젝트입니다.<br> React로 view를, Node & Express로 API서버를 구현하여 정보를 받아옵니다.

## 기간
- 2019.10.14 ~ 2019.10.18
- 2019.10.21 ~ 2019.10.25
---
## 제작
- KKambi
- bok03220@gmail.com

---

## 개발환경
- Node / Express
- create-react-app을 사용한 react 구현
- ORM (Sequelize)
- MySQL
---
## 배포
- nginx -> 프록시 서버 (80번 포트)
- express -> api 서버 (3001번 포트)
- React 정적파일을 nginx로, api를 express로 배포함
- http://45.119.146.48/
---
## 구현사항
***백엔드***
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

***프론트엔드***
- 모든 숙소정보를 받아와 초기 렌더링
  - 데이터의 수가 많아 10개로 제한한 상태
  - 페이지네이션 구현 필요
- 인원 조건으로 해당하는 숙소만 조회
  - 인원 필터링 가능
  - 성인/어린이/유아에 대한 인원 validation
- 가격 슬라이더
  - 가격 필터링은 미구현 상태
  - 슬라이더 컴포넌트를 Material UI에서 가져와서 사용

***공통***
- nginx을 이용한 배포
  - nginx을 80번 포트, express를 3001번 포트로 설정
  - react build 파일을 nginx로 배포한 상태
  - 현재 80번 포트로 접속 시 파비콘이 뜨지 않는 문제 존재
- 서버 2대 존재 (app + DB)
  - app서버 = nginx + express
  - 별도의 DB서버를 두어 API서버에서 통신함

---
## 사용법
***react 배포하기 (client 폴더)***
1. 모듈 설치
    ```
    npm install
    ```
2. react 관련파일 빌드
   ```
   npm run build
   ```
3. nginx 정적파일 경로설정 및 프록시 설정
    ```bash
    # /etc/nginx/sites-available/airbnb-react
      server {
              listen 80;
              location / {
                      root    ***build폴더위치***;
                      index   index.html;
                      try_files $uri $uri/ /index.html;
              }
              location /api {
                      proxy_pass ***서버주소***/api/;
              }
      }
    ```
4. 복사
    ```bash
    ln -s /etc/nginx/sites-available/airbnb-react /etc/nginx/sites-enabled/airbnb-react
    ```
5. 빌드 디렉토리에 nginx가 접근할 수 있도록 권한 수정
    ```bash
    # /etc/nginx/nginx.conf
    user ***권한이 있는 유저이름***
    ...
    ``` 

***api 서버 배포하기 (server 폴더)***
1. git clone
2. npm install
3. airbnb/.env 생성
   - airbnb/docs/airbnb.env 참고 
   - dotenv 환경변수 모듈 사용
   - 각자의 설정에 맞춰 환경변수 입력
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
6. pm2 start /bin/www