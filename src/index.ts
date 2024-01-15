const buttonElem = document.querySelector(".clickme") as HTMLButtonElement;

const bodyElem: HTMLElement = document.body;

let isWhite: boolean = false;

buttonElem.addEventListener("click", () => {
  console.log("I clicked.");

  if (isWhite) {
    bodyElem.style.backgroundColor = "";
  } else {
    bodyElem.style.backgroundColor = "#CEDEBD";
  }
  isWhite = !isWhite;
});
