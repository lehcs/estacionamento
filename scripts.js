class estacionamento {
    constructor(valorPago) {
        this.valorPago = valorPago;
    }
    calcularTempo(){
        if(this.valorPago <= 0){
            return "Valor insuficiente para estacionar";
        }
        else if(this.valorPago === 1.00){
            return "Tempo máximo de 30 minutos.";
        }
        else if(this.valorPago > 1.00 && this.valorPago < 1.75){
            let troco = this.calcularTroco(1.00);
            return `Tempo máximo de 30 minutos. Seu troco é de R$${troco}.`;
        }
        else if(this.valorPago === 1.75){
            return "Tempo máximo de 1 hora.";
        }
        else if(this.valorPago > 1.75 && this.valorPago < 3.00){
            let troco = this.calcularTroco(1.75);
            return `Tempo máximo de 1 hora. Seu troco é de R$${troco}.`;
        }
        else if(this.valorPago === 3.00){
            return "Tempo máximo de 2 horas.";
        }
        else if(this.valorPago > 3.00){
            let troco = this.calcularTroco(3.00);
            return `Tempo máximo de 2 horas. Seu troco é de R$${troco}.`;
        }
        else{
            return "Valor pago inválido.";
        }
    }
    calcularTroco(valorTarifa) {
        if (this.valorPago >= valorTarifa){
            return (this.valorPago - valorTarifa).toFixed(2);
        } else{
            return "valor insuficiente";
        }
    }
}
function calcularEstacionamento() {
    const valor = parseFloat(document.getElementById('valor').value);

    const novoEstacionamento = new estacionamento(valor);

    const resultado = novoEstacionamento.calcularTempo();

    document.getElementById('resultado').textContent = resultado;
}
