let aboutMeSection = document.querySelector("#aboutMe");
let aboutMetext = aboutMeSection.querySelectorAll("p");
let studentName = aboutMeSection.querySelector(".aboutMe");
function updateaboutMeContent() {
  aboutMetext.forEach((p) => {
    p.textContent = "I am open minded and likes to try and learn new things, especially when it comes to coding. I got interested in coding a couple of years ago and I got myself hooked. I first started in SQL by extracting tables from files and then learning different ML techniques for predicting possible outcomes. Now I am curious to learn html and javascript.";
  });
  studentName.textContent = "Hello! I am Marianne - the code master";
}

aboutMetext.forEach((p) => {
  p.addEventListener("click", () => {
    p.style.backgroundColor = "powderblue";
    p.style.color = "white";
  });
});

updateaboutMeContent();