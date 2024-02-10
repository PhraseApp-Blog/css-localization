document.querySelectorAll(".btn-ltr").forEach((btn) => {
  btn.addEventListener("click", function () {
    document.documentElement.dir = "ltr";
  });
});
document.querySelectorAll(".btn-rtl").forEach((btn) => {
  btn.addEventListener("click", function () {
    document.documentElement.dir = "rtl";
  });
});
