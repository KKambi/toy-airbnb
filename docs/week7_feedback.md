<비동기 프로그래밍>
1. await는 현재 함수 스코프의 실행을 멈추지만, then은 멈추지 않는다.
2. 따라서 await는 현재 스코프 뒤의 모든 코드를 then 핸들러 안에 같이 들어있는 것처럼 실행된다. (blocking)
3. await X() suspends execution of the current function, while promise.then(X) continues execution of the current function after adding the X call to the callback chain

<ORM>
1. If you don't define a primaryKey then sequelize uses id by default.
If you want to set your own, just use primaryKey: true on your column.