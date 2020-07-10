/* ********** CABILDO  ********** */
for (
    var piezas_cabildo = document.getElementsByClassName("imgcabildo"),
        tamWidh_cabildo = [134, 192, 134, 163, 134, 163, 134, 192, 134],
        tamHeight_cabildo = [163, 134, 163, 134, 192, 134, 163, 134, 163],
        elementSelect_cabildo = 0,
        currentX_cabildo = 0,
        currentY_cabildo = 0,
        currentPosX_cabildo = 0,
        currentPosY_cabildo = 0,
        i = 0;
    i < piezas_cabildo.length;
    i++
)
    piezas_cabildo[i].setAttribute("width", tamWidh_cabildo[i]),
        piezas_cabildo[i].setAttribute("height", tamHeight_cabildo[i]),
        i % 2 == 0 ? piezas_cabildo[i].setAttribute("x", Math.floor(10 * Math.random() + 620)) : piezas_cabildo[i].setAttribute("x", Math.floor(10 * Math.random() + 10)),
        piezas_cabildo[i].setAttribute("y", Math.floor(400 * Math.random() + 1)),
        piezas_cabildo[i].setAttribute("onmousedown", "seleccionarElemento_cabildo(evt)");
function seleccionarElemento_cabildo(e) {
    (elementSelect_cabildo = reordenar_cabildo(e)),
        (currentX_cabildo = e.clientX),
        (currentY_cabildo = e.clientY),
        (currentPosX_cabildo = parseFloat(elementSelect_cabildo.getAttribute("x"))),
        (currentPosY_cabildo = parseFloat(elementSelect_cabildo.getAttribute("y"))),
        elementSelect_cabildo.setAttribute("onmousemove", "moverElemento_cabildo(evt)");
}
function moverElemento_cabildo(e) {
    var t = e.clientX - currentX_cabildo,
        r = e.clientY - currentY_cabildo;
    (currentPosX_cabildo += t),
        (currentPosY_cabildo += r),
        elementSelect_cabildo.setAttribute("x", currentPosX_cabildo),
        elementSelect_cabildo.setAttribute("y", currentPosY_cabildo),
        (currentX_cabildo = e.clientX),
        (currentY_cabildo = e.clientY),
        elementSelect_cabildo.setAttribute("onmouseout", "deseleccionarElemento_cabildo(evt)"),
        elementSelect_cabildo.setAttribute("onmouseup", "deseleccionarElemento_cabildo(evt)"),
        iman_cabildo();
}
function deseleccionarElemento_cabildo(e) {
    testing_cabildo(), 0 != elementSelect_cabildo && (elementSelect_cabildo.removeAttribute("onmousemove"), elementSelect_cabildo.removeAttribute("onmouseout"), elementSelect_cabildo.removeAttribute("onmouseup"), (elementSelect_cabildo = 0));
}
var containersvg = document.getElementById("puzzlesvg-cabildo");
function reordenar_cabildo(e) {
    var t = e.target.parentNode,
        r = t.cloneNode(!0),
        i = t.getAttribute("id");
    return containersvg.removeChild(document.getElementById(i)), containersvg.appendChild(r), containersvg.lastChild.firstChild;
}
var origX = [200, 304, 466, 185, 333, 452, 200, 304, 466],
    origY = [85, 100, 85, 233, 204, 233, 352, 366, 352];
function iman_cabildo() {
    for (var e = 0; e < piezas_cabildo.length; e++) Math.abs(currentPosX_cabildo - origX[e]) < 15 && Math.abs(currentPosY_cabildo - origY[e]) < 15 && (elementSelect_cabildo.setAttribute("x", origX[e]), elementSelect_cabildo.setAttribute("y", origY[e]));
}
function testing_cabildo() {
    for (var e = 0, t = document.getElementsByClassName("cabildo"), r = 0; r < piezas_cabildo.length; r++) {
        var i = parseFloat(t[r].firstChild.getAttribute("x")),
            n = parseFloat(t[r].firstChild.getAttribute("y"));
        (ide = t[r].getAttribute("id")), origX[ide] == i && origY[ide] == n && (e += 1);
    }
    9 == e && (document.getElementsByClassName("cabildo-end")[0].style.display = "block");
}

