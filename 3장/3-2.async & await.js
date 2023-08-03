//async/await문법은 ES8에 해당하는 문법
//Promise를 더욱 쉽게 사용 할 수 있게 해줌

//기본 사용법
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
    console.log('Hi');
    await sleep(1000);
    console.log('Nice to meet you');
}

process();

//사용할 때에는, 함수를 선언 할 때 함수의 앞부분에 async키워드를 붙여주면 됨
//Promise의 앞부분에 await을 넣어주면 해당 프로미스가 끝날때까지 기다렸다가 다음 작업을 수행 할 수 있음

//sleep이라는 함수를 만들어서 파라미터로 넣어준 시간 만큼 기다리는 Promise를 만들고
//process함수에서 사용해줌

//함수에서 async를 사용하면, 해당 함수는 결과값으로 Promise를 반환
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
    console.log('Hi');
    await sleep(1000);
    console.log('Nice to meet you');
}

process().then(() => {
    console.log('end');
});

//async함수에서 에러를 발생 시킬때에는 throw를 사용하고, 에러를 잡아낼 때에는 try/catch문을 사용
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
    try{
        await makeError();
    } catch(e) {
        console.log(e);
    }
}

process();

//비동기 함수 추가
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
const getDog = async () => {
    await sleep(1000);
    return 'dog';
};
  
const getRabbit = async () => {
    await sleep(500);
    return 'rabbit';
};
const getTurtle = async () => {
    await sleep(3000);
    return 'turtle';
};
  
async function process() {
    const dog = await getDog();
    console.log(dog);
    const rabbit = await getRabbit();
    console.log(rabbit);
    const turtle = await getTurtle();
    console.log(turtle);
}
  
process();

/*
 *getDog는 1초, getRabbit은 0.5초, getTurtle은 3초가 걸리고 있음
 *process함수에서 연달아서 사용하게 되면, process함수가 실행되는 총 시간은 4.5초 
 */

//동시에 작업을 시작하게 하기 위해서는 Promise.all을 사용
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
const getCat = async () => {
    await sleep(1000);
    return 'cat';
};
  
const getAnt = async () => {
    await sleep(500);
    return 'Ant';
};
const getSheep = async () => {
    await sleep(3000);
    return 'sheep';
};
  
async function process() {
    const results = await Promise.all([getCat(), getAnt(), getSheep()]);
    console.log(results);
}
  
process();

//배열 비구조화 할당 문법을 사용하면 결과값을 따로 추출해서 조회 가능
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
const getWolf = async () => {
    await sleep(1000);
    return 'wolf';
};
  
const getFox = async () => {
    await sleep(500);
    return 'fox';
};
const getBird = async () => {
    await sleep(3000);
    return 'bird';
};
  
async function process() {
    const [wolf, fox, bird] = await Promise.all([
        getWolf(),
        getFox(),
        getBird()
    ]);
    console.log(wolf);
    console.log(fox);
    console.log(bird);
}
  
process();

//Promise.all를 사용 할 때에는, 등록한 Promise중 하나라도 실패하면, 모든게 실패한것으로 간주

//Promise.race
//여러개의 Promise를 등록해서 실행했을 때 가장 빨리 끝난것 하나만의 결과값을 가져오는 것

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
const getEagle = async () => {
    await sleep(1000);
    return 'eagle';
};
  
const getMole = async () => {
    await sleep(500);
    return 'Mole';
};
const getDolphin = async () => {
    await sleep(3000);
    return 'dolphin';
};
  
async function process() {
    const first = await Promise.race([
      getEagle(),
      getMole(),
      getDolphin()
    ]);
    console.log(first);
}
  
process();

/**
 * Promise.race의 경우엔 가장 다른 Promise가 먼저 성공하기 저넹 가장 먼저 끝난 Promise가 실행하면 이를 실패로 간주
 * -> getMole에서 에러를 발생시킨다면 에러를 잡아낼수 있지만
 *    getEagle이나 getDolphin에서 발생한 에러는 무시
 */