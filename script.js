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



// Service Item array
const services = [
    {
        id: 1,
        logo: './assets/emergency.png',
        title: 'National Emergency Number',
        subtitle: 'National Emergency',
        number: '999',
        department: 'All',
    },
    {
        id: 2,
        logo: './assets/police.png',
        title: 'Police Helpline Number',
        subtitle: 'Police',
        number: '999',
        department: 'Police',
    },
    {
        id: 3,
        logo: './assets/fire-service.png',
        title: 'Fire Service Number',
        subtitle: 'Fire Service',
        number: '999',
        department: 'Fire',
    },
    {
        id: 4,
        logo: './assets/ambulance.png',
        title: 'Ambulance Service',
        subtitle: 'Ambulance',
        number: '1994-999999',
        department: 'Health',
    },
    {
        id: 5,
        logo: './assets/emergency.png',
        title: 'Women & Child Helpline',
        subtitle: 'Women & Child Helpline',
        number: '109',
        department: 'Help',
    },
    {
        id: 6,
        logo: './assets/emergency.png',
        title: 'Anti-Corruption Helpline',
        subtitle: 'Anti-Corruption',
        number: '106',
        department: 'Govt.',
    },
    {
        id: 7,
        logo: './assets/emergency.png',
        title: 'Electricity Helpline',
        subtitle: 'Electricity Outage',
        number: '16216',
        department: 'Electricity',
    },
    {
        id: 8,
        logo: './assets/brac.png',
        title: 'Brac Helpline',
        subtitle: 'Brac',
        number: '16445',
        department: 'NGO',
    },
    {
        id: 9,
        logo: './assets/Bangladesh-Railway.png',
        title: 'Bangladesh Railway Helpline',
        subtitle: 'Bangladesh Railway ',
        number: '163',
        department: 'Travel',
    },
];

