//歌手推荐
let arr1 = ["http://39.96.88.57:9090/api/www/artist/artistInfo?category=11&pn=1&rn=6&httpsStatus=1&reqId=00e25620-e4a6-11ec-8840-43c05b520882",
    "http://39.96.88.57:9090/api/www/artist/artistInfo?category=13&pn=1&rn=6&httpsStatus=1&reqId=36d36350-e4a6-11ec-8840-43c05b520882",
    "http://39.96.88.57:9090/api/www/artist/artistInfo?category=12&pn=1&rn=6&httpsStatus=1&reqId=484c0b50-e4a6-11ec-8840-43c05b520882",
    "http://39.96.88.57:9090/api/www/artist/artistInfo?category=16&pn=1&rn=6&httpsStatus=1&reqId=55e09b50-e4a6-11ec-8840-43c05b520882"
]
var hua = document.querySelectorAll(".hua li")
//   console.log(hua);
var y = 0;//记录颜色变换
Array.from(hua).forEach((item, index) => {
    item.onclick = function () {
        hua[y].classList.remove("active3");
        this.classList.add("active3");
        y = index;
        getsongList(arr1[index])
    }
})
//  请求数据
var imgss = document.getElementsByClassName("imgss")[0]
console.log(imgss);
function getsongList(index) {
    imgss.innerHTML = '';
    fetch(index).then(r => r.json()).then(res => {
        console.log(res);

        var data = res.data.artistList.slice(0, 6)

        data.forEach(item => {

            imgss.innerHTML += `
            <a href='SingerQing.html? myId=${item.id}'>
                 <li>
                  <img src="${item.pic}" alt="">
                  <h6>${item.name}</h6>
                  <p>${item.musicNum + '首歌曲'}</p>
              </li>
            </a>
               `
        })

    })
}
getsongList(arr1[0])
