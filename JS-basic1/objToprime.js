// 객체를 원시형으로 변형하기!

// obj1 + obj2 를 하면 자동 형변환이 되긴함!
// 객체는 문자형이나 숫자형으로 형변환이 일어난다!
//

let obj = { age: 3 };
let num = Number(obj.age);
console.log(num);

// toString, valueOf 가 있긴함

// valueOf는 객체 자신을 돌아봄!
let user = { name: "j" };
console.log(user.valueOf() === user);

let user2 = {
  name: "j",
  money: 1000,

  toString() {
    return `{name : "${this.name}"}`;
  },
  valueOf() {
    return this.money;
  },
};

console.log(user2);
console.log(+user2);
console.log(user2.toString());
console.log(user2 + 500);
