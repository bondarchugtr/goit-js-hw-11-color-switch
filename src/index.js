import refs from '../src/js/refs.js';

const { startBtn, stopBtn, body, button } = refs
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
startBtn.addEventListener('click', onClickStartBtn)
stopBtn.addEventListener('click', onClickStopBtn)

let timeId = null;

const styleButton = function () {
    button.forEach((el) => {
        el.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length + 1)];
        el.style.width = 100 + 'px'
        el.style.height = 50 + 'px'
        el.style.borderRadius = 5 + 'px'

    })
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function backGroundColorRgb(evt) {
    body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    styleButton()

}

function onClickStartBtn(evt) {
    if (evt.target) {
        startBtn.setAttribute("disabled", "disabled")
        timeId = setInterval(backGroundColorRgb, 1000)
        console.log(timeId)
    }
}

function onClickStopBtn(evt) {
    if (evt.target) {
        clearInterval(timeId)
        startBtn.removeAttribute("disabled", "disabled")
    }


}


