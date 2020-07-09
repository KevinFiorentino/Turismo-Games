/* FLORALIS */
document.addEventListener("dragend", function (event) {
    var letras = document.querySelectorAll("#turismodrag_floralis .dragletter_floralis");
    var word = "";

    letras.forEach(function (e) {
        word += e.innerHTML;
    });

    if (word == "FLORALIS") {
        document.getElementById("imgfloralis").style.filter = "blur(0px)";
        document.getElementById("turismodrag-pista_floralis").style.display = "none";
        document.getElementById("turismodrag-win_floralis").style.display = "block";
        print_floralis(8);
    }
    else if (word.indexOf("FLORALI") == 0) {
        document.getElementById("imgfloralis").style.filter = "blur(2px)";
        document.getElementById("turismodrag-win_floralis").style.display = "none";
        print_floralis(7);
    }
    else if (word.indexOf("FLORAL") == 0) {
        document.getElementById("imgfloralis").style.filter = "blur(4px)";
        document.getElementById("turismodrag-win_floralis").style.display = "none";
        print_floralis(6);
    }
    else if (word.indexOf("FLORA") == 0) {
        document.getElementById("imgfloralis").style.filter = "blur(6px)";
        document.getElementById("turismodrag-win_floralis").style.display = "none";
        print_floralis(5);
    }
    else if (word.indexOf("FLOR") == 0) {
        document.getElementById("imgfloralis").style.filter = "blur(8px)";
        document.getElementById("turismodrag-win_floralis").style.display = "none";
        print_floralis(4);
    }
    else if (word.indexOf("FLO") == 0) {
        document.getElementById("imgfloralis").style.filter = "blur(10px)";
        document.getElementById("turismodrag-win_floralis").style.display = "none";
        print_floralis(3);
    }
    else if (word.indexOf("FL") == 0) {
        document.getElementById("imgfloralis").style.filter = "blur(12px)";
        document.getElementById("turismodrag-win_floralis").style.display = "none";
        print_floralis(2);
    }
    else if (word.indexOf("F") == 0) {
        document.getElementById("imgfloralis").style.filter = "blur(14px)";
        document.getElementById("turismodrag-win_floralis").style.display = "none";
        print_floralis(1);
    }
    else {
        document.getElementById("imgfloralis").style.filter = "blur(15px)";
        document.getElementById("turismodrag-win_floralis").style.display = "none";
        print_floralis(0);
    }
}, false);

function print_floralis(cant) {
    var boxes = document.querySelectorAll("#turismodrag_floralis .dragletter_floralis");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute('style', 'color: #828386');
    }
    for (var i = 0; i < cant; i++) {
        boxes[i].setAttribute('style', 'color: white');
        boxes[i].style.background = "#FF8AD1";
    }
}
function pista_floralis(number) {
    if (number == 1) {
        document.getElementsByClassName("floralisP2")[0].style.display = "block";
        document.getElementsByClassName("floralispista_floralis1")[0].style.display = "block";
    }
    else {
        document.getElementsByClassName("floralispista_floralis2")[0].style.display = "block";
    }
}
function reset_floralis() {
    document.getElementById("imgfloralis").style.filter = "blur(15px)";
    document.getElementById("turismodrag-pista_floralis").style.display = "block";
    document.getElementsByClassName("floralisP2")[0].style.display = "none";
    document.getElementById("turismodrag-win_floralis").style.display = "none";
    document.getElementsByClassName("floralispista_floralis1")[0].style.display = "none";
    document.getElementsByClassName("floralispista_floralis2")[0].style.display = "none";
    document.getElementById("turismodrag_floralis").innerHTML = `
        <div class="dragletter_floralis" draggable="true">L</div>
        <div class="dragletter_floralis" draggable="true">O</div>
        <div class="dragletter_floralis" draggable="true">R</div>
        <div class="dragletter_floralis" draggable="true">L</div>
        <div class="dragletter_floralis" draggable="true">I</div>
        <div class="dragletter_floralis" draggable="true">F</div>
        <div class="dragletter_floralis" draggable="true">S</div>
        <div class="dragletter_floralis" draggable="true">A</div>
    `;
    dragSrcEl = null;
    cols1 = document.querySelectorAll("#turismodrag_floralis .dragletter_floralis");
    [].forEach.call(cols1, function (e) {
        e.addEventListener("dragstart", handleDragStart, !1),
            e.addEventListener("dragenter", handleDragEnter, !1),
            e.addEventListener("dragover", handleDragOver, !1),
            e.addEventListener("dragleave", handleDragLeave, !1),
            e.addEventListener("drop", handleDrop, !1),
            e.addEventListener("dragend", handleDragEnd, !1);
    });
}



