window.onload = function () {
    var step = -700; //步距
    var banner = document.getElementById("banner");
    var img = document.getElementById("img")
    var circles = document.getElementById("circles").children;
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var index = 0;
    var len = circles.length;
    var run;
    var details = document.getElementById("details");
    var a = document.getElementById("123");
    var items = a.getElementsByTagName("li");

    function turn() {
        run = setInterval(function () {
            circles[index].removeAttribute("class");
            index++;
            move(index);
            console.log(index);
            if (index == len) {
                index = 0;
            }
            circles[index].className = "active";
            console.log("change" + index);
        }, 4000);
    }
    turn();

    banner.onmouseenter = function () {
        clearInterval(run);
    }

    for(var i = 0 ; i < items.length ; i++){
        items[i].onmouseenter = function () {
            details.style.display="inline-block";
        };   
        items[i].onmouseleave = function () {
            details.style.display="none";
        }
    }


    banner.onmouseleave = function () {
        turn();
    }

    for (let i = 0; i < len; i++) {
        circles[i].onmouseenter = (function (i) {
            return function () {
                circles[index].removeAttribute("class");
                index = i;
                move(index);
                circles[index].className = "active";
                console.log("mouse circle change" + index);
            }
        })(i);
    }

    left.onclick = function () {
        circles[index].removeAttribute("class");
        index--;
        move(index);
        if (index < 0) {
            index = len - 1;
        }
        circles[index].className = "active";
        console.log("left change" + index);
    }

    right.onclick = function () {
        circles[index].removeAttribute("class");
        index++;
        move(index);
        if (index == len) {
            index = 0;
        }
        circles[index].className = "active";
        console.log("right change" + index);
    }

    function move(index) {
        img.style.transform = 'translate3d(' + (index + 1) * step + 'px,0px,0px)';
        img.style.transitionDuration = '0.3s';
        // 为了实现无限轮播的一些处理
        if (index < 0) {
            setTimeout(function () {
                img.style.transitionDuration = '0s';
                img.style.transform = 'translate3d(' + len * step + 'px,0px,0px)';
            }, 300);
        }
        if (index == len) {
            setTimeout(function () {
                img.style.transitionDuration = '0s';
                img.style.transform = 'translate3d(' + -700 + 'px,0px,0px)';
            }, 300);
        }
    }
}