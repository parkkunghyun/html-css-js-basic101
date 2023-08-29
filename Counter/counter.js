// 일단 양수면 초록색 음수면 빨강임 0은 검정
// DECREASE REST INCREASE 가 있음

// set initial count
let count = 0;

// select value and buttons
const numberValue = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    //console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    }
    if (styles.contains("reset")) {
      count = 0;
    }
    if (styles.contains("increase")) {
      count++;
    }
    numberValue.textContent = count;
    if (count < 0) {
      document.getElementById("value").style.color = "red";
      console.log("<0");
    } else if (count > 0) {
      document.getElementById("value").style.color = "skyblue";
      console.log(">0");
    } else {
      document.getElementById("value").style.color = "black";
    }
  });
});
