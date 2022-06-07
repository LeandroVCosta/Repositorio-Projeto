function trocarimg() {
    if(sessionStorage.DS_FAVORITO == ds1) {
        fundo.src = "https://images3.alphacoders.com/271/271539.jpg"
    }
    if(sessionStorage.DS_FAVORITO == ds2) {
        fundo.src = "https://images3.alphacoders.com/271/271539.jpg"
    }
    if(sessionStorage.DS_FAVORITO == ds3) {
        fundo.src = "https://images3.alphacoders.com/271/271539.jpg"
    }
}

function verificar() {


 const email = sessionStorage.NOME_USUARIO;
 const nome = sessionStorage.EMAIL_USUARIO;

if  (nome == null && email == null){

        window.location = "../public/loginicio.html"
    }
}

dash_nome.innerHTML = sessionStorage.NOME_USUARIO;
function sair() {
    window.location = "/telalogin.html"
    sessionStorage.NOME_USUARIO = null;
    sessionStorage.DS_FAVORITO = null;
    sessionStorage.ID_USUARIO = null;
    sessionStorage.EMAIL_USUARIO = null;
}

let proximaAtualizacao;

window.onload = obterDadosGrafico();


// O gráfico é construído com três funções:
// 1. obterDadosGrafico -> Traz dados do Banco de Dados para montar o gráfico da primeira vez
// 2. plotarGrafico -> Monta o gráfico com os dados trazidos e exibe em tela
// 3. 8Grafico -> Atualiza o gráfico, trazendo novamente dados do Banco

// Esta função *obterDadosGrafico* busca os últimos dados inseridos em tabela de medidas.
// para, quando carregar o gráfico da primeira vez, já trazer com vários dados.
// A função *obterDadosGrafico* também invoca a função *plotarGrafico*

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
function obterDadosGrafico() {

    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimas/`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta, );
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

// Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
// A função *plotarGrafico* também invoca a função *atualizarGrafico*
function plotarGrafico(resposta) {
    console.log('iniciando plotagem do gráfico...');

    var dados = {
        labels: [`DS1`, `DS2`, `DS3`],
        datasets: [
            {
                yAxisID: 'y-votacao',
                label: 'Votos',
                borderColor: '#FFFFFF',
                backgroundColor: '#ff0000',
                fill: true,
                data: []
            }
        ]
    };


//    dados.datasets[0].data.push(registro.QtdDS2);
        dados.datasets[0].data.push(resposta[2].DS);
        dados.datasets[0].data.push(resposta[1].DS);
        dados.datasets[0].data.push(resposta[0].DS);


    console.log(JSON.stringify(dados));

    var ctx = canvas_grafico.getContext('2d');
    window.grafico_linha = Chart.Bar(ctx, {
        data: dados,
        options: {
            responsive: true,
            animation: { duration: 500 },
            hoverMode: 'index',
            stacked: false,
            title: {
                display: false,
                text: 'Dados capturados'
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-temperatura',
                    ticks: {
                        beginAtZero: true,
                        max: 25,
                        min: 0
                    }
                }, {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    id: 'y-votacao',
                    ticks: {
                        beginAtZero: true,
                        max: 25,
                        min: 0
                    },

                    gridLines: {
                        drawOnChartArea: false,
                    },
                }],
            }
        }
    });


}


// Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
// buscando a última medida inserida em tabela contendo as capturas, 

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
