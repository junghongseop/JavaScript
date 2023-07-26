// ||(or)   여러개 중 하나라도 true면 true
// &&(and)  모든값이 true면 true
// !(not)   true먄 false

//or
const name = "Mike";
const age = 30;

if(name === 'Tome' || age > 19){
    console.log('통과');
}

//and
if(name === 'Mike' || age > 19){
    console.log('통과');
} else {
    console.log("탈락");
}

//not
const Age = prompt("나이가?");
const Adult = age > 19;

if(!Adult){
    console.log('돌아가');
}

console.log("ㅇㅋ 통과");

//우선 순위
// AND -> OR
const gender = 'F';
const Name = 'Jane';
const isA = true;

//if(gender === 'M' && name === 'Mike' || isA){     //통과
if(gender === 'M' && (name === 'Mike' || isA)){       //돌아가
    console.log('통과');
} else {
    console.log('탈락');
}