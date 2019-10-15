## 비동기 프로그래밍
1. await는 현재 함수 스코프의 실행을 멈추지만, then은 멈추지 않는다.
2. 따라서 await는 현재 스코프 뒤의 모든 코드를 then 핸들러 안에 같이 들어있는 것처럼 실행된다. (blocking)
3. await X() suspends execution of the current function, while promise.then(X) continues execution of the current function after adding the X call to the callback chain

## ORM
1. If you don't define a primaryKey then sequelize uses id by default.
If you want to set your own, just use primaryKey: true on your column.
2. validate 조건을 건 경우, 유효성 검사를 통과하지 못해 insert되지 못하는 경우가 있다.
    - then/catch로 예외처리를 할 것
    - async/await의 경우 try..catch로 예외처리를 할 것

## MySQL
1. DB를 만들면, 특정 사용자에게 접근 권한을 부여해야 사용할 수 있다.

## express router
1. './routes' 처럼 뒷 경로를 생략하면, 자동으로 index를 찾는다 -> '/routes/index'와 동일함

## JS
1. 객체 내에서 arrow function으로 함수를 정의할 경우, this는 객체 자신을 가리키지 않고 undefined를 나타낸다.
2. 객체 내에선 function(){}으로 함수정의할 것!

## Webpack
1. babel-plugin-transform-runtime은 예전 버전의 바벨로더와 호환된다. @babel/plugin-transform-runtime를 써야함!