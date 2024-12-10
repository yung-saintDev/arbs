let count = document.querySelector(".points-int")
let circle = document.querySelector(".circle-wrapper")
let zeroNum = 0
const continuebtn = document.querySelector(".continue-button")
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('name');


circle.addEventListener("click", function(){
    zeroNum++
    count.innerHTML = zeroNum
})



if (userName) {
    document.getElementById('userName').textContent = userName;
}