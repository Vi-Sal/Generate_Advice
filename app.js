const btnGenerate = document.querySelector(".btn-gen-advice");
const display = document.querySelector(".display");
const adviceEle = document.querySelector(".advice");

async function getAdvice() {
   const url = "https://api.adviceslip.com/advice";
   const res = await fetch(url);
   const data = await res.json();
   renderAdvice(data.slip.advice);
}
function renderAdvice(advice) {
   adviceEle.textContent = advice;
}

btnGenerate.addEventListener("click", getAdvice);
document.addEventListener("keydown", (e) => {
   e.preventDefault();
   if (e.key === "Escape") adviceEle.textContent = "START GENERATE NOW";
   else if (e.key === "Enter") getAdvice();
});