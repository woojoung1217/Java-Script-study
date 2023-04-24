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
