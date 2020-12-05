var coll = document.getElementsByClassName("collapsible");
var con = document.getElementsByClassName("content");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", showContent);
}

function showContent() {
  var content = this.nextElementSibling;
  if (this.classList.contains("active")) {
    content.style.display = "none";
    this.classList.remove("active");
  } else {
    for (i = 0; i < coll.length; i++) {
      coll[i].classList.remove("active");
      con[i].style.display = "none";
    }
    content.style.display = "block";
    this.classList.add("active");
  }
}
