function Timer() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    if (month <= 9) month = "0" + month;
    if (day <= 9) day = "0" + day;
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;
    document.getElementById("websiteTimer").innerHTML = year + month + day + "." + hours + minutes + "." + seconds;
    setTimeout(Timer, 1000);
}
