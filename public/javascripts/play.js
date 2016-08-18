var video = document.getElementById("texture");

function play() {
    if (video.paused)
        video.play();
    else
        video.pause();
}
