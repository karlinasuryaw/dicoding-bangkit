var slidex = 1;


function showSlide(slidenum) {
  const slides = document.getElementsByClassName('carousel');
  if (slidenum > slides.length) { slidex = 1 }
  if (slidenum < 1) { slidex = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[slidex - 1].style.display = 'flex'
}


function nextSlide() {
  showSlide(slidex += 1);
}

function previousSlide() {
  showSlide(slidex -= 1);
}

window.onload = function () {
  showSlide(slidex);
  document.getElementById('prev').addEventListener('click', function () {
    previousSlide();
  })
  document.getElementById('next').addEventListener('click', function () {
    nextSlide();
  })
}

function myFunction() {
  document.getElementById("drop").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.d-btn')) {
  var drop = document.getElementById("drop");
    if (drop.classList.contains('show')) {
      drop.classList.remove('show');
    }
  }
}
