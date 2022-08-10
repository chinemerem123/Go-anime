setInterval(()=>{
    document.querySelector(".load").style.display="none";
    }, 2000);

let imgBox=document.getElementById("img-box");
let getImg=document.getElementById("get-img");

getImg.addEventListener('click', ()=>{
  fetch('https://nekos.best/api/v2/neko')
  .then(res => res.json())
  .then(img => {
    imgBox.innerHTML=`<img src=${img.results[0].url}>`
  })
})


