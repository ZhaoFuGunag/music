var xia = document.getElementById("xia")
var shang = document.getElementById("shang")
var ims = imges.children
console.log(ims);
var big = document.getElementsByClassName("big")[0];
var bts = document.getElementById("btns")

console.log(bts);
imges.style.width = 1288 * imges.children.length + 'px';


// 动态生成点
for (var i = 0; i < ims.length - 1; i++) {
    btns.innerHTML += `
             <li></li> 
         `
}
var btowrap = bts.children
btowrap[0].style.opacity = 1
var x = 0;
var flag = true

function nextFun() {

    if (flag) {
        flag = false
        btowrap[x].style.opacity = 0.2
        x++;
        btowrap[x > btowrap.length - 1 ? 0 : x].style.opacity = 1
        imges.style.marginLeft = -1288 * x + 'px'
    }
}
// 切换结束
imges.addEventListener('transitionend', function () {
    // console.log(imges.length);
    if (x == ims.length - 1) {

        imges.style.transition = 'none';
        imges.style.marginLeft = 0;
        x = 0;
        setTimeout(() => {
            imges.style.transition = 'all .5s';
        }, 16.7)
    }
    flag = true
})

xia.onclick = nextFun;


timer = setInterval(nextFun, 2000)
big.onmouseover = function () {
    clearInterval(timer)
}
big.onmouseout = function () {
    timer = setInterval(nextFun, 2000)
}

// 上一张
function prve() {

    if (flag) {
        flag = false
        btowrap[x].style.opacity = 0.2
        x--;
        btowrap[x == -1 ? btowrap.length - 1 : x].style.opacity = 1
        if (x == -1) {
            imges.style.transition = 'none';
            imges.style.marginLeft = -1288 * (ims.length - 1) + 'px';
            setTimeout(() => {
                imges.style.transition = 'all .5s'
                x = ims.length - 2
                imges.style.marginLeft = -1288 * x + 'px'
            }, 16.7)
        } else {
            imges.style.marginLeft = -1288 * x + 'px'
        }
    }
}
shang.onclick = prve


Array.from(btowrap).forEach((bt, index) => {
    bt.onclick = function () {
        btowrap[x].style.opacity = 0.2
        this.style.opacity = 1
        x = index
        imges.style.marginLeft = -1288 * x + 'px'
    }
})