

//推荐歌单
let arr =
    ["http://39.96.88.57:9090/api/www/rcm/index/playlist?id=rcm&pn=1&rn=5&httpsStatus=1&reqId=6a8081f0-e40c-11ec-a95c-797c9dc738d6",
        "http://39.96.88.57:9090/api/www/classify/playlist/getTagPlayList?id=1848&pn=1&rn=5&httpsStatus=1&reqId=b8942c40-e414-11ec-a999-0b9c58bde6bc",
        "http://39.96.88.57:9090/api/www/classify/playlist/getTagPlayList?id=621&pn=1&rn=5&httpsStatus=1&reqId=c2743fc0-e414-11ec-a999-0b9c58bde6bc",
        "http://39.96.88.57:9090/api/www/classify/playlist/getTagPlayList?id=146&pn=1&rn=5&httpsStatus=1&reqId=e5e4aad0-e414-11ec-a999-0b9c58bde6bc",
        "http://39.96.88.57:9090/api/www/classify/playlist/getTagPlayList?id=35&pn=1&rn=5&httpsStatus=1&reqId=f491afb0-e414-11ec-a999-0b9c58bde6bc"
    ]

var lis = document.querySelectorAll('.day li')
var music = document.getElementById('music')
console.log(lis);
var r = 0;

//  lis[0].style.display='block'
Array.from(lis).forEach((li, index) => {
    li.onclick = function () {
        lis[r].classList.remove('active2');
        this.classList.add('active2')
        r = index;
        getList(arr[index])

    }
})

var auo = document.getElementById("aud")
var id = location.search.split("=")[1]
function getList(index) {
    fetch(index).then(r => r.json()).then(res => {
        console.log(res);
        var list = res.data.list || res.data.data
        music.innerHTML = ''
        list = list.slice(0, 5)
        list.forEach(item => {

            music.innerHTML += `  
                  <div class='po'>
                 <i class="iconfont icon-24gl-play"></i>
                      <a href='aaaa.html? ind=${item.id}'>
              <div class='zii'>   <img src="${item.img}" alt=""></div>
               </a>
               <p class='title'>${item.name}</p>
               <p>${item.listencnt / 100 + '万'}</p>           
           </div>        
              `
        })
    })
}
getList(arr[0])







