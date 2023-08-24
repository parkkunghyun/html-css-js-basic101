"use strict";

// 배열 요소에는 제약이 없다!
let arr = [
  "apple",
  { name: "park" },
  true,
  function () {
    console.log("hi");
  },
];

for (let a in arr) {
  console.log(arr[a]);
}

console.log(arr[3]());

// pop push shift -> 배열 앞 요소를 제거  제거한 요소 바환 unshift-> 배열 앞 요소 추가
//
let fruits = ["apple"];
fruits.push("orange", "pear");
fruits.unshift("pineapple");
console.log(fruits);

// 배열의 키는 숫자다! 그리고 배열의 본질은 객체다!
// js 엔진은 배열의 요소를 인접한 메모리 공간에 차례로 넣어서 연산속도를 높인다!

// push pop 빠름 unshift shift 느림 -> 이건 앞에서 수정하고 늘리고 해야해서!
for (let fruit of fruits) {
  console.log(fruit);
}
console.log(String(fruits)); // 문자열로 묶여서 출력!

let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
let sMidlle = Math.floor(styles.length / 2);
styles[sMidlle] = "Classics";
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);

// 배열과 메서드
// splice -> 요소 자르기
let arr2 = ["I", "study", "JavaScript"];
let removedArr2 = arr2.splice(1, 2, "Let's"); // 인덱스 , 몇개 자를지
console.log(arr2);

// slice는 시작부터 끝전까지 새로운 배열을 반환!
// 인수하나도 안넣고 넘기면 새로운 배열을 안에 데이터만 복사해서 주는거!!

// concat - 기존 배열에 새로운 배열 추가하거나 만들때 사용
let arr3 = [1, 2];
let arr4 = arr3.concat([3, 4], [5, 6]); // 1,2,3,4,5,6이 됨!

console.log(arr3);
arr4.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

// indexOf, lastIndexOf includes
console.log(arr4.indexOf(2));

// indexof는 원시 값을 찾을때, find는 객체를 찾을때 사용하면 편리하다
let users = [
  { id: 1, name: "p" },
  { id: 2, name: "k" },
  { id: 3, name: "n" },
];
console.log(users.find((item) => item.id == 1));

// filter는 조건에 맞는 요소를 찾아서 배열로 만들어서 반환함!

let someUsers = users.filter((item) => item.name != "p");
console.log(someUsers);

// map -> 매우 중요!! 배열 요소전체를 대상으로 함수를 호출하고 결과를 배열로 반환!
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);

arr.sort(); // 요소는 문자열로 취급되어 정렬됨!!

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
arr.sort(compareNumeric);
// sort는 최적화된 퀵소트를 사용한다!!
//
arr.sort((a, b) => a - b);
arr.reverse();

// split join
let names = "Bilbo, Gan, Na";
let nam = names.split(", ");
for (let n of nam) {
  console.log(`${n}`);
}
// reduce reduceRight -> 배열을 기반으로 값 하나를 도출할 때 사용!
let sumArr = [1, 2, 3, 4, 5];
let result = sumArr.reduce((sum, current) => sum + current, 0);
console.log(result);

function camelize(str) {
  if (!str) return str;
  let splits = str.split("-");
  let index = 0;
  for (let s of splits) {
    splits[index++] = s[0].toUpperCase() + s.slice(1);
  }
  let joins = splits.join("");
  return joins;
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));

function camelize2(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
console.log(camelize2("background-color"));
console.log(camelize2("list-style-image"));

// a - b
function filterRanger(arr, a, b) {
  return arr.filter((item, index) => index >= a && index <= b);
}
let arr5 = [5, 3, 8, 1];
console.log(filterRanger(arr5, 1, 2));

let arr6 = [5, 2, 1, 11, -11, -10, 8];
console.log(arr6.sort((a, b) => b - a));

let arr7 = ["HTML", "JavaScript", "CSS"];
let arr7Copy = arr7.slice();
console.log(arr7Copy.sort());
console.log(arr7);

// split(" "); -> + -
//
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = (str) => {
    let sp = str.split(" ");
    let a = +sp[0];
    let op = sp[1];
    let b = +sp[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
let calc = new Calculator();

console.log(calc.calculate("3 + 7")); // 10
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result2 = powerCalc.calculate("2 ** 3");
console.log(result2); // 8

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users2 = [john, pete, mary];
// 배열 안 각각의 요소 중 첫번째 객체의 값만 출력해서 만들기!
let names2 = users2.map((item) => item.name);

console.log(names2); // John, Pete, Mary