/* ECOPARQUE */
document.addEventListener("dragend", function (event) {
    var letras = document.querySelectorAll("#turismodrag_ecoparque .dragletter_ecoparque");
    var word = "";

    letras.forEach(function (e) {
        word += e.innerHTML;
    });

    if (word == "ECOPARQUE") {
        document.getElementById("imgecoparque").style.filter = "blur(0px)";
        document.getElementById("turismodrag-pista_ecoparque").style.display = "none";
        document.getElementById("turismodrag-winecoparque").style.display = "block";
        print_ecoparque(9);
    }
    else if (word.indexOf("ECOPARQU") == 0) {
        document.getElementById("imgecoparque").style.filter = "blur(2px)";
        document.getElementById("turismodrag-winecoparque").style.display = "none";
        print_ecoparque(8);
    }
    else if (word.indexOf("ECOPARQ") == 0) {
        document.getElementById("imgecoparque").style.filter = "blur(4px)";
        document.getElementById("turismodrag-winecoparque").style.display = "none";
        print_ecoparque(7);
    }
    else if (word.indexOf("ECOPAR") == 0) {
        document.getElementById("imgecoparque").style.filter = "blur(6px)";
        document.getElementById("turismodrag-winecoparque").style.display = "none";
        print_ecoparque(6);
    }
    else if (word.indexOf("ECOPA") == 0) {
        document.getElementById("imgecoparque").style.filter = "blur(8px)";
        document.getElementById("turismodrag-winecoparque").style.display = "none";
        print_ecoparque(5);
    }
    else if (word.indexOf("ECOP") == 0) {
        document.getElementById("imgecoparque").style.filter = "blur(10px)";
        document.getElementById("turismodrag-winecoparque").style.display = "none";
        print_ecoparque(4);
    }
    else if (word.indexOf("ECO") == 0) {
        document.getElementById("imgecoparque").style.filter = "blur(11px)";
        document.getElementById("turismodrag-winecoparque").style.display = "none";
        print_ecoparque(3);
    }
    else if (word.indexOf("EC") == 0) {
        document.getElementById("imgecoparque").style.filter = "blur(12px)";
        document.getElementById("turismodrag-winecoparque").style.display = "none";
        print_ecoparque(2);
    }
    else if (word.indexOf("E") == 0) {
        document.getElementById("imgecoparque").style.filter = "blur(13px)";
        document.getElementById("turismodrag-winecoparque").style.display = "none";
        print_ecoparque(1);
    }
    else {
        document.getElementById("imgecoparque").style.filter = "blur(15px)";
        document.getElementById("turismodrag-winecoparque").style.display = "none";
        print_ecoparque(0);
    }
}, false);

function print_ecoparque(cant) {
    var boxes = document.querySelectorAll("#turismodrag_ecoparque .dragletter_ecoparque");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute('style', 'color: #828386');
    }
    for (var i = 0; i < cant; i++) {
        boxes[i].setAttribute('style', 'color: white');
        boxes[i].style.background = "#FF8AD1";
    }
}
function pista_ecoparque(number) {
    if (number == 1) {
        document.getElementsByClassName("ecoparqueP2")[0].style.display = "block";
        document.getElementsByClassName("ecoparquepista_ecoparque1")[0].style.display = "block";
    }
    else {
        document.getElementsByClassName("ecoparquepista_ecoparque2")[0].style.display = "block";
    }
}
function reset_ecoparque() {
    document.getElementById("imgecoparque").style.filter = "blur(15px)";
    document.getElementById("turismodrag-pista_ecoparque").style.display = "block";
    document.getElementById("turismodrag-winecoparque").style.display = "none";
    document.getElementsByClassName("ecoparqueP2")[0].style.display = "none";
    document.getElementsByClassName("ecoparquepista_ecoparque1")[0].style.display = "none";
    document.getElementsByClassName("ecoparquepista_ecoparque2")[0].style.display = "none";
    document.getElementById("turismodrag_ecoparque").innerHTML = `
        <div class="dragletter_ecoparque" draggable="true">C</div>
        <div class="dragletter_ecoparque" draggable="true">A</div>
        <div class="dragletter_ecoparque" draggable="true">O</div>
        <div class="dragletter_ecoparque" draggable="true">U</div>
        <div class="dragletter_ecoparque" draggable="true">R</div>
        <div class="dragletter_ecoparque" draggable="true">Q</div>
        <div class="dragletter_ecoparque" draggable="true">E</div>
        <div class="dragletter_ecoparque" draggable="true">E</div>
        <div class="dragletter_ecoparque" draggable="true">P</div>
    `;
    dragSrcEl2 = null;
    cols2 = document.querySelectorAll("#turismodrag_ecoparque .dragletter_ecoparque");
    [].forEach.call(cols2, function (e) {
        e.addEventListener("dragstart", handleDragStart2, !1),
            e.addEventListener("dragenter", handleDragEnter2, !1),
            e.addEventListener("dragover", handleDragOver2, !1),
            e.addEventListener("dragleave", handleDragLeave2, !1),
            e.addEventListener("drop", handleDrop2, !1),
            e.addEventListener("dragend", handleDragEnd2, !1);
    });
}



