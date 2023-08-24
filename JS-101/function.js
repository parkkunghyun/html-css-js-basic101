function showMessage() {
  alert("showMessage!");
}
showMessage();

function showMessage2(text) {
  text = text || "빈 문자열"; // ??를 써도 좋다!
}

// 만약 return이 없거나 지시자만 있다면 그냥 undefined를 반환함!
// return 으로 할거면 하나의 줄에서 처리하기! 줄바꿈 없이!!
// return은 ;로 닫아버린다!
/*
    return (
        some + long + ex
        + or
    )
    아님 이렇게!
*/

let sayHi = function () {
  alert("Hello");
};

function sayHi2() {
  alert("hi");
}
let func = sayHi2; // 함수를 복사!!!
func(); // 이게 가능해진다!!

// 이게 콜백!! -> 함수를 인자처럼 사용!
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
function showOk() {
  alert("동의");
}
function showCancel() {
  alert("비 동의");
}
ask("동의하십니까?", showOk, showCancel);

// 함수는 동작을 나타내는 값!
// 이건 익명함수를 사용!
function ask2(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask2(
  "동의하십니까?",
  function () {
    alert("동의");
  },
  function () {
    alert("비 동의");
  }
);

// 함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성합니다.
//따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있습니다.

// 함수 선언문은 함수 선언문이 정의 되기도 전에 호출할 수 있다!!
//

let sum = (a, b) => a + b;
let sum2 = (a, b) => {
  let result = a + b;
  alert(result);
};
alert(sum2(3, 4));

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "동의하십니까?",
  () => alert("동의"),
  () => alert("비동의")
);
