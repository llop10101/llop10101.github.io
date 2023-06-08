function obrirInfo(quinaInfo, element, color){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i=0; i<tabcontent.lenght;i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for(i=0;i<tablinks.length;i++){
        tablinks[i].style.backgroundColor="";
    }

    document.getElementById(quinaInfo).style.display = "block";
    element.style.backgroundColor=color;
}
document.getElementById("defaultOpen").click();