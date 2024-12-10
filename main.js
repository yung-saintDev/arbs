


document.getElementById('inputval').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        document.getElementById('nameForm').submit(); 
    }
});

document.getElementById('nameForm').onsubmit = function(event) {
    event.preventDefault(); 
    var userName = document.getElementById('inputval').value;
    if (userName) {
        window.location.href = '/main.html?name=' + encodeURIComponent(userName);
    } else {
        alert("Please enter a name!");
    }
};
