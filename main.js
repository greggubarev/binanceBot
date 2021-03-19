(async function StatusCheck() {
    let url = 'https://api.binance.com/wapi/v3/systemStatus.html';
    let response = await fetch(url);
    let state = await response.json(); // читаем ответ в формате JSON
    // localStorage['Status'] = state.status;
    // return statusServ.textContent += state.status;
    let statusServ = document.getElementById("statusService");
    if (state.status == 0) {
        statusServ.textContent += "online";
    } else {
        statusServ.textContent += "system maintenance";
    }
        return console.log("state is " + state.msg + " status is " + state.status);



})();
// let statusServ = document.getElementById("statusService");
//
// let localState = localStorage['Status'];
// console.log(localState);
// if (localState == 0) {
//     statusServ.innerHTML = "online";
//
// } else {
//     statusServ.innerHTML = "maintenance";
// }
// window.addEventListener('load', function() {
//
//     let status = document.getElementById("status");
//
//     function updateOnlineStatus(event) {
//         var condition = navigator.onLine ? "online" : "offline";
//
//         status.className = condition;
//         status.innerHTML = condition.toUpperCase();
//
//         log.insertAdjacentHTML("beforeend", "Event: " + event.type + "; Status: " + condition);
//     }
//
//     window.addEventListener('online',  updateOnlineStatus);
//     window.addEventListener('offline', updateOnlineStatus);
// });



