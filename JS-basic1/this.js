//객체는 실제 존재하는 개체 즉 엔티티를 표현하고자 할때 사용
let user = {
  name: "john",
  age: 30,
};
// js에서는 객체의 포르퍼티에 함수를 할당해 행동을 부여!

user.sayHi = () => {
  console.log("hello");
};
user.sayHi();

// 객체를 사용하여 엔티티를 표현하는 방식 oop
user = {
  sayHi2() {
    console.log("say hi2");
  },
};

// 매서드 내에서 this 키워드를 사용하면 객체에 접근 가능
// this는 메서드를 호출할때 사용된 객체를 나타냄!
// user.sayHi()를 실행하는 동안에는 this가 user를 나타냄!

// 객체 내부에서 프로퍼티를 사용해야한다면 this.name처럼 사용해주자!
// this값은 런타임에서 결정 -> 동일 함수라도 다른 객체에서 호출했다면 참조값이 달라진다
//
