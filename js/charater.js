setInterval(()=>{
    document.querySelector(".load").style.display="none";
    }, 2000);
    
    let quoteTitle2=document.getElementById("quote-input-text2");
    let titleBtn2=document.getElementById("get-quote-title2");
    let anime2=document.getElementById("anime2");
    let quoteText2=document.getElementById("qoute-text2");
    let charater2=document.getElementById("charater2");
    let btnClear2=document.getElementById("clear2");
    
    
    var index = Math.floor(Math.random() * 10) + 0;
    
    
    titleBtn2.addEventListener('click', ()=>{
        fetch(`https://animechan.vercel.app/api/quotes/character?name=${quoteTitle2.value}`)
          .then(response => response.json())
          .then(quotes => {
            if(quotes.length == 0){
                alert("Nothing Found!!");
             }else{
            anime2.innerText=quotes[index].anime;
            quoteText2.innerText=quotes[index].quote;
            charater2.innerText=quotes[index].character;
          }
          })
    })
    
    btnClear2.addEventListener('click',()=>{
        window.location.reload();
    })
    
          