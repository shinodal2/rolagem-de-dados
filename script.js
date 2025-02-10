function rollAllDice() {
    let diceTypes = {4: "d4", 6: "d6", 8: "d8", 20: "d20"};
    let resultElement = document.getElementById("result");
    resultElement.classList.remove('show');
    
    setTimeout(() => {
        let results = [];
        let total = 0;
        
        // Rolar os dados
        for (let sides in diceTypes) {
            let numDice = parseInt(document.getElementById(diceTypes[sides]).value) || 0;
            for (let i = 0; i < numDice; i++) {
                let roll = Math.floor(Math.random() * sides) + 1;
                results.push(`${sides}L: ${roll}`);
                total += roll;
            }
        }
        
        // Obter valor extra para somar
        let extraSum = parseInt(document.getElementById("sum").value) || 0;
        total += extraSum;

        resultElement.textContent = results.length > 0 ? 
            "Resultados: " + results.join(", ") + " (Total: " + total + ")" : 
            "Nenhum dado selecionado";

        setTimeout(() => {
            resultElement.classList.add('show');
        }, 200);
    }, 1000);
}
