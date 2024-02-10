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

document
  .querySelectorAll(".btn-writing-mode")
  .forEach((btn) => {
    btn.addEventListener("click", function () {
      const targetSelector =
        btn.getAttribute("data-target");
      const targets =
        document.querySelectorAll(targetSelector);

      const writingMode = btn.getAttribute("data-value");

      targets.forEach((target) => {
        target.style.writingMode = writingMode;
      });
    });
  });
