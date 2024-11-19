const btnDown = document.getElementById("scrollDown");
const btnUp = document.getElementById("scrollTop");

btnDown.addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
});

btnUp.addEventListener("click", () => {
  window.scrollTo({
    top:0,
    behavior: "smooth",
  })
});
