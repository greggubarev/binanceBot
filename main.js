(async function StatusCheck() {
    let url = 'https://api.binance.com/wapi/v3/systemStatus.html';
    let response = await fetch(url);
    let state = await response.json(); // читаем ответ в формате JSON
    let statusServ = document.getElementsByClassName("statusService1");
    localStorage['Status'] = state.status;
    // return statusServ.textContent += state.status;
    let localStatus = localStorage['Status'];
    if (localStatus == "0") {
        statusServ.textContent = "online";
    } else {
        statusServ.textContent = "maintenance";

    }
        return console.log("state is " + state.msg + " status is " + state.status);
    //
    // let statusServ = document.getElementsByClassName("statusService");
    // if (state.status == 0) {
    //     statusServ.textContent += "online";
    // } else {
    //     statusServ.textContent += "system maintenance";
    // }

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



