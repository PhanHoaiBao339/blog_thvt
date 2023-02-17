var slideIndex = 1;

function plusDivs(n) {
  var i;

  showDivs((slideIndex = n + 1));

  for (i = 0; i < btn.length; i++) {
    btn[i].classList.remove("home-slideshow__itembtn--active");
  }

  btn[slideIndex - 1].classList.add("home-slideshow__itembtn--active");
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("home-slideshow__img");

  if (n > x.length) {
    slideIndex = 1;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.animation = "hide-sau ease 2s";
    x[i].style.opacity = "0";
  }

  x[slideIndex - 1].style.animation = "hide-truoc ease 3s";
  x[slideIndex - 1].style.opacity = "1";
}

function addBtnSlide() {
  var i;
  var img = document.getElementsByClassName("home-slideshow__img");
  var list = document.getElementById("js-home-slideshow-add-btn");

  for (i = 0; i < img.length; i++) {
    var itemBtnSlide = document.createElement("li");
    itemBtnSlide.classList.add("home-slideshow__item");
    itemBtnSlide.innerHTML = `
    <div class="home-slideshow__itembtn ${
      i === 0 ? "home-slideshow__itembtn--active" : ""
    }" onclick="plusDivs(${i})"></div>
    `;

    list.appendChild(itemBtnSlide);
  }
}

showDivs(indexedDB);
addBtnSlide();

var btn = document.getElementsByClassName("home-slideshow__itembtn");
