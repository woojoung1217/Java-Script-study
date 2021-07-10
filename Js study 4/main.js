
//객체 데이터 안에서 메소드 생성 후 추출 
const woojoung = {
  Name:"woojoung yoon",
  age:24,
  getName: function() {
    return this.Name;  //this 는 객체 안에 Name 이라는 값을 말함
  }
};

const hisname= woojoung.getName(); //새로운 변수에 woojoung 안에 있는 getName 으로 부터 함수호출
console.log(hisname);  //console 에 출력 
// 따로 변수를 만들지 않고 
console.log(woojoung.getName()); // 바로 출력도 가능 