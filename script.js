const form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const condicao = document.getElementById("condicao").value;
  const contato1 = document.getElementById("contato1").value;
  const contato2 = document.getElementById("contato2").value;
  const contato3 = document.getElementById("contato3").value;
  const obs = document.getElementById("obs").value;

  // Formatação compatível com iPhone (sem espaços extras no início das linhas)
  const texto =
    "Nome: " +
    nome.trim() +
    "\nIdade: " +
    idade.trim() +
    "\nCondição: " +
    condicao.trim() +
    "\nContato 1: " +
    contato1.trim() +
    "\nContato 2: " +
    contato2.trim() +
    "\nContato 3: " +
    contato3.trim() +
    "\nObservações: " +
    obs.trim();

  const qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = "";
  new QRCode(qrDiv, {
    text: texto,
    width: 300,
    height: 300,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
});
