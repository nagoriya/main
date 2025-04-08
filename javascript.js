document.querySelector(".btn").addEventListener("click", function() {
  const input = document.querySelector(".search").value;
  alert("You searched for: " + input);
});
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Page reload से रोकता है
  alert("Thank you for contacting us, " + form.name.value + "!");
  form.reset(); // फॉर्म को खाली करता है
});
const navItems = document.querySelectorAll(".nav nav div");
navItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.color = "orange";
  });
  item.addEventListener("mouseleave", () => {
    item.style.color = "white";
  });
});
const copyRight = document.querySelector(".coppy li");
const year = new Date().getFullYear();
copyRight.textContent = `© ${year} English Spoken with Vinod Sir. All Rights Reserved.`;