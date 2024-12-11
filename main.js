let count = document.querySelector(".points-int");
let circle = document.querySelector(".circle-wrapper");
let zeroNum = 0;
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('name'); 

if (userName) {
    document.getElementById('userName').textContent = userName;
}

circle.addEventListener("click", function(){
    zeroNum++;
    count.innerHTML = zeroNum;
});
