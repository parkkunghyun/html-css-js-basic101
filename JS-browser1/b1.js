// 브라우저환경과 다양한 명세서
// js가 돌아가는 플랫폼은 Host라고 불린다, 호스트는 웹서버, 심지어 커피머신도 됨
// 이 플랫폼은 해당 플랫폼에 특정되는 기능을 제공 -> 이걸 호스트 환경!

// 호스트 환경은 ECMA Script에 더해서 플랫폼에 특정되는 객체와 함수를 제공
// 웹브라우저는 웹페이지를 제어하기 위한 수단을 제공하고 Node.js는 서버사이드 기능을 제공

//웹브라우저의 경우!
// 최상단 -> window라 불리는 루트 객체가 있다 - 2가지 역할
// 자바스크립트코드의 전역객체! + 브라우저창을 대변하고 이를 제어할 수 있는 메서드를 제공

function sayHi() {
  alert("안녕하세요!");
}
window.sayHi();
alert(window.innerHeight); // 창 내부 높이

// 문서객체 모델 - DOM (Document Object Model ) 웹 페이지 내의 모든 콘텐츠를 객체로 나타냄
// document객체는 페이지의 기본 진입점 역할! - 페이지 내 무엇이든 변경가능, 원하는거 만들기도
//

// 배경 붉은색으로 변화 , 1초후 원상복귀!
document.body.style.background = "red";
setTimeout(() => (document.body.style.background = ""), 1000);

// 브라우저 객체 모델 -> BOM - 문서 이외의 모든 것을 제어하기 위해 브라우저가 제공하는 추가 객체를 나타냄
// navigator 객체는 브라우저와 운영체제에 대한 정보를 제공

alert(location.href); // 현재 url
if (confirm("위키피디아로 가시겠습니까?")) {
  location.href = "https://wikipedia.org";
}

// DOM 트리
// html을 지탱하는건 tag
// DOM에 따르면 html태그는 객체, 태그 하나가 감싸고 있는 자식 태그 -> 중첩태그(nested tag)
// 태그 내 문자 역시 객체 - 이런 모든 객체는 js를 통해 접근 가능하고 조작가능
// document.body == <body> 태그를 객체로 나타낸거!
/// 돔 구조

/* 
<!DOCTYPE HTML>
<html>
<head>
  <title>사슴에 관하여</title>
</head>
<body>
  사슴에 관한 진실.
</body>
</html>

html이 루트노드이고 ,head,body는 루트노드의 자식
기형적인 html을 만나면 브라우저는 DOM 생성과정에서 HTML을 자동으로 교정합니다.
만약 문서 최상위에 html 없으면 넣어주기 등

결국 간단하게 요약하면 html/xml문서는 브라우저 안에서 DOM 트리로 표현됩니다
    태그는 요소 노드가 되고 트리 구조를 형성
    문자는 텍스트 노드가 됨
    html 내 모든 것은 DOM을 구성, 주석까지도
*/

/*
DOM 탐색하기 -> document 객체에서 무조건 시작 진입접이라고 생각하면 편하다
<html> - document.documentElement 
<body> - document.body

차고로 브라우저에서 DOM을 읽어야하기 때문에 아직 안 읽었으면 null이 나올수도 있다!
그래서 아래 적는게 좋다!
<html>

<head>
  <script>
    alert( "HEAD: " + document.body ); // null, 아직 <body>에 해당하는 노드가 생성되지 않았음
  </script>
</head>

<body>

  <script>
    alert( "BODY: " + document.body ); // HTMLBodyElement, 지금은 노드가 존재하므로 읽을 수 있음
  </script>

</body>
</html>

parentNode, nextSibling, previousSibling -> 부모노드, 다음 형제노드, 이전 형제 노드
childNodes 자식노드 -> 부모노드 바로 아래있음 후손노드도 있긴함..
firstChild, lastChild가 있음

DOM 컬렉션 -> childNodes는 배열이 아닌 반복 가능한 컬렉션이다
for (let node of document.body.childNodes) { alert(node); }
그래서 배열 메서드를 바로 쓸수는 없다 -> filter. map..

Array.from(document.body.childNodes).filter -> 이건 가능!
차고로 DOM 컬렉션은 읽기 전용이다!!

실무에서는 dom요소를 탐색할때 주석이나텍스트 노드를 다루지 않는다
element라는 단어로 바꿔준다면 -> 요소 노드만 다룬다!!
children, firstElementChild lastElementChild 
previousElementSibling / nextElementSibling parentElement


<html>
<body>
  <div>사용자:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html>

document.body.fisrtElementChild
document.body.children[0]
document.body.childNodes[1] -> 모든 노드로 보면 0번째는 공백이 됨

document.body.children[1]
document.body.lastElementChild

document.body.children[1].lastElementChild
*/
