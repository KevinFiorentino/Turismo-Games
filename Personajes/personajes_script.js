/* MAFALDA */
document.getElementById("startMafalda").addEventListener("click", function(event) {
    var video_mafalda = document.getElementById("video_mafalda");
    video_mafalda.play();

    document.getElementById("startMafalda").style.display = "none";
    document.getElementById("stopMafalda").style.display = "block";

});
document.getElementById("stopMafalda").addEventListener("click", function(event) {
    var video_mafalda = document.getElementById("video_mafalda");
    video_mafalda.pause();

    document.getElementById("startMafalda").style.display = "block";
    document.getElementById("stopMafalda").style.display = "none";
});

/* DON FULGENCIO */
document.getElementById("startDonFulgencio").addEventListener("click", function(event) {
    var video_donfulgencio = document.getElementById("video_donfulgencio");
    video_donfulgencio.play();

    document.getElementById("startDonFulgencio").style.display = "none";
    document.getElementById("stopDonFulgencio").style.display = "block";

});
document.getElementById("stopDonFulgencio").addEventListener("click", function(event) {
    var video_donfulgencio = document.getElementById("video_donfulgencio");
    video_donfulgencio.pause();

    document.getElementById("startDonFulgencio").style.display = "block";
    document.getElementById("stopDonFulgencio").style.display = "none";
});

/* LARGUIRUCHO */
document.getElementById("startLarguirucho").addEventListener("click", function(event) {
    var video_larguirucho = document.getElementById("video_larguirucho");
    video_larguirucho.play();

    document.getElementById("startLarguirucho").style.display = "none";
    document.getElementById("stopLarguirucho").style.display = "block";

});
document.getElementById("stopLarguirucho").addEventListener("click", function(event) {
    var video_larguirucho = document.getElementById("video_larguirucho");
    video_larguirucho.pause();

    document.getElementById("startLarguirucho").style.display = "block";
    document.getElementById("stopLarguirucho").style.display = "none";
});