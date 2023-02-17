var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("js-header-hide").style.top = "0";
  } else {
    document.getElementById("js-header-hide").style.top = "-150px";
  }

  prevScrollpos = currentScrollPos;

  console.log(prevScrollpos);
};

console.log(prevScrollpos);
