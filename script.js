function playVideo(src) {
  document.getElementById("player").style.display = "block";
  const video = document.getElementById("animeVideo");
  video.src = src;
  video.play();
  window.scrollTo(0, document.body.scrollHeight);
}
