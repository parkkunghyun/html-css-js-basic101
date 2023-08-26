/* 
객체에는 map,filter같은 배열 전용 메서드를 사용할 수 없다!
일반객체에서 순회하려면 Object.keys(obj), Object.values(obj), Object.entries(obj)
*/

function sumSalaries(salaries) {
  let sum = 0;
  for (let v of Object.values(salaries)) {
    sum += v;
  }
  return sum;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries));

function count(user) {
  return Object.keys(user).length;
}

let user = {
  name: "John",
  age: 30,
};

console.log(count(user)); // 2

/*
키를 가진 데이터 여러개를 하나의 엔티티에 저장 -> 객체
컬렉션에 데이터를 순서대로 저장 -> 배열

구조분해 할당 -> 객체나 배열에서 특정 데이터만 보내는 고급 기술!
모든 iterable한 객체가 전부 구조분해할당이 가능하다

...이름 => 새로운 나머지 배열이 됨!
만약 할당값이 없더라고 오류는 안남 -> undefined만 됨!
=로 디폴트 정하기도 가능!
*/
let arr = ["bora", "lee"];
let [firstName, lastName] = arr;
console.log(firstName);

let [f, l] = "Bora Lee".split(" ");
let user2 = {
  name: "j",
  age: 30,
};
for (let [key, value] of Object.entries(user2)) {
  console.log(`${key} : ${value}`);
}

let [name1, name2, ...rest] = ["Julius", "caesar", "consul", "of the Roman"];

let [name = "Geust", surname = "anony"] = ["j"];

let options = {
  title: "Menu",
  width: 100,
  height: 200,
};
let { width: w, height: h, title } = options;
// 이름 같으면 값 적는거 생략이 가능
console.log(w);

let user3 = {
  name3: "John",
  years: 30,
};
let { name3, years: age, isAdmin = false } = user3;
console.log(name3);
console.log(age);
console.log(isAdmin);

function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

let salaries2 = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries2));
