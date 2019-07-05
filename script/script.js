var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://api.almostsuvajit.xyz/clashperks", true);
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("commands_used").innerHTML = myObj.commands_used;
        document.getElementById("guilds").innerHTML = myObj.guilds;
        document.getElementById("users").innerHTML = myObj.users;
        document.getElementById("uptime").innerHTML = myObj.uptime;
    }
};
xmlhttp.send();