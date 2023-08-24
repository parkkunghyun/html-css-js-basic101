let sum = 1 + 2;
console.log(`${sum}`);

let questList = "손님:\n*John\n*Pete\n";
console.log(questList);
console.log(questList.length);
// length는 여기서 함수가 아니라 숫자가 저장되는 프로퍼티!!

console.log(questList.charAt(2));
// []로 접근해도 되는데 이때 너무 크게 주면 undefined, charAt은 ''를 반환

for (let char of "Hello") {
  console.log(char);
}

// 문자열은 수정이 불가!!
// 그래서 아래처럼 아에 교체해주기!
let str = "Hi";
str = "h" + str[1];
console.log(str);

// str.indexOf(substr, pos) -> 대소문자 따짐 pos는 해당위치부터 찾기
// 차고로 없으면 -1이다!!!
let str2 = "Widget with id id";
console.log(str2.indexOf("Widget"));
console.log(str2.indexOf("id", 2)); //widget에도 id가 있어서!

let str3 = "As sly as a fox, as string as an ox";
let target = "as";
let pos = -1;
while ((pos = str3.indexOf(target, pos + 1)) != -1) {
  console.log(`위치: ${pos}`);
}

// Not 기법 n이면 -> -(n + 1)이 됨
console.log(~2);
// includes, startsWith, endsWith

console.log("width".includes("id"));
console.log("width".startsWith("s"));
console.log("width".endsWith("h"));

// slice, substr, substring
let str4 = "stringify";
console.log(str4.slice(0, 5)); // 0부터 4까지나옴!
// substring은 start가 end보다 커도 괜찮다!! -> 두개 위치 바꿔서 출력해버림!

// substr(start, length ) 즉 시작부터 저 개수만큼을 반환!
console.log("stringify".substr(2, 4));

function ucFirst(s2) {
  if (!s2) return s2;
  let slen = s2.length;
  let s3 = s2[0].toUpperCase() + s2.slice(1, slen);
  return s3;
}

console.log(ucFirst("john") === "John");

function checkSpam(str) {
  let lowStr = str.toLowerCase();
  if (lowStr.indexOf("XXX") || lowStr.indexOf("viagra")) {
    return true;
  }
  return false;
}
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("innocent rabbit"));

//
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let s3 = str.slice(0, maxlength) + "...";
    return s3;
  } else return str;
}
console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 20));
