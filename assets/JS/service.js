
document.querySelectorAll(".read-more-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    let text = this.previousElementSibling;

    if (text.classList.contains("short-text")) {
      text.classList.remove("short-text");
      text.classList.add("full-text");
      this.innerText = "Read Less";
    } else {
      text.classList.add("short-text");
      text.classList.remove("full-text");
      this.innerText = "Read More";
    }
  });
});
