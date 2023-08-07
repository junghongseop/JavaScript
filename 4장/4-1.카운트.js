//DOM이란, 각 태그에 대한 정볼를 지니고 있는 JS객체

//DOM선택
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

/*
console.log(number);    //내용  
console.log(increase);  //top위치
console.log(decrease);  //id
*/

//DOM이벤트 설정
/*
increase.onclick = () => {
    console.log("increase가 클릭됨");
};

decrease.onclick = () => {
    console.log("decrease가 클릭됨");
};
*/
//DOM에 이벤트를 설정 할 때에는 on이벤트 이름 값에 함수를 설정

increase.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
}

//parseInt는 문자열을 숫자로 반환해주는 함수
//10을 넣어준것은 10진수로 숫자를 받아오겠다는 의미