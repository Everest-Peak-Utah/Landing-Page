let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
function areaCoveredClick(){
  let x = document.getElementsByClassName('dropdown-content')[0];
  if(x.style.maxHeight == '0px'){
    x.style.maxHeight = '250px';
  } else {
    x.style.maxHeight = '0px';
  }
}