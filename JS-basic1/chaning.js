// 옵셔널 체이닝 ->
// 사용자가 여러명 -> 몇명 주소정보
let user = {};
// user.address.street;  이러면 오류
// 그리고 존재하지 않는 페이지에 접근하려고 한다면 그것도 오류!

// ?. 를 사용해서 앞의 평가대상이 null 혹은 undefined면 평가 멈추고 undefined를 반환!
alert(user?.address?.street);

// undefined를 주고 에러 발생 안한다!

// user객체 자체가 없어도 에러 발생안함!
// ?. 은 존재하지 않아도 괜찮은 대상에게만 사용해라!!
// 에러 조기에 발견 못하면 디버깅 어려워져서!!

// ---------- 심볼
// js는 객체 프로퍼티 키로 문자형과 심볼형만 허용!
// 숫자와 불린은 불가능!

// 심볼은 유일한 식별자를 만들고 싶을때 사용!
// 디버깅시 이름 붙이면 아주 유용! -> 설명이 bora인거!
let id = Symbol("bora");

// Symbol안에 내용 같아도 이름이 달라서 상관없다
let id1 = Symbol("b");
let id2 = Symbol("b");
console.log(id1 == id2); //false
// 심볼은 문자형으로 변환되지 않는다! -> id1.toString()으로 부르기!
// Symbol(id) 라고 출력!
console.log(id1.toString());
console.log(id1.description);

// 숨김 프로퍼티
let user2 = {
  name: "kk",
};

let id3 = Symbol("dd");
user2[id3] = 1;

console.log(user2[id3]); // 접근은 가능
