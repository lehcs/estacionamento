class estacionamento {
    constructor(valorPago) {
        this.valorPago = valorPago;
    }
    calcularTempo(tempo){
        if(this.valorPago <= 0){
            return "Valor pago inválido.";
        }
        else if(tempo <= 0){
            return "Tempo inválido.";
        }
        else if(this.valorPago = 1.00){
            return "Você pode ficar 30 minutos.";
        }
        else if(this.valorPago > 1.00 && this.valorPago < 1.75){
            return "Tempo máximo de 30 minutos e seu troco é de R$" + this.calcularTroco(this.valorPago) + ".";
        }
        else if(this.valorPago = 1.75){
            return "Tempo máximo de 1 hora.";
        }
        else if(this.valorPago > 1.75 && this.valorPago < 3.00){
            return "Tempo máximo de 1 hora e seu troco é de R$" + this.calcularTroco(this.valorPago) + ".";
        }
        else if(this.valorPago = 3.00){
            return "Tempo máximo de 2 horas.";
        }
        else if(this.valorPago > 3.00){
            return "Tempo máximo de 2 horas e seu troco é de R$" + this.calcularTroco(this.valorPago) + ".";
        }
        else{
            return "Valor pago inválido.";
        }
    }
    calcularTroco(valorTotal) {
        if (this.valorPago < valorTotal) {
            return "Valor pago é menor que o valor total.";
        } else if (this.valorPago === valorTotal) {
            return "Não há troco.";
        } else if (this.valorPago > valorTotal) {
            return "Troco: R$" + (this.valorPago - valorTotal).toFixed(2);
        }
        return this.valorPago - valorTotal;
    }
}