document.addEventListener("DOMContentLoaded", function () {
  const themeBtn = document.getElementById("theme");
  const hamburger = document.getElementById("iahmgr");
  const navigation = document.getElementById("ianav");
  const close = document.getElementById("ianx");

  themeBtn.addEventListener("click", () => {
    const dark = document.body.classList.toggle("theme-dark");
    themeBtn.setAttribute("aria-pressed", String(dark));
  });

  hamburger.addEventListener("click", () => {
    navigation.classList.add("active");
  });

  close.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});
