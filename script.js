const formulario = document.querySelector("form");
const input = document.querySelector("#newItem");
const divLista = document.querySelector("#lista");
const removido = document.querySelector("#removido");
const removidoIcon = document.querySelector("#removido span");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value != "") {
    const novoItemDiv = document.createElement("div");
    novoItemDiv.classList.add("item");

    const novoItemInput = document.createElement("input");
    novoItemInput.type = "checkbox";

    divLista.appendChild(novoItemDiv);
    novoItemDiv.appendChild(novoItemInput);

    const novoItemTexto = document.createTextNode(input.value);

    novoItemDiv.appendChild(novoItemTexto);

    const novoItemSpan = document.createElement("span");
    const novoItemIcon = document.createElement("img");
    novoItemIcon.src = "Icon.png";

    novoItemSpan.appendChild(novoItemIcon);
    novoItemDiv.appendChild(novoItemSpan);

    input.value = "";

    novoItemSpan.addEventListener("click", () => {
      if (novoItemInput.checked) {
        novoItemDiv.remove();
        removido.style.display = "block";
      }
    });
  }
  removidoIcon.addEventListener("click", () => {
    removido.style.display = "none";
  });
});
