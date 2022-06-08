var chefe = []

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
   
function popup() {
    pw.style.display = 'block'
} 

function popuprank() {
    pw1.style.display = 'block'
} 

function fechar() {
    pw.style.display = 'none'
    pw1.style.display = 'none'
}

function registrarchefe() {
    if(chefe.length >= 5) {
        alert(`A quantidade de chefes já passou de 5, a partir de agora não sera mais exibido.`)
        return;
    }
    chefe.push(in_chefe.value);
}

function mostrarrank() {
    in_chefe.style.display = `none`
    botoes.style.display = 'none'
    botaoref.style.display = `inline`
    ranking.style.display = `inline`
    var posicao = 1
    for (contador = 0; contador < 5; contador++){
    ranking.innerHTML += `Na ${posicao}º posição está o chefe <b>${chefe[contador]}</b> <br>`
    posicao++
    }
}

function refazer() {
    ranking.style.display = `none`
    in_chefe.style.display = `inline`
    botoes.style.display = 'inline'
    botaoref.style.display = `none`
    ranking.innerHTML = ``
}


function calcular() {
 let vida = Number(in_vida.value)
 let players = Number(in_player.value)
 let dano = Number(in_dano.value)
 let qtdhits = ([vida * players]/dano).toFixed(0)
 let dificuldade = 0
 if (in_vida.value == `` || in_player.value == `` || in_dano.value == ``){
     calculo.innerHTML = `PREENCHA TODOS OS CAMPOS!`
     return;
 }
 if (qtdhits < 15) {
 dificuldade = `fácil`
 }
 else if (qtdhits > 15 && qtdhits <= 30) {
 dificuldade = `dificil`
 }
 else {
 dificuldade = `muito dificil`
 }
 calculo.innerHTML = `Você vai precisar dar ${qtdhits} hits para matar o chefe, isso vai ser ${dificuldade}.`
}