function calcular() {
    // Obtém os valores dos inputs
    var precoAlcool = parseFloat(document.getElementById("alcool").value);
    var precoGasolina = parseFloat(document.getElementById("gasolina").value);

    // Valida se os campos estão preenchidos
    if (isNaN(precoAlcool) || isNaN(precoGasolina)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira os dois valores.";
        return;
    }

    // Calcula a relação entre os preços
    var relacao = precoAlcool / precoGasolina;

    // Mostra o resultado na tela
    if (relacao < 0.7) {
        document.getElementById("resultado").innerHTML = "É melhor abastecer com Álcool!";
    } else {
        document.getElementById("resultado").innerHTML = "É melhor abastecer com Gasolina!";
    }
}