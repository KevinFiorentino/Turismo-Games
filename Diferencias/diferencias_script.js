var aciertos = 0;

//Asignamos eventos a la primero imagen y pintamos las capas de blanco
document.querySelectorAll(".capa-diferencia-cabildo2").forEach(e => {
    let id = e.id;
    e.addEventListener("click", checkPathCabildo2);
    document.querySelectorAll("#"+id+" path").forEach(p => {
        p.style.fill = "white";
    });
});

//Asignamos eventos a la segunda imagen
document.querySelectorAll(".capa-diferencia-cabildo").forEach(e => {
    e.addEventListener("click", checkPathCabildo);
});
function checkPathCabildo() {
    let id = this.id;
    aciertos += 1;

    document.querySelectorAll("#"+id+" path").forEach(p => {
        p.style.fill = "red";
    });

    //Agregamos el 2 para colorear la otra imagen.
    document.querySelectorAll("#"+id+"2 path").forEach(p => {
        p.style.fill = "red";
    });

    this.removeEventListener("click", checkPathCabildo);
    document.querySelectorAll("#"+id+"2")[0].removeEventListener("click", checkPathCabildo2);
    checkForWinCabildo();
}


function checkPathCabildo2() {
    let id = this.id;
    aciertos += 1;

    document.querySelectorAll("#"+id+" path").forEach(p => {
        p.style.fill = "red";
    });

    //Quitamos el 2 para la ID de la otra imagen
    document.querySelectorAll("#"+id.slice(0, -1)+" path").forEach(p => {
        p.style.fill = "red";
    });

    this.removeEventListener("click", checkPathCabildo2);
    document.querySelectorAll("#"+id.slice(0, -1))[0].removeEventListener("click", checkPathCabildo);
    checkForWinCabildo();
}


function checkForWinCabildo() {
    document.getElementById("cabildo-aciertos").innerHTML = `<p>Cantidad de aciertos: ${aciertos}/7</p>`;
    if(aciertos == 7) {
        document.getElementById("win-cabildo").style.display = "block";
        document.getElementById("cabildo-aciertos").style.display = "none";
        console.log("GANASTE");
    }
}

function resetCabildo() {
    aciertos = 0;
    document.getElementById("cabildo-aciertos").innerHTML = `<p>Cantidad de aciertos: ${aciertos}/7</p>`;

    document.getElementById("win-cabildo").style.display = "none";
    document.getElementById("cabildo-aciertos").style.display = "block";

    document.querySelectorAll(".capa-diferencia-cabildo").forEach(e => {
        let id = e.id;
        e.addEventListener("click", checkPathCabildo);
        document.querySelectorAll("#"+id+" path").forEach(p => {
            p.style.fill = "black";
        });
    });
    document.querySelectorAll(".capa-diferencia-cabildo2").forEach(e => {
        let id = e.id;
        e.addEventListener("click", checkPathCabildo2);
        document.querySelectorAll("#"+id+" path").forEach(p => {
            p.style.fill = "white";
        });
    });
}