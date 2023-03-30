function disableInfo() {
    document.onkeydown = function() {
        var e = window.event || arguments[0];
        //屏蔽F12  
        if (e.keyCode == 123) {
            return false;
            //屏蔽Ctrl+Shift+I  
        } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
            return false;
            //屏蔽Shift+F10  
        } else if ((e.shiftKey) && (e.keyCode == 121)) {
            return false;
        }
    };
    //屏蔽右键单击  
    document.oncontextmenu = function() {
        return false;
    }
}

// 挡小白 伸手党不要脸  平面 UI 前端 开发  Telegram：  @DesignCodeBot   联系我   
// 挡小白 伸手党不要脸  平面 UI 前端 开发  Telegram：  @DesignCodeBot   联系我   
// 挡小白 伸手党不要脸  平面 UI 前端 开发  Telegram：  @DesignCodeBot   联系我   
// 挡小白 伸手党不要脸  平面 UI 前端 开发  Telegram：  @DesignCodeBot   联系我   
// 挡小白 伸手党不要脸  平面 UI 前端 开发  Telegram：  @DesignCodeBot   联系我   
// 挡小白 伸手党不要脸  平面 UI 前端 开发  Telegram：  @DesignCodeBot   联系我   
// 挡小白 伸手党不要脸  平面 UI 前端 开发  Telegram：  @DesignCodeBot   联系我   
// 挡小白 伸手党不要脸  平面 UI 前端 开发  Telegram：  @DesignCodeBot   联系我   

setInterval(function() {
    var t1 = Date.now();
    debugger;
    var t2 = Date.now();
    if (t2 - t1 > 100) {
        console.log('debug detected');
        // send_log('ban this ip');
    }
}, 500);