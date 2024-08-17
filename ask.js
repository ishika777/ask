let yesBtn = document.querySelector("#yes");
let noBtn = document.querySelector("#no");
let h1 = document.querySelector("h1");
let img = document.querySelector("img");
let div = document.querySelector(".btn");
let num = 0;

yesBtn.addEventListener("mouseenter", function(){
    this.style.backgroundColor = "white";
    this.style.color = "#2196f3";
    this.style.transitionDuration = "0.5s";
});
yesBtn.addEventListener("mouseleave", function(){
    this.style.backgroundColor = "#2196f3";
    this.style.color = "white";
    this.style.transitionDuration = "0.5s";
});
yesBtn.addEventListener("click", function(){
        num++;
        h1.innerText = "Yayy !! Finally";
        this.innerText = "Let's fix a date!";
        img.src = "https://media.tenor.com/TLAxBUKXIbwAAAAj/yay.gif";
        img.style.width = "15%";
        noBtn.remove();
});
yesBtn.addEventListener("click", function(){
    if(num == 2){
        let inp = document.createElement("input");
        inp.type = "date";
        inp.classList.add("date");
        div.appendChild(inp);
        this.innerText = "Finalize Date!";
        num++;
    }
});
yesBtn.addEventListener("click", function(){
    if(num == 4){
        img.src = "https://media1.giphy.com/media/j1waw9mw8ky3o9nd9h/200.webp?cid=ecf05e474lbmglliivploah11ebc5prqu6ym3nauo2dnrlx2&ep=v1_gifs_search&rid=200.webp&ct=g";
        let input = document.querySelector(".date");
        input.remove();
        yesBtn.remove();
        h1.innerText = "";
        img.style.width = "45%";

        setTimeout(function(){
            h1.innerHTML = "<h1>We're meeting <br>tomorrow !!</h1>"
            img.src = "https://media.tenor.com/TkeJkNbNmRMAAAAj/dance-happy-dance.gif";
            img.style.width = "20%";
        }, 5900);
    }
});
function drag(){
    this.style.backgroundColor = "white";
    this.style.color = "#2196f3";
    let x = Math.floor(Math.random()*490);
    let y = Math.floor(Math.random()*1150);
    this.style.position = "absolute";
    this.style.transitionDuration = "0.25s";
    this.style.top = `${x}px`;
    this.style.left = `${y}px`;
}
noBtn.addEventListener("mouseenter",drag);
noBtn.addEventListener("mouseleave", function(){
    this.style.backgroundColor = "#2196f3";
    this.style.color = "white";
});