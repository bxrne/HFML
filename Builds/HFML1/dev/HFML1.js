/*

HFML1
version 1
Hosted on GitHub
The MIT License (MIT)
Copyright (c) 2014 Adam Byrne

*/
(function () {
    window.onload = function () {
        var e = document.getElementsByTagName("ceangal");
        for (var t = 0; t < e.length; t++) {
            e[t].onclick = new Function('window.open("' + e[t].getAttribute("áit") + '","' + e[t].getAttribute("sórt") + '");')
        }
        var n = document.querySelector("teideal");
        n.style.display = "none";
        document.title = n.innerText
    }
})()