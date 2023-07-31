//Scope
//변수 혹은 함수를 선언하게 될 때 해당 변수또는 함수가 유효한 범위를 의미

/*
종류
1. 전역Scope: 코드의 모든 범위에서 사용이 가능
2. 함수Scope: 함수 안에서만 사용이 가능
3. 블록Scope: if, for, switch등 특정 블록 내부에서만 사용이 가능
*/
const value = 'hello!';

function myFunction(){
    console.log('myFunction: ');
    console.log(value);
}

function otherFunction(){
    console.log('otherFunction: ');
    const value = 'bye!';
    console.log(value);
}

myFunction();
otherFunction();

console.log('global scope: ');
console.log(value);

/*
코드의 맨 윗줄에서 선언된 value값은 전역Scope로 선언된 값
전역Scope로 선언된 값은 어디서든지 사용이 가능
-> myFunction에서 바로 사용을 할 수 있었음

otherFunction에서의 함수 내부에서 value값을 bye!로 새로 선언했음
-> value라는 값은 Function Scope로 지정이 되서 해당 값은 otherFunction내부에서만 유효한 값이 됨

값을 이렇게 설정한다고 해서 기존에 Global Scope로 선언된 value값이 바뀌지 않음
*/