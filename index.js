// javascript basic

// 자바스크립트 기초 복습

//boolean
// const a = true;
// const b = false;

// const name = "mike";
// const age = 30;

// console.log(name == "mike");
// console.log(age > 40);

// typeof

// console.log(typeof true);
// console.log(typeof 3);
// console.log(typeof null);
// // null 타입은 Object = > js 초기 오류
// console.log(typeof " 자바 ");

// 문자열 출력 방식
// const a = " 나는 ";
// const b = " 입니다.";

// const name = "mike";

// console.log(a + name + b);
// console.log(`${a}${name}${b}`);

// alert , prompt , confirm

// 사용자에게 입력을 받을 때 사용하는 prompt
// const name = prompt("이름을 입력하세요");
// if (name == "yoon") {
//   alert(`${name}` + "님" + "환영합니다.");
// } else {
//   alert("다시 시도해주세요");
// }

// ex 2 prompt
// const date = prompt("예약일을 입력해주세요 ", "2023-11-");
// 인자로 설명 값 을 넣을 수 있다

// ex 3 confirm

// const isAdult = confirm("당신은 성인 입니까>");
// console.log(isAdult);
// 단점 = > 1. 스크립트 일시정지(동작제한), 2 스타일링 불가 (복잡 & 브라우저 호환성)

// type 형변환 Number , String , Boolean
// let datas = ["1", "2", "3"];
// Number

// for (let i = 0; i < datas.length; i += 1) {
//   datas[i] = Number(datas[i]);
//   console.log(datas[i]);
//   console.log(" 타입은 : " + typeof datas[i]);
// }

// const math = prompt("수학");
// const eng = prompt("영어");
// const result = (parseInt(math) + parseInt(eng)) / 2;
// console.log(result);

// Stirng 형 변환

// console.log(typeof String(3));
// console.log(typeof String(null));
// let a = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < a.length; i += 1) {
//   a[i] = String(a[i]);
//   setTimeout(() => {
//     console.log(a[i]);
//   }, 1000 * i);
// }

// 배열안에서 홀수 찾는 방법
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multiplesOfThree = arr.filter((num, i) => i % 2 === 1);

// console.log(multiplesOfThree); // [1,3,5,7,9]

// <비교연산자>

// let a = "3";
// let b = 3;
// console.log(a == b); // true 반환
// // 타입 까지 반환 => ===

// function agecheck(age, ages) {
//   ages = 0;
//   if (age > 19) {
//     ages += 1;
//     console.log("adult", ages);
//   } else {
//     console.log("kids", ages);
//   }
// }
// agecheck(16);

// // 전역 함수로 만들기
// // 함수를 전역에 노출시키는 방법
// globalThis.AgeCheck = (ages) => {
//   if (ages > 19) {
//     return "성인";
//   } else {
//     return "미성년자";
//   }
// };
// const ReturnName = () => {
//   let name = "나는 윤우중";
//   console.log(name, AgeCheck(20), "입니다.");
// };
// ReturnName();

// 논리 연산자 or , and ,not

// let people = {
//   name: "yoon",
//   sex: "male",
//   age: 30,
// };

// if (people.name == "yoon" && people.sex == "male") {
//   console.log("통과");
// } else {
//   console.log("실패");
// } // 통과 2 조건 모두 true
// if (people.name == "yoon" && people.sex == "female") {
//   console.log("통과");
// } else {
//   console.log("실패");
// }
// // 실패 => 두 조건중 하나가 false

// if (people.name == "yoon" || people.sex == "male") {
//   console.log("통과");
// } else {
//   console.log("실패");
// } //통과 둘중하나만 pass 해도 true

// if (people.name != "demon") {
//   console.log("이름이 달라요");
// } else {
//   console.log("통과");
// }

// const gender = "F";
// const name = "jane";
// const isAdult = true;
// // and 가 우선순위가 높아서 발생하는 문제가 있음

// if (gender === "M" && (name === "Mike" || isAdult)) {
//   console.log(`통과`);
// } else {
//   console.log("돌아가");
// }

// for , while ,switch
// 1~10 까지 콘솔 찍기

// for (let i = 0; i < 10; i += 1) {
//   console.log(i + 1);
// }

// while
// let i = 1;
// while (i < 11) {
//   console.log(i);
//   i += 1;
// }

// for (let i = 1; i <= 10; i++) {
//   switch (i) {
//     case 1:
//       console.log("1");
//       break;
//     case 2:
//       console.log("2");
//       break;
//     case 3:
//       console.log("3");
//       break;
//     case 4:
//       console.log("4");
//       break;
//     case 5:
//       console.log("5");
//       break;
//     case 6:
//       console.log("6");
//       break;
//     case 7:
//       console.log("7");
//       break;
//     case 8:
//       console.log("8");
//       break;
//     case 9:
//       console.log("9");
//       break;
//     case 10:
//       console.log("10");
//       break;
//     default:
//       console.log("Error");
//       break;
//   }
// }
// break

// while (true) {
//   let answer = confirm("계속 ㄱ?");
//   if (false) {
//     break;
//   }
// }

// for (let i = 0; i < 10; i += 1) {
//   if (i % 2 == 1) {
//     continue;
//   }
//   console.log(i);
// }