/* ********** PLANETARIO  ********** */
for (
    var piezas_planetario = document.getElementsByClassName("imgplanetario"),
        tamWidh_planetario = [134, 192, 134, 163, 134, 163, 134, 192, 134],
        tamHeight_planetario = [163, 134, 163, 134, 192, 134, 163, 134, 163],
        elementSelect_planetario = 0,
        currentX_planetario = 0,
        currentY_planetario = 0,
        currentPosX_planetario = 0,
        currentPosY_planetario = 0,
        i = 0;
    i < piezas_planetario.length;
    i++
)
    piezas_planetario[i].setAttribute("width", tamWidh_planetario[i]),
        piezas_planetario[i].setAttribute("height", tamHeight_planetario[i]),
        i % 2 == 0 ? piezas_planetario[i].setAttribute("x", Math.floor(10 * Math.random() + 620)) : piezas_planetario[i].setAttribute("x", Math.floor(10 * Math.random() + 10)),
        piezas_planetario[i].setAttribute("y", Math.floor(400 * Math.random() + 1)),
        piezas_planetario[i].setAttribute("onmousedown", "seleccionarElemento_planetario(evt)");
function seleccionarElemento_planetario(e) {
    (elementSelect_planetario = reordenar_planetario(e)),
        (currentX_planetario = e.clientX),
        (currentY_planetario = e.clientY),
        (currentPosX_planetario = parseFloat(elementSelect_planetario.getAttribute("x"))),
        (currentPosY_planetario = parseFloat(elementSelect_planetario.getAttribute("y"))),
        elementSelect_planetario.setAttribute("onmousemove", "moverElemento_planetario(evt)");
}
function moverElemento_planetario(e) {
    var t = e.clientX - currentX_planetario,
        r = e.clientY - currentY_planetario;
    (currentPosX_planetario += t),
        (currentPosY_planetario += r),
        elementSelect_planetario.setAttribute("x", currentPosX_planetario),
        elementSelect_planetario.setAttribute("y", currentPosY_planetario),
        (currentX_planetario = e.clientX),
        (currentY_planetario = e.clientY),
        elementSelect_planetario.setAttribute("onmouseout", "deseleccionarElemento_planetario(evt)"),
        elementSelect_planetario.setAttribute("onmouseup", "deseleccionarElemento_planetario(evt)"),
        iman_planetario();
}
function deseleccionarElemento_planetario(e) {
    testing_planetario(), 0 != elementSelect_planetario && (elementSelect_planetario.removeAttribute("onmousemove"), elementSelect_planetario.removeAttribute("onmouseout"), elementSelect_planetario.removeAttribute("onmouseup"), (elementSelect_planetario = 0));
}
var containersvg2 = document.getElementById("puzzlesvg-planetario");
function reordenar_planetario(e) {
    var t = e.target.parentNode,
        r = t.cloneNode(!0),
        i = t.getAttribute("id");
    return containersvg2.removeChild(document.getElementById(i)), containersvg2.appendChild(r), containersvg2.lastChild.firstChild;
}
var origX2 = [200, 304, 466, 185, 333, 452, 200, 304, 466],
    origY2 = [85, 100, 85, 233, 204, 233, 352, 366, 352];
function iman_planetario() {
    for (var e = 0; e < piezas_planetario.length; e++) Math.abs(currentPosX_planetario - origX2[e]) < 15 && Math.abs(currentPosY_planetario - origY2[e]) < 15 && (elementSelect_planetario.setAttribute("x", origX2[e]), elementSelect_planetario.setAttribute("y", origY2[e]));
}
function testing_planetario() {
    for (var e = 0, t = document.getElementsByClassName("planetario"), r = 0; r < piezas_planetario.length; r++) {
        var i = parseFloat(t[r].firstChild.getAttribute("x")),
            n = parseFloat(t[r].firstChild.getAttribute("y"));
        (ide = t[r].getAttribute("id") - 9), origX2[ide] == i && origY2[ide] == n && (e += 1);
    }
    9 == e && (document.getElementsByClassName("planetario-end")[0].style.display = "block");
}

