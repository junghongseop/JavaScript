//+연산자를 사용해서 변수들을 엮어줄수 있음

const name = "Mike";    //문자열 String
const age = 30;         //숫자형 Number
const PI = 3.14;

const name1 = "Mike";
const name2 = 'Mike';
const name3  = `Mike`;

//따옴표와 쌍따옴ㅍ는 큰차이가 없음
//따옴펴가 있는 문장은 쌍따옴표를 하거나 \'를 통해 작성해주면 됨
const message = "I'm a boy";
const message2 = 'I\'m a boy';

//`은 문자열 내부의 변수를 표현해줄때 사용하면 편함
const message3 = `My name is ${name}`;
console.log(message3);

const message4 = `나는 ${30+1}살 입니다.`;
console.log(message4);

console.log(6 + 3);   //더하기
console.log(6 - 3);   //빼기
console.log(6 * 3);   //곱하기
console.log(6 / 3);   //나누기
console.log(6 % 3);   //나머지

//const x = 1/0; Infinity가 출력
/*
const name = 'Mike';
const y = name/2;

NaN이 출력 *Nan: Not a number
*/

//null과 undefined
let Age;
console.log(Age); //undefined
//undefined는 변수를 선언하고 변수가 아무것도 할당하지 않으면 출력이됨

let user = null; //null

//typeof연산자
//변수의 자료형을 알아내는 연산자

const Name = 'Mike';

console.log(typeof 3);          //"number"
console.log(typeof Name);       //"string"
console.log(typeof true);       //"boolean"
console.log(typeof "xxx");      //"string"
console.log(typeof null);       //"object" = 객체형을 의미
console.log(typeof undefined);  //"undefined"


