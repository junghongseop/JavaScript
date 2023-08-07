//display: none; 스타일을 사용하게 되면 해당 엘리먼트는 화면에서 숨겨짐

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
open.onclick = () => {
  modal.style.display = "flex";
};
close.onclick = () => {
  modal.style.display = "none";
};

//id가 아닌 클래스로 DOM을 선택하고 싶을 땐 document.getElementsByClassName또는 
//document.querySelector를 사용

//document.querySelector 를 사용하여 class 값으로 DOM 을 선택 할 때에는 텍스트 앞에 . 을 붙여주어야 함
