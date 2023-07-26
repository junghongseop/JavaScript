//String() -> 문자형으로 변환
//Number() -> 숫자형으로 변환
//Boolean() -> 불린형으로 변환

const add = prompt("수학 몇점?");
const add1 = prompt("영어 몇점?");
const add2 = prompt("국어 몇점?");
const result = (add + add1 + add2) / 3;

console.log(result); 

//prompt입력 -> only 문자형

//명시적 형변환하는 방법
//String()

console.log(
    String(3),
    String(true),
    String(false),
    String(null),
    String(undefined)
);

//Number()
//Number(null) -> 0
//Number(undefined) -> NaN

//Number(0) -> false
//Number('0') -> true

//Number('') -> false
//Number(' ') -> true

console.log(
    Number(true),   //1
    Number(false)   //0
);

//Boolean()
//false인 경우 •숫자 0 •빈 문자열 ' ' •null •undefined •NaN

console.log(
    Boolean(0),         //false
    Boolean(""),        //false
    Boolean(null),      //false
    Boolean(undefined), //false
    Boolean(NaN),       //false
    Boolean(1)          //true
);

