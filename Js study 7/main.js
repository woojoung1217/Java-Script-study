const boxEl = document.querySelector('.box');

 // box 라는 클래스를 가진 html 요소를 찾아 변수 boxEl 에 넣어준다.
 
boxEl.classList.add('active');
// boxEl에 classList 메소드를 사용하여 active 라는 클래스를 추가해준다.
let iscontains=boxEl.classList.contains('active');

//새로운 변수안에 boxEl 이 가진 클래스를 넣어주고 active라는 클래스가 들어갔는지 확인한다
console.log(iscontains);  //true  출력 

//삭제 

boxEl.classList.remove('active');

iscontains=boxEl.classList.contains('active');

console.log(iscontains);


