var switcher = 0;
function changeStyle() {
    var obj = document.getElementById("themeCss");
    if (switcher === 0){
        obj.setAttribute("href","css/dark.css");
        switcher = 1;
    }else if(switcher === 1){
        obj.setAttribute("href","css/bright.css");
        switcher = 0;
    }
}