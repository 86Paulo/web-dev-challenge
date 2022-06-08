const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const john = document.getElementById("john");
const burt = document.getElementById("burt");
const janine = document.getElementById("janine");
const anna = document.getElementById("anna");

john.addEventListener("click", function() {
  document.getElementById("final-user").innerHTML = "John";
});

burt.addEventListener("click", function() {
  document.getElementById("final-user").innerHTML = "Burt";
});

janine.addEventListener("click", function() {
  document.getElementById("final-user").innerHTML = "Janine";
});

anna.addEventListener("click", function() {
  document.getElementById("final-user").innerHTML = "Anna";
});
