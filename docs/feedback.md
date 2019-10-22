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
3. 객체 관계를 설정하여 DB Table을 생성했다고 해서, 우리가 모델 객체를 쓸 때 관계가 붙어있는 게 아니다.
   - 모델 객체 내에도 관계를 표현해줘야 함
   - 그래야만 다른 파일에서도, models객체에 붙어있는 우리의 custom모델을 제대로(관계가 붙어있는 채로) 사용할 수 있다.
4. 특정 유저만 가능한 쿼리문일 경우, where절을 이용하여 접속한 유저의 아이디를 테이블의 foreign key (ex. host_id / guest_id)와 적절히 비교하면 된다.

## MySQL / 쿼리문
2. DB를 만들면, 특정 사용자에게 접근 권한을 부여해야 사용할 수 있다.

## express router
1. './routes' 처럼 뒷 경로를 생략하면, 자동으로 index를 찾는다 -> '/routes/index'와 동일함

## JS
1. 객체 내에서 arrow function으로 함수를 정의할 경우, this는 객체 자신을 가리키지 않고 undefined를 나타낸다.
2. 객체 내에선 function(){}으로 함수정의할 것!

## Webpack
1. babel-plugin-transform-runtime은 예전 버전의 바벨로더와 호환된다. @babel/plugin-transform-runtime를 써야함!

## nginx
1. nginx를 프록시 서버로 설정할 시, 80번 포트로 접속할 때 파비콘이 적용되지 않는 문제??????

## eslint 적용하기
***주의점***
1. open하는 폴더가 무엇이냐에 따라 적용될 수도, 아닐 수도 있다
2. 왜냐하면 VS Code 에디터 자체에서 Extension으로 활용하는 것이기 때문
3. open하는 폴더의 최상위 폴더에 eslint config 파일이 있어야 한다 (package.json 안에 적용하거나, .eslintrc 파일을 두거나)
  
***적용***
1. VS Code ESLint Extension 설치
2. eslint / eslint-config-airbnb 설치
3. eslint-config-airbnb peerDependencies 설치
4-1. open하는 폴더의 최상위경로에 .eslintrc 구현
4-2. 또는 최상위경로의 package.json에 eslint 설정 구현

## eslint / babel-eslint 주의점
- 최상위 프로젝트에 eslint / babel-eslint 모듈이 둘 다 있어야 안에 서브 폴더들을 모두 검사할 수 있다

## arrow function
```javascript
// 객체 리터럴 표현을 반환하기 위해서는 함수 본문(body)을 괄호 속에 넣음:
params => ({foo: bar})
```

## React
***fetch initial data***
1. useEffect API 문서를 자세히 봤더라면 금방 알 수 있었다.
2. 두번째 인자로, 감지 엘리먼트를 지정할 수 있다.
3. 이 엘리먼트가 변화했을 때만 useEffect 내의 콜백 함수가 실행되어 re-render
4. 현재는 빈 배열을 준 상태로, 초기 1번만 렌더링된다.
5. 이후 필터링에 의해 stays state가 변화할 경우 이를 적절히 감지하여 re-render할 수 있도록 수정해야 한다.

***페이지네이션 어떻게?????***
1. 어떻게 하나요;;;;;