/* AUTÓDROMO */
document.addEventListener("dragend", function (event) {
    var letras = document.querySelectorAll("#turismodrag_autodromo .dragletter_autodromo");
    var word = "";

    letras.forEach(function (e) {
        word += e.innerHTML;
    });

    if (word == "AUTÓDROMO") {
        document.getElementById("imgautodromo").style.filter = "blur(0px)";
        document.getElementById("turismodrag-pista_autodromo").style.display = "none";
        document.getElementById("turismodrag-winautodromo").style.display = "block";
        print_autodromo(9);
    }
    else if (word.indexOf("AUTÓDROM") == 0) {
        document.getElementById("imgautodromo").style.filter = "blur(2px)";
        document.getElementById("turismodrag-winautodromo").style.display = "none";
        print_autodromo(8);
    }
    else if (word.indexOf("AUTÓDRO") == 0) {
        document.getElementById("imgautodromo").style.filter = "blur(4px)";
        document.getElementById("turismodrag-winautodromo").style.display = "none";
        print_autodromo(7);
    }
    else if (word.indexOf("AUTÓDR") == 0) {
        document.getElementById("imgautodromo").style.filter = "blur(6px)";
        document.getElementById("turismodrag-winautodromo").style.display = "none";
        print_autodromo(6);
    }
    else if (word.indexOf("AUTÓD") == 0) {
        document.getElementById("imgautodromo").style.filter = "blur(8px)";
        document.getElementById("turismodrag-winautodromo").style.display = "none";
        print_autodromo(5);
    }
    else if (word.indexOf("AUTÓ") == 0) {
        document.getElementById("imgautodromo").style.filter = "blur(10px)";
        document.getElementById("turismodrag-winautodromo").style.display = "none";
        print_autodromo(4);
    }
    else if (word.indexOf("AUT") == 0) {
        document.getElementById("imgautodromo").style.filter = "blur(12px)";
        document.getElementById("turismodrag-winautodromo").style.display = "none";
        print_autodromo(3);
    }
    else if (word.indexOf("AU") == 0) {
        document.getElementById("imgautodromo").style.filter = "blur(13px)";
        document.getElementById("turismodrag-winautodromo").style.display = "none";
        print_autodromo(2);
    }
    else if (word.indexOf("A") == 0) {
        document.getElementById("imgautodromo").style.filter = "blur(14px)";
        document.getElementById("turismodrag-winautodromo").style.display = "none";
        print_autodromo(1);
    }
    else {
        document.getElementById("imgautodromo").style.filter = "blur(15px)";
        document.getElementById("turismodrag-winautodromo").style.display = "none";
        print_autodromo(0);
    }
}, false);

function print_autodromo(cant) {
    var boxes = document.querySelectorAll("#turismodrag_autodromo .dragletter_autodromo");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute('style', 'color: #828386');
    }
    for (var i = 0; i < cant; i++) {
        boxes[i].setAttribute('style', 'color: white');
        boxes[i].style.background = "#FF8AD1";
    }
}
function pista_autodromo(number) {
    if (number == 1) {
        document.getElementsByClassName("autodromoP2")[0].style.display = "block";
        document.getElementsByClassName("autodromopista_autodromo1")[0].style.display = "block";
    }
    else {
        document.getElementsByClassName("autodromopista_autodromo2")[0].style.display = "block";
    }
}
function reset_autodromo() {
    document.getElementById("imgautodromo").style.filter = "blur(15px)";
    document.getElementById("turismodrag-pista_autodromo").style.display = "block";
    document.getElementById("turismodrag-winautodromo").style.display = "none";
    document.getElementsByClassName("autodromoP2")[0].style.display = "none";
    document.getElementsByClassName("autodromopista_autodromo1")[0].style.display = "none";
    document.getElementsByClassName("autodromopista_autodromo2")[0].style.display = "none";
    document.getElementById("turismodrag_autodromo").innerHTML = `
        <div class="dragletter_autodromo" draggable="true">Ó</div>
        <div class="dragletter_autodromo" draggable="true">M</div>
        <div class="dragletter_autodromo" draggable="true">D</div>
        <div class="dragletter_autodromo" draggable="true">U</div>
        <div class="dragletter_autodromo" draggable="true">O</div>
        <div class="dragletter_autodromo" draggable="true">T</div>
        <div class="dragletter_autodromo" draggable="true">O</div>
        <div class="dragletter_autodromo" draggable="true">R</div>
        <div class="dragletter_autodromo" draggable="true">A</div>
    `;
    dragSrcEl3 = null;
    cols3 = document.querySelectorAll("#turismodrag_autodromo .dragletter_autodromo");
    [].forEach.call(cols3, function (e) {
        e.addEventListener("dragstart", handleDragStart3, !1),
            e.addEventListener("dragenter", handleDragEnter3, !1),
            e.addEventListener("dragover", handleDragOver3, !1),
            e.addEventListener("dragleave", handleDragLeave3, !1),
            e.addEventListener("drop", handleDrop3, !1),
            e.addEventListener("dragend", handleDragEnd3, !1);
    });
}