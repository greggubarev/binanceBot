(async function StatusCheck() {
    let url = 'https://api.binance.com/wapi/v3/systemStatus.html';
    let response = await fetch(url);
    let state = await response.json(); // читаем ответ в формате JSON

        return console.log("state is " + state.msg);

    let status = document.getElementById("statusService");
    if (state.msg == "normal") {
        status.textContent += "online";
    } else {
        status.textContent += "system maintenance";
    }

})();

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



