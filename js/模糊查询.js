// 请求数据  
var list = document.getElementsByClassName("list")[0].getElementsByTagName("li")
var s = 0//记录颜色的变化
// console.log(list);
list[0].classList.add("active7")
Array.from(list).forEach((item, index) => {
    item.onclick = function () {
        list[s].classList.remove("active7");
        this.classList.add("active7");
        s = index;
    }
})


//大家都在搜
var da = document.getElementsByClassName("dajia")[0];
var ipt = document.getElementById("ipt");
var mo = document.getElementsByClassName("mohu")[0]
//    console.log(da);
function hort() {
    fetch("http://39.96.88.57:9090/api/www/search/searchKey?key=&httpsStatus=1&reqId=b9f2d0a0-e4be-11ec-bf6a-67b73081bf4f").then(r => r.json()).then(res => {
        // console.log(res);
        var data = res.data
        data.forEach((item, index) => {
            //    console.log(item);
            da.innerHTML += `
                   <li>
                       <p class="${index + 1 == 1 ? 'one' : index + 1 == 2 ? 'two' : index + 1 == 3 ? "three" : "kong"}">${index + 1}</p>
                       <span>${item}</span>
                   </li>
             `
        })
        var Ido = document.getElementById("ID")
        let ipt = document.getElementById("ipt")
        // var val1 = ipt.value
        Ido.onclick = function () {
            // console.log(ipt.value);
            window.location.href = `./Sousuo.html?id=${ipt.value}`
        }
    })

}
hort();
// 搜索提示
function getsearch() {
    fetch(`http://localhost:9090/api/www/search/searchKey?key=${ipt.value}`).then(r => r.json()).then(res => {

        var data = res.data
        search.innerHTML = ''
        data.forEach((item) => {
            console.log(item);
            var name = item.split(/=|\r\n/)[1];//切割里面的杂乱字母及数字
            search.innerHTML += `
               <li>${name}</li>
               `
        })
        var Ido = document.getElementById("ID")
        let ipt = document.getElementById("ipt")
        // var val8 = ipt.value
        Ido.onclick = function () {
            // console.log(ipt.value);
            window.location.href = `./Sousuo.html?id=${ipt.value}`
        }

    })

}
ipt.oninput = function () {
    if (ipt.value == '') {
        mo.style.display = "block"
        search.style.display = "none"
    } else {
        mo.style.display = "none"
        search.style.display = "block"
        getsearch()
    }

}
//聚焦显示
ipt.onfocus = function () {
    if (ipt.value == '') {
        mo.style.display = 'block'
    } else {
        search.style.display = "block"
    }
}
//失焦隐藏
ipt.onblur = function () {
    var self = this
    setTimeout(() => {
        if (self.value == '') {
            mo.style.display = "none"
        } else {
            search.style.display = "none"
        }
    }, 500)
}

//点击提示
mo.onclick = function (e) {
    if (e.target.tagName == 'SPAN') {
        ipt.value = e.target.innerHTML;
        this.style.display = "none"
    }

    if (e.target.tagName == 'P') {
        ipt.value = e.target.nextElementSibling.innerHTML;
        this.style.display = "none"
    }
}

search.onclick = function (e) {
    if (e.target.tagName == 'LI')
        ipt.value = e.target.innerHTML;
    this.style.display = "none"
}

