let me = "s";
me = 123456;
// 변수는 자료형에 관계없이 모든 데이터일 수 있다
// 문자도 되고 숫자도 됨!
// 동적타입 언어!
//
let n = 123;
n = 12.345;

// 숫자형은 정수 및 부동소수점 숫자를 나타냄
// Infinity, -Infinity, NaN
// 1 / 0 하면 무한대!
// NaN은 계산 중에 에라가 발생했다는걸 나타내주는 값
// BigInt는 매우 큰데 끝에 N을 붙이면 만들 수 있다
const bigInt = 1234567890123456789012345678901234567890n;

let str = "hello";
let str2 = "single";
// js에서는 "" '' 이게 차이가 없다!
let phrase = `${str} + ${str2}`;

let age = null; // null값만 포함하는 별도의 자료형
// null은 여기서 존재하지 않는 값 알수 없는 값, 비어있는 알수없는 값을 나타냄
//
let age2;
alert(age2); // undefined!

// 객체는 다른 원시 자료형과 다르게 복잡한 엔티티를 표현할 수 있다!
typeof age; // object
typeof true; // boolean

let name = "Ilya";
alert(`hello ${1}`); // hello 1
alert(`hello ${"name"}`); // hello name
alert(`hello ${name}`); // hello Iyla