/* ********** MUSEO CIENCIAS NATURALEZ  ********** */
for (
    var piezas_csnat3 = document.getElementsByClassName("imgCsNat"),
        tamWidh_csnat = [134, 192, 134, 163, 134, 163, 134, 192, 134],
        tamHeight_csnat = [163, 134, 163, 134, 192, 134, 163, 134, 163],
        elementSelect_csnat = 0,
        currentX_csnat = 0,
        currentY_csnat = 0,
        currentPosX_csnat = 0,
        currentPosY_csnat = 0,
        i = 0;
    i < piezas_csnat3.length;
    i++
)
    piezas_csnat3[i].setAttribute("width", tamWidh_csnat[i]),
        piezas_csnat3[i].setAttribute("height", tamHeight_csnat[i]),
        i % 2 == 0 ? piezas_csnat3[i].setAttribute("x", Math.floor(10 * Math.random() + 620)) : piezas_csnat3[i].setAttribute("x", Math.floor(10 * Math.random() + 10)),
        piezas_csnat3[i].setAttribute("y", Math.floor(400 * Math.random() + 1)),
        piezas_csnat3[i].setAttribute("onmousedown", "seleccionarElemento_csnat(evt)");
function seleccionarElemento_csnat(e) {
    (elementSelect_csnat = reordenar3(e)),
        (currentX_csnat = e.clientX),
        (currentY_csnat = e.clientY),
        (currentPosX_csnat = parseFloat(elementSelect_csnat.getAttribute("x"))),
        (currentPosY_csnat = parseFloat(elementSelect_csnat.getAttribute("y"))),
        elementSelect_csnat.setAttribute("onmousemove", "moverElemento3_csnat(evt)");
}
function moverElemento3_csnat(e) {
    var t = e.clientX - currentX_csnat,
        r = e.clientY - currentY_csnat;
    (currentPosX_csnat += t),
        (currentPosY_csnat += r),
        elementSelect_csnat.setAttribute("x", currentPosX_csnat),
        elementSelect_csnat.setAttribute("y", currentPosY_csnat),
        (currentX_csnat = e.clientX),
        (currentY_csnat = e.clientY),
        elementSelect_csnat.setAttribute("onmouseout", "deseleccionarElemento_csnat(evt)"),
        elementSelect_csnat.setAttribute("onmouseup", "deseleccionarElemento_csnat(evt)"),
        iman_csnat();
}
function deseleccionarElemento_csnat(e) {
    testing_csnat(), 0 != elementSelect_csnat && (elementSelect_csnat.removeAttribute("onmousemove"), elementSelect_csnat.removeAttribute("onmouseout"), elementSelect_csnat.removeAttribute("onmouseup"), (elementSelect_csnat = 0));
}
var containersvg_csnat = document.getElementById("puzzlesvg-csnat");
function reordenar3(e) {
    var t = e.target.parentNode,
        r = t.cloneNode(!0),
        i = t.getAttribute("id");
    return containersvg_csnat.removeChild(document.getElementById(i)), containersvg_csnat.appendChild(r), containersvg_csnat.lastChild.firstChild;
}
var origX3 = [200, 304, 466, 185, 333, 452, 200, 304, 466],
    origY3 = [85, 100, 85, 233, 204, 233, 352, 366, 352];
function iman_csnat() {
    for (var e = 0; e < piezas_csnat3.length; e++) Math.abs(currentPosX_csnat - origX3[e]) < 15 && Math.abs(currentPosY_csnat - origY3[e]) < 15 && (elementSelect_csnat.setAttribute("x", origX3[e]), elementSelect_csnat.setAttribute("y", origY3[e]));
}
function testing_csnat() {
    for (var e = 0, t = document.getElementsByClassName("CsNat"), r = 0; r < piezas_csnat3.length; r++) {
        var i = parseFloat(t[r].firstChild.getAttribute("x")),
            n = parseFloat(t[r].firstChild.getAttribute("y"));
        (ide = t[r].getAttribute("id") - 18), origX3[ide] == i && origY3[ide] == n && (e += 1);
    }
    9 == e && (document.getElementsByClassName("csnat-end")[0].style.display = "block");
}