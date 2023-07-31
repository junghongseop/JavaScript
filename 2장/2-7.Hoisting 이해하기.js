//Hoisting이란?
//자바스크립트에서 아직 선언되지 않은 함수/변수를 "끌어올려서" 사용 할 수 있는 자바스크립트의 작동 방식을 의미

myFunction();

function myFunction(){
    console.log('hello wrold');
}

/*
myFunction함수를 선언하기 전에, myFunction()을 호출해줌
함수가 아직 선언되지 않았음에도 불구하고 코드는 정상적으로 작동
*/

//잘 작동하는 이유

/*
function myFunction(){
    console.log('hello world');
}

myFunction();
*/

//이렇게 되기 때문에 잘 작동함
//이를 Hoisting이라고 부름

//변수도 Hoisting이 됨

console.log(number);    //오류가 발생

console.log(number2);
var number2 = 2;    //undefined가 출력

//자바스크립트 엔지이 위 코드를 이해 할때
/*
var number2;
console.log(number2);
number2 = 2;
*/

/*
const와 let은 hosting이 발생하지 않고, 에러가 발생
Codesandbox에서는 자바스크립트가 Babel이라는 도구에 의하여 const와 let이 var로 변환되기 때문에 오휴가 발새하지 않음
*/

/*
Hoisting은 자바스크립트 엔진이 갖고 있는 성질
일부러 할 팔요는 없지만, 방지하는 것이 좋음
Hoisting이 발생하는 코드는 이해하기 어렵기 때문에 유지보수도 힘들어지고 의도치 않는 결과물이 나타나기 쉽기 때문

Hoisting을 방지하기 위해서, 함수의 경우 꼭 선언 후에 호출을 하도록 주의를 하시고,
var대신 const, let을 위주로 사용
*/

