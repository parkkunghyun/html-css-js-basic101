/*
get Element, querySelector로 요소 검색하기
상대 위치 이용 안하면서 원하는 요소 노드 접근은?

요소의 id가 있으면 document.getElementById(id)를 하면 접근이 가능
let elem = document.getElementById(id);
elem.style.background = 'red';

<ul>
  <li>1-1</li>
  <li>1-2</li>
</ul>
<ul>
  <li>2-1</li>
  <li>2-2</li>
</ul>

querySelectorAll(css) - elem자식 요소 중 주어진 css선택자에 대응하는 애 전부 반환
let elements = document.querySelectorAll('ul > li:last-child'); 
for (let elem of elements) {
    alert(elem.innerHTML); // "1-2", "2-2"
}

document.querySelector(':hover') 도 가능!
querySelector -> 요소 중 첫번째

element.matches(css) -> css선택자와 일치하는지 확인!

<a href="http://example.com/file.zip">...</a>

for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
        alert("주어진 CSS 선택자와 일치하는 요소: " + elem.href);
    }
}

let divs = document.getElementsByTagName('div'); -> 걍 querySelector쓰자!
elem.getElementsByClassName(className)

getElementsBy 로 되어있으면 살아있는 컬렉션을 반환한다!!! -> 문서 변경시 컬렉션 자동 갱신!

id="age-table"인 테이블
테이블 내의 label 요소 모두(총 3개)
테이블 내의 첫 번째 td(Age가 적힌 곳)
name="search"인 form
폼의 첫 번째 input
폼의 마지막 input

document.getElementById("age-table");
document.querySelectorAll("label");
document.querySelector("td");
document.getElementsByName("search")[0];
document.querySelector('form[name="search"]');
form.querySelector('input');


주요 노드 프로퍼티
DOM 노드는 종류에 따라 각각 다른 프로퍼티를 지원 - a태그면 링크관련 프로퍼티를, input은 입력관련 프로퍼티 등을 지원
하지만 모든 DOM노드는 공통 프로퍼티에서 시작해서 공통 프로퍼티와 메서드가 존재!
dom클래스에는 최상단 EventTarget이 존재, Node는 EventTarget을 다른 DOM노드는 NODE 클래스를 상속

EventTarget -> 추상 클래스, 객체는 실제로 안만듬
Node - 추상 클래스, 돔 노드의 베이스 역할 주요 트리 탐색 기능을 제공
Element - 돔 요소를 위한 베이스 클래스 children, nextElementSibling 같이 요소 전용 노드 탐색 도와줌
HTMLElement -> HTML 요소 노드의 베이스 역할을 하는 클래스 - HTMLInputElement, HTMLBodyElement 등

alert(document.body.constructor.name); // HTMLBodyElement 즉 노드 클래스 이름 확인가능!
alert(document.body); 해도 나오긴함 toString 있어서

alert(document.body.nodeName); // BODY 

innerHTML -> 요소 안의 html을 문자열로 받아오기 가능!
기존 내용 삭제 혹은 기존 내용 + 새로운 내용으로 만들기!

기존내용삭제 -> 다시 내용이 쓰이기 때문에 이미지등의 리소스 전부 다시 로딩!

<script>
    alert(document.body.innertHTML); // 내용 읽기
    document.body.innerHTML = '새로운 BODY!'; // 교체
</script>

let news = document.getElementById("news");
alert(news.textContent); // 순수 텍스트에만 접근 가능!

elem.hidden = true; 이 요소 숨겨짐!

------------------
속성과 프로퍼티

브라우저는 웹페이지를 만나면 HTML을 읽어(parsing) DOM 객체를 생성
요소노드에서 대부분의 표준 HTML 속성(attribute)은 DOM객체의 프로퍼티가 됩니다

스크립트에서 프로퍼티를 추가할수 있다!
body id=page => body.id="page"
document.body.myData = {
    name: 'Caesar'
    title: 'Imperator'
};
alert(document.body.myData.title);

html태그는 복수의 속성 가질 수 있다 -> html을 파싱해 DOM 객체를 만들때 html 표준 속성을 인식하고
이 표준 속성을 사용해 DOM 프로퍼티를 만든다 id class name 등

elem.hasAttribute(name) - 속성 존재 여부 확인
elem.getAttribute(name)
elem.setAttribute(name , value(옵션)
elem.removeAttribute(name)

let input = document.querySelector('input');
input.setAttribute('id', 'id');
alert(input.id);
input.id = 'newId'; // 속성 갱신이 가능!

let elem = document.querySelector('[data-widget-name]');
alert(elem.hasAttribute('data-widget-name'));
alert(elem.getAttribute('data-widget-name'));


*/
