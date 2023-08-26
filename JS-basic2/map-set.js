/*
객체 - 키가 있는 컬렉션을 저장
배열 - 순서가 있는 컬렉션을 저장

맵 -> 키에 다양한 자료형을 허용!
set(key, value), get(key) has(key) delete(key) clear, size
맵의 중요 기능은 객체를 키로 쓸수있다는 거!
map.set은 호출할때마다 자기자신을 반환!

map.keys() map.values() map.entries()->키 값 객체를 반환
삽입 순서를 기억!
*/

let map = new Map();
map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool");

console.log(map.get(1));

let john = { name: "j" };
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john)); //123

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}

for (let entry of recipeMap) {
  console.log(entry);
}

let obj1 = {
  name: "j",
  age: 30,
};
let mapObj1 = new Map(Object.entries(obj1));
console.log(mapObj1);
console.log(mapObj1.get("name"));

let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);
console.log(prices);

/* 
set - 중복 허용 안함 + 키가 없는 값이 저장
new Set(iterable)
add delete has clear size
*/
let set = new Set();
let john2 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john2);
set.add(pete);
set.add(mary);
console.log(set);
set.forEach((value, valueAgain, set) => {
  console.log(value);
});

function unique(arr) {
  let set2 = new Set(arr);
  return Array.from(set2);
}
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna"];

console.log(unique(values));

function aclean(arr) {
  let map = new Map();
  for (let a of arr) {
    let sorted = a.toLowerCase().split("").sort().join("");
    map.set(sorted, a);
  }
  return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));

/* 
위크 맵과 위크 셋
멥도 객체를 키로 사용한 경우 -> 맵이 메모리에 남아있는한 GC의 대상이 되지 않는다

워크맵 -> 키가 반드시 객체!
let weakMap = new WeakMap();
만약 obj = null 이면 객체가 참조하는게 없으므로 메모리와 위크맵에서 자동 삭제
get set delete has밖에 안됨!! -> 반복과 keys values가 안된다

GC의 동작때문에 적은 메소드만 가능 -> GC동작 시점은 js 엔진이 결정, 그래서 요소 전체를 대상으로 한 메소드는 애매하다

WeakSet도 마찬가지! -> 간단한 부차적인 데이터를 저장할 때만 사용!

*/

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok");
let john3 = { v: "유서" };
weakMap.set(john3, "비밀문서"); // 존이 사망시 비밀문서 자동 파기!

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];
let readMessages = new WeakSet();
readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);
alert("message 0은 읽음인가요?" + readMessages.has(messages[0]));
messages.shift();
