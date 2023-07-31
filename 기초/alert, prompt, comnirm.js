//alert: 알려줌
//prompt: 입력 받음
//confirm: 확인 받음

const name = prompt("이름을 입력하세요");
//alert("환영합니다," + name + "님");
alert(`환영합니다, ${name}님`); //취소를 누르면 null이 나옴

//prompt는 default값을 적을수 있음
const birth =prompt("생일을 입력하세요", "2007-01-25");
//prompt("메시지", "입력받을 default값");

const adult  = confirm("당신은 성인인가요?");
console.log(adult); //확인을 누르면 true, 취소를 누르면 false가 출력

//단점
//1. 스크립트 일시 정지
//2. 스타일링이 x
