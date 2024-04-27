const logo = document.getElementById("logo");
let position = 1;

logo.addEventListener("click", () => {
  switch (position) {
    case 1:
      logo.style.top = "0";
      logo.style.left = "calc(100% - 100px)";
      position = 2;
      break;
    case 2:
      logo.style.top = "calc(100% - 100px)";
      logo.style.left = "calc(100% - 100px)";
      position = 3;
      break;
    case 3:
      logo.style.top = "calc(100% - 100px)";
      logo.style.left = "0";
      position = 4;
      break;
    case 4:
      logo.style.top = "0";
      logo.style.left = "0";
      position = 1;
      break;
  }
});
