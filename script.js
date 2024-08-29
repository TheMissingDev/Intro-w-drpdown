const menubtn = document.getElementById("menu-b");
const lr = document.querySelector(".lr");
const nav = document.querySelector(".navigate");
const bg = document.querySelector(".bg");


let counter = 0;
menubtn.addEventListener("click", function (e) {
  counter += 1;
  console.log("clicked!");
  console.log(counter);
  if (counter == 1) {
    menubtn.innerHTML =
      "<img src='/images/icon-close-menu.svg' alt='menubar.close'>";
      bg.style.opacity = 1;
    nav.style.opacity = 1;
    lr.style.opacity = 1;
  } else if (counter == 2) {
    menubtn.innerHTML = "<img src='/images/icon-menu.svg' alt='menubar'>";
    bg.style.opacity = 0;
    nav.style.opacity = 0;
    lr.style.opacity = 0;
    counter = 0;
  }
});
