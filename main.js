// async function StatusCheck() {
//     let url = 'https://api.binance.com/wapi/v3/systemStatus.html';
//     let response = await fetch(url);
//     let state = await response.json(); // читаем ответ в формате JSON
//
//     if (state) {
//         return console.log("state is " + state);
//     } else {
//         return console.log("no state")
//     }
// }

var request = new XMLHttpRequest();
request.open('GET', `https://api.binance.com/wapi/v3/systemStatus.html`);