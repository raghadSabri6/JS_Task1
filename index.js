document.querySelector("div").classList.add("demo");
document.querySelector(".add").classList.add("vip");
document.querySelector(".delete").classList.remove("vip");

var submit = document.querySelector(".submit");

submit.onclick = function () {
  document.querySelector(".toggle").classList.toggle("vip");
};
