console.log(5 > 2);

console.log('true' === 1);

const valueA = '34de3';

const number = Number(valueA);

console.log(number);

const msg = `Here we ${valueA} made in one day!`;
console.log(msg);
console.log(msg.length);

console.log(!0);

//chat

const isOnline = true;
const isFriend = true;
const DnD = false;

let canOpenChat = isFriend && isOnline && !DnD;
console.log(`Can start chatting: `, canOpenChat);

let balance = 10000;
const payment = 20000;

console.log(`You due to pay ${payment} for service`);

if (balance > payment) {
    balance -= payment;
    console.log(`you have ${balance} left`);
} else {
    console.log(`kidly find more money`);
}