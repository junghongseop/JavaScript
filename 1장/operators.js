//거듭제곱
//const num = 2**3; -> 8

//우선순위
// * / > + -
//괄호를 사용하면 우선순위가 바뀜

//연산자 줄여서 쓰기
let num = 10;
num = num + 5;
num += 5;
//-,*,%도 같은 방식

console.log(num);

//증감 연산자
let result = num++;
let result1 = num--;

let result2 = ++num;
let result3 = --num;

console.log(result); //10
console.log(result1); //10

console.log(result2); //11
console.log(result3); //9
