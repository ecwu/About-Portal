function EngineSwitch(){
    var currentEngine = document.getElementById('engineImg').name;
    if (currentEngine === "google"){
        ChangeToBaidu();
    }else if (currentEngine === "baidu"){
        ChangeToGoogle();
    }
}

function ChangeToGoogle() {
    document.getElementById('actionEngine').action = 'http://www.google.com/search';
    document.getElementById('engineImg').src = 'img/searchEngine/google.png';
    document.getElementById('engineImg').name = 'google';
    document.getElementById('submitBtn').value = 'Search';
    document.getElementById('inputBox').name = 'q';
}

function ChangeToBaidu() {
    document.getElementById('actionEngine').action = 'http://www.baidu.com/s';
    document.getElementById('engineImg').src = 'img/searchEngine/baidu.png';
    document.getElementById('engineImg').name = 'baidu';
    document.getElementById('submitBtn').value = '搜  索';
    document.getElementById('inputBox').name = 'wd';
}
