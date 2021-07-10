// function 사용 

function hellofunc() {
  console.log(1234);
};
hellofunc();

// 함수사용 -> 반환 

function returnfunc() {
  return 123;
}

let a =returnfunc();

console.log(a);

// 함수를 사용한 계산

function sum(a,b) {
  return(a+b);    //retunr 매개변수 a + b 값 을 반환 
}

let e=sum(1,2);   //변수 선언 후 함수 호출 인수 값이 더해져 변수 e로 넘어감 
let f=sum(10,2);
let g=sum(5,5);

console.log(e);
console.log(f);   //console화면에 출력 
console.log(g);