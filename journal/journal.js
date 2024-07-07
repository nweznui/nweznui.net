function readMore(num) {
  var dots = document.querySelector(`.entry[entryNum="${num}"] .dots`);
  var moreText = document.querySelector(`.entry[entryNum="${num}"] .more`);
  var btnText = document.querySelector(`.entry[entryNum="${num}"] .moreBtn`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "expand";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "less";
    moreText.style.display = "inline";
  }
}