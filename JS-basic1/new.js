// new 연산자와 생성자 함수를 사용하면 유사한 객체 여러개를 쉽게 만들기 가능
// 생성자 함수 -> 첫글자 대문자 , new붙이기!
function User(name) {
  // this = {};
  this.name = name;
  this.isAdmin = false;
  // return this;
}

let user = new User("보라");
// 빈객체를 만들어this에 할당함
// 함수 본문을 실행 this에 새로운 프로퍼티를 추가해 this를 수정
// this를 반환!

// new를 써서 만들면 this가 암시적으로 만들어지고 this가 반환됨!

// 대박.. 같은 객체를 반환시키면됨!
let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}
let a = new A();
let b = new B();
console.log(a == b);

//
function Calculator() {
  this.read = () => {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };

  this.sum = () => {
    return this.a + this.b;
  };

  this.mul = () => {
    return this.a * this.b;
  };
}

function Accumulator(val) {
  this.value = val;
  this.read = () => {
    this.value += +prompt("더할 값: ", 0);
  };
}

let accumulator = new Accumulator(1);
