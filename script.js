// Reuseable function
function getElement(id) {
    let element = document.getElementById(id);
    return element;
}
// get elements
const serviceContainer = getElement('service_container');
const historyContainer = getElement('history_container');
const clearBtn = getElement('clear_btn');
const heartCount = getElement('heart_count');
const coinCount = getElement('coin_count');
const copyCount = getElement('copy_count');

// Get value and convert string to number
let totalHeart = Number(heartCount.innerText);
let totalCoin = Number(coinCount.innerText);
let totalCopy = Number(copyCount.innerText);
