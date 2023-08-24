// 원시값의 메서드 -> js는 원시값을 마치 객체 다루듯하게 해준다
// string, number , boolean, symbol, null, undefined
//객체의 장점중 하나는 바로 함수를 프로퍼티로 저장할 수 있다는 거!

// String, Number,Boolean, Symbol 이라는 wrapper 객체를 만듬!
//
let str = "hello";
str.toUpperCase();
// 이렇게 했을때 원시값의 프로퍼티인 toUpperCase에 접근하는 순간 특별한 객체가 만들어짐
// 문자열 값을 알고 있고 저 함수를 가진 String 객체!!

let n = 1.23456;
n.toFixed(2); // 1.23
// 그렇다고 해서 내가 직접 Wrapper객체를 만드는건 추천하지 않는다!
// null / undefined는 메서드 없음!

let str2 = "h";
str2.test = 5;
// 이러면 use strict 모드에서는 에러!
// 그냥 모드에서는 undefined가 출력된다!

// 왜냐면 원시값의 함수를 주는게 아니라 래퍼객체의 함수를 쓰는거여서!!!

// 객체는 원시값보다 무겁고 내부 구조를 유지하기 위해 추가 지원을 사용
// 그래서 원시타입에서 객체처럼 메서드를 가지면 가벼운 특징 사라짐 -> 그래서 object wrapper 가 생성

let billion = 1e9; // 1과 9개의 0
let ms = 1e-6; // 1에서 왼쪽으로 6번 소수점 이동
// 0.000001;

// 16진수 -> 0x를 사용 2진수는 0b 8진수는 0o
let s = 0xff;
let a = 0b1111;
let b = 0o377;

console.log(s);
console.log(a);
console.log(b); //10진수 변환되서 나옴 전부다

// num.toString(base) -> base진법으로 num표현하고 이걸 문자형 반환
let num = 255;
console.log(num.toString(16));
console.log(num.toString(2));
// base중 최댓값은 36이다 -> 0-9, A-Z

// Math.floor 버림 Math.ceil 올림 Math.round 반올림
// 근데 toFiexed도 반올림 해주긴 함! -> 애는 문자열로 출력함! 그리고 소수부 더 크면 0으로 뒤 채움!
let num2 = 1.23456;
console.log(Math.floor(num2 * 100));

console.log(0.1 + 0.2);
// 0.30000000000000004 이게 나옴!
// 0.1과 02는 이진법으로 표현시 무한소수가 됨
// 정밀도 손해를 없애려면 toFixed(n)을 쓰자

let sum = 0.1 + 0.2;
console.log(Number(sum.toFixed(2)));
// 아님 +를 앞에 적으면 숫자가 됨!

// NAN은 에러를 나타내는 값 isNaN -> NaN인지 확인
// NaN === NaN 하면 false임 왜나면 자기자신 포함에서 어떤값과도 같지 않아서

// parseInt parseFloat은 엄격하지는 않게 숫자로 바꿔줌
// css 나 통화기호를 붙일때 이것들을 숫자로 변환하기 위해!!
parseInt("100px"); // 100
parseFloat("12.3.4"); // 12.3
parseInt("0xff", 16);

// Math.random. Math.max(5,-3,2,1 ...) Math.min, Math.pow

let u1 = +prompt("수1: ", 0);
let u2 = +prompt("수2 :", 0);
console.log(u1 + u2);

function readNumber() {
  let num;

  do {
    num = prompt("number? ", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}
