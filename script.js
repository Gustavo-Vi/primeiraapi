let valor = 0;
const num = document.getElementById("numero");
const menos = document.getElementById("menos");
const mais = document.getElementById("mais");
const resetar = document.getElementById("resetar")

menos.addEventListener("click", () => {
    if(valor == 0) return; //para
    valor -= 1;
    num.textContent = valor;
});

mais.addEventListener("click", () => {
    valor += 1;
    num.textContent = valor;
});

resetar.addEventListener("click",() => {
      if(valor == 0) return;
    valor = 0;
    num.textContent = valor;
})



