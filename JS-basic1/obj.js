// 객체는 다양한 데이터를 담을 수 있다 {} 키 :  값
// 키는 문자형, 값은 아무거나 다 됨!
//
let user = new Object(); // 객체 생성자 문법
let user2 = {}; // 객체 리터럴 문법 -> 이게 선호!

let user3 = {
  name: "John",
  age: 30,
};
console.log(user3.name);
user3.isadmin = false; // 이렇게 추가도 가능!
//delete user.age; // 이러면 삭제!
//console.log(user3.age);

// const로 선언된 객체는 수정될 수 있다! -> const는 user의 값을 고정하지만
// 그 내용을 고정하지는 않는다! 즉 추가 선언만 안되고 수정은 가능!

user["likes birds"] = true; // 값 넣기
console.log(user["likes birds"]);

let user4 = {
  name: "john",
  age: 30,
};
//let key = prompt("user", "name");
//alert(user[key]);
// user.key는 안됨!!!

// 계산된 프로퍼티
//let fruit = prompt("어떤 과일 구매", "apple");
//let bag = {
//  [fruit]: 5, // fruit에서 프로퍼티 이름을 동적으로 받아옴!!
//};
//alert(bag.apple); // 5

// 단축프로퍼티 -> 키와 값이 같으면 하나만 적어도됨!
function makeUser(name, age) {
  return {
    name,
    age,
  };
}
// 차고로 키에 숫자를 적어놓으면 "0" 처럼 문자로 바뀐다!
//alert("age" in user3); // key 확인

let obj = {
  test: undefined,
};
//alert(obj.test); // undefined가 나옴
//alert("test" in obj); // 이러면 test가 존재하긴 하니까 true가 나옴!

// 객체는 특별한방식으로 정렬된다! -> 정수 key는 자동으로 정렬!! 그 외 나머지는 추가한 순서대로!!
let codes = {
  49: "c",
  41: "b",
  1: "A",
};
for (let code in codes) {
  console.log(code);
}

let user5 = {
  name: "john",
  surname: "Smith",
};
user5.name = "Pete";
console.log(user5.name, user5.surname);
delete user5.name;
console.log(user5.name, user5.surname);

function isEmpty(obj2) {
  for (let o in obj2) {
    return false;
  }
  return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let s in salaries) {
  sum += salaries[s];
}
console.log(sum);
