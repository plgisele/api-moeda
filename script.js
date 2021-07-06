// Configuração da data da cotação
function dataHora() {
    dataCotacao = new Date();
    let dia = dataCotacao.getDate();
    let mes = dataCotacao.getMonth();
    let ano = dataCotacao.getFullYear();
    let hora = dataCotacao.getHours();
    let minutos = dataCotacao.getMinutes();

    let meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

    return dia + " de " + meses[mes] + " de " + ano + " | " + hora + ":" + minutos + " UTC";
}

let cotacaoDoDia = document.getElementById("data-cotacao");
cotacaoDoDia.value = dataHora();

// API cotação

function mostra () {
    $( document ).ready(function () {
        var cotacao = function( dados ) {
            var dolar = dados;

            document.getElementById("valor-dolar").value = `R$ ${dolar.USDBRL.bid}`;
        };
    
        $.get("https://economia.awesomeapi.com.br/last/USD-BRL", cotacao );
    });
};

