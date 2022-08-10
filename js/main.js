setInterval(()=>{
document.querySelector(".load").style.display="none";
}, 2000);

let quoteTitle=document.getElementById("quote-input-text1");
let titleBtn=document.getElementById("get-quote-title");
let anime=document.getElementById("anime");
let quoteText=document.getElementById("qoute-text");
let charater=document.getElementById("charater");
let btnClear1=document.getElementById("clear1");


var index = Math.floor(Math.random() * 10) + 0;


titleBtn.addEventListener('click', ()=>{
    fetch(`https://animechan.vercel.app/api/quotes/anime?title=${quoteTitle.value}`)
      .then(response => response.json())
      .then(quotes => {
        if(quotes.length == 0){
            alert("Nothing Found!!");
         }else{
        anime.innerText=quotes[index].anime;
        quoteText.innerText=quotes[index].quote;
        charater.innerText=quotes[index].character;
      }
      })
})

btnClear1.addEventListener('click',()=>{
    window.location.reload();
})



      