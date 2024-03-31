console.log("ahsdjfa");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
stopBtn.disabled = true;
let timerID = null;

startBtn.addEventListener("click", () => {
	document.body.style.backgroundColor = getRandomHexColor();
	startBtn.disabled = true;
	stopBtn.disabled = false;
	timerID = setInterval(() => {
		document.body.style.backgroundColor = getRandomHexColor();	
	}, 1000)
})

stopBtn.addEventListener("click", () => {
	clearInterval(timerID);
	startBtn.disabled = false;
	stopBtn.disabled = true;
})
