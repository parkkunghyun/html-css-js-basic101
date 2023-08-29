const x = "x";

function c() {
  const y = "y";
  console.log("c");
  function b() {
    const z = "z";
    console.log("b");
    c();
  }
}

function a() {
  const x = "xx";
  console.log("a");
  b(); // 함수를 선언했지만 is not defined가 뜬다!
  // b는 c안에 들어있음!
  // c -> anony
  // a -> anony 파일 전체를 의미
  // b -> c -> anony 임! 즉 자기보다 더 큰 함수를 적었다
  // 한번 코딩하면 scope는 잘 안 바뀐다! -> 함수의 선언을 보고 내 부모 함수를 알 수 있어야한다!
  // 일단 자기 안에 함수에서 b가 선언!! 인지 찾고 부모에서 찾아본다!! -> 근데 없으면 접근 못함!
  // lexical scope로 이렇게 만들어 보고 파악하기!
}
a();
c();

/*
console.log도 const console = {
    log () {
        이렇게 있어서 동작하는 듯
        콘솔에 글자를 적는 기능
    }
}
내장 라이브러리도 비슷하게 되어있기 때문에 보고 어떻게 생겼을지 알 수 있어야함1

스코프 체인 - 함수에서 어떤 값에 접근이 가능한지 불가능한지
이제는 block이 기준임! -> 함수도 블록 {} 를 가지고 있다 for, if, while등

이것도 있음!
{
    int a = 3;
}
객체로 만들려면
({ int a = 3; })


*/
