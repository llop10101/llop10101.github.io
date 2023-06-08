var countDownDate = new Date("Dec 25, 2023 18:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var timeDiff = countDownDate - now;
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    document.getElementById("temps").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    if(timeDiff<0){
        clearInterval(x);
        document.getElementById("temps").innerHTML="QUE COMENÇI L'ESPECTACLE";
    }
},1000);
