/*
함수와 함수 호출의 차이
const add = (a,b) => ( {a + b} ); 이렇게 하면 객체를 반환!
*/
const add = (a, b) => a + b;

function calculator(func, a, b) {
  return func(a, b);
}
console.log(calculator(add, 3, 5));
// 함수의 호출을 넣는게 아니라 함수 선언을 넣으면 됨!
// 함수선언 과 함수 호출의 차이를 알아야함!
// 우리는 지금 함수를 호출하는게 아니어서 이걸 사용할 필요가 없다!
document.querySelector("#header").addEventListener("click", add);

const onClick = () => {
  return () => {
    console.log("hello");
  };
};

document.querySelector("#header").addEventListener("click", onClick());
// 고차함수 -> 함수안에서 다른 함수를 리턴하는 경우 -> 호출을 보고 리턴값을 바꿔주면 된다
//
