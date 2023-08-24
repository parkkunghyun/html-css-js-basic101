// 참조에 의한 객체 복사
// 원시타입과 객체의 근본 차이는 바로 참조다!
// 객체는 메모리 내 어딘가에 저장되고 변수 user엔 객체를 참조할수있는값이 저장
// 객체가 할당된 변수를 복사할땐 참조값이 복사! 객체 복사 안됨!

let user = { name: "john" };
let admin = user; // 참조값을 복사!

admin.name = "h";
console.log(user.name);

// 참조를 한다는건 같은 객체를 바라봄 == === 다 참
// 객체 복사, 병합 -> 객체를 복사하고 싶다면?, js는 객체 복제 내장 메서드가 없다!
// 그래서 복사하고 싶다면 새로운 객체를 만든 다음 기존 객체 순회하면서 추가

let user2 = {
  name: "jo",
  age: 30,
};
let clone = {};
for (let u in user2) {
  clone[u] = user2[u];
}
clone.name = "P"; // 이러면 clone 네임만 바뀜!

let user3 = { name: "j" };
let per1 = { canView: true };
let per2 = { canEdit: true };
Object.assign(user3, per1, per2); // user에 저 프로퍼티들이 복사됨!
// 만약 이름 동일시 덮어씌어짐!

Object.assign(user3, "n"); // "0"에 "n" 이라고해서 들어가네
Object.assign(user3, "M"); // "0"에 덮어씌어지네 이러면 기본이름이 "0"인듯
console.log(user3);
