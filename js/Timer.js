function Timer() {
    var d = new Date(); //定义时间对象
    var year = d.getFullYear(); //返回年份
    var month = d.getMonth() + 1; //返回月份
    var day = d.getDate(); //返回日期
    var huors = d.getHours(); //返回小时
    var minutes = d.getMinutes(); //返回分钟
    var seconds = d.getSeconds(); //返回秒
    if (month <= 9) month = "0" + month;//如果月份小于9,在前面加0
    if (day <= 9) day = "0" + day;//如果天数小于9,在前面加0
    if (huors <= 9) huors = "0" + huors;//如果小时小于9,在前面加0
    if (minutes <= 9) minutes = "0" + minutes;//如果分钟小于9,在前面加0
    if (seconds <= 9) seconds = "0" + seconds;//如果秒数小于9,在前面加0
    var times = year + month + day + "." + huors + minutes + "." + seconds;
    document.getElementById("websiteTimer").innerHTML = times;//把获得的时间展示在ID为time的input元素的value值上JS写法
    setTimeout(Timer, 1000);//每隔一秒调用一次getTimes函数
}
