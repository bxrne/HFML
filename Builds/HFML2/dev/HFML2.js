/*

HFML2
version 2
Hosted on GitHub
The MIT License (MIT)
Copyright (c) 2014 Adam Byrne

*/
(function () {
    window.onload = function () {

        // Links
        var e = document.getElementsByTagName("ceangal");
        for (var t = 0; t < e.length; t++) {
            e[t].onclick = new Function('window.open("' + e[t].getAttribute("áit") + '","' + e[t].getAttribute("sórt") + '");');
          e[t].title = e[t].getAttribute("áit");
        }

        // Title
        var n = document.querySelector("teideal");
        n.style.display = "none";
        document.title = n.innerText;

        //Input
        var t = document.getElementsById('réimse');
        for (var i = 0; i < t.length; i++) {
          t[i].contentEditable = true;
          t[i].value = t[i].getAttribute("luach");
        }
    }
})()