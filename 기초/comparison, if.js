console.log(10>5);      //true
console.log(10 == 5);   //false
console.log(10 != 5);   //true

//동등 연산자
//'=='연산자를 쓰면 문자와 숫자 상관 없음, type을 보지 않는다
//'==='연산자를 쓰면 문자와 숫자가 상관이 있음, type을 본다
const a = 1;
const b = "1";

console.log(a == b);    //true
console.log(a === b);   //fasle

//조건문
//어떤 조건에 따라 이후 행동이 달라지게 만들어주는 역할을 함

//if문
//괄호 안의 조건을 평가해서 true면 실행, false면 실행을 하지 않음

//else
//else는 if문이 false일때 실행

//if문
const  age = 30;

if(age>19){
    console.log('환영');
}

if(age<= 19){
    console.log('잘가');
}

//else
if(age>19){
    console.log('환영');
}else{
    console.log('잘가');
}

//else if문
if(age>19){
    console.log('환영');
}else if(age === 19){
    console.log('수능 ㅅㄱ');
}else{
    console.log('잘가');
}