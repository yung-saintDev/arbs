let count = document.querySelector(".points-int");
let circle = document.querySelector(".circle-wrapper");
let zeroNum = 0;

circle.addEventListener("click", function(){
    zeroNum++;
    count.innerHTML = zeroNum;
});
