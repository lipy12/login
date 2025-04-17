function somar() {
  const v1 = Number(document.getElementById("valor1").value);
  const v2 = Number(document.getElementById("valor2").value);
  const Resultado = v1 + v2;
  document.getElementById("Resultado").innerText = `Resultado ${Resultado}`;
}
function subtracao() {
    const v1 = Number(document.getElementById("valor1").value);
    const v2 = Number(document.getElementById("valor2").value);
    const Resultado = v1 - v2;
    document.getElementById("Resultado").innerText = `Resultado ${Resultado}`;
}
function dividir() {
    const v1 = Number(document.getElementById("valor1").value);
    const v2 = Number(document.getElementById("valor2").value);
    const Resultado = v1 / v2;
    document.getElementById("Resultado").innerText = `Resultado ${Resultado}`;
}
