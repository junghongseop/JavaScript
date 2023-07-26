//case가 다양할 경우 더욱 간결하게 작성이 가능해서 사용

switch(check){
    case A:
    //A일때 코드
    case B:
    //B일때 코드
}
//switch 괄호의 값과 같은 case를 찾아 break를 하고 빠져나옴

//else if문
/*
if(check==A){
    //A일때 코드
} else if(check == B){
    //B일때 코드
}
*/

let fruit = prompt('어떤 과일을 원하누?');

switch(fruit){
    case "사과":
        console.log('사과? ㅇㅋ');
        break;
    case "바나나":
        console.log('바나나? ㅇㅋ');
        break;
    case "수박":
        console.log('수박? ㅇㅋ');    
        break;
    default:
        console.log('없으, 잘가');
}