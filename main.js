

        document.getElementById("nextButton").onclick = function() {
            var userName = document.getElementById("inputval").value;
            if (userName) {
                window.location.href = "main.html?name=" + encodeURIComponent(userName);
            } else {
                alert("Please enter a name!");
            }
        };
