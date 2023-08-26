/*
1970년 첫날을 기준으로 밀리초만큼 나타내는 정수 - 타임스탬프
1970-01-01 이전은 움수!

getFullYear() ->연도 4자리
getMonth -> 0 -11
getDate -> 1-31
getHours,getMinutes 등등
getDay() ->일부터 0 - 6

Date.now()를 하면 Date객체를 안만들고도 현재 시간을 줌!

벤치마크테스트- >성능 비교!!!

*/
let now = new Date();
//console.log(now);

// year month date hours minutes seconds ms
new Date(2011, 0, 1, 0, 0, 0, 0); // 2011년 1월 1일 00시 00분 00초

let start = Date.now();
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done
console.log(`${end - start}`);

function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

console.log(
  "diffSubtract를 십만번 호출하는데 걸린 시간: " + bench(diffSubtract) + "ms"
);
console.log(
  "diffGetTime을 십만번 호출하는데 걸린 시간: " + bench(diffGetTime) + "ms"
);

let n = new Date(2012, 1, 20, 3, 12, 0);
console.log(n);

function getWeekDay(arr) {
  if (arr.getDay() == 0) return "SU";
  if (arr.getDay() == 1) return "MO";
  if (arr.getDay() == 2) return "TU";
  if (arr.getDay() == 3) return "WE";
  if (arr.getDay() == 4) return "TH";
  if (arr.getDay() == 5) return "FR";
  if (arr.getDay() == 6) return "SA";
}
let date = new Date(2014, 0, 3); // 2012년 1월 3일
console.log(getWeekDay(date)); // "TU"가 출력되어야 합니다.
