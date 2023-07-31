//반복문: 동일한 작업을 여러번 반복

//for(초기값; 조건; 코드 실행 후 작업) -> false가 되면 멈춤
for(let i = 0; i< 10; i++){
    //반복할 코드
    console.log(i);
}

//while문
let i = 0;

while(i<10){
    //코드
    console.log(i);
    i++;// i가 0이기 때문에 i++을 하지 않으면 계속 실행 하게 됨
        //이 때문에 i++가 1씩 늘어 나도록 함
}

//do.. while문
let k = 0;

do{
    //코드
    k++
} while(k<10)
//코드를 실행후 조건을 확인함 -> do..while과 while의 차이점


//break, continue
//break: 멈추고 빠져나옴
//continue: 멈추고 다음 반복으로 진행

//break

while(true){
    let answer = confirm('계속 할까?');
    if(!answer){
        break;
    }
}

//continue

for(let i = 0; i<10; i++){  //최초의 i는 0
    if(i%2){                //0의 나머지는 0이므로
        continue;           //continue문을 만나지 못하고
    }
    console.log(i);         //console을 찍음
}