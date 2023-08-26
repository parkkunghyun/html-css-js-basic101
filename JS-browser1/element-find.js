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

*/
