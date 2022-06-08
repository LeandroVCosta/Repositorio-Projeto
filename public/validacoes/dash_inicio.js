
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

function trocarimg() {
    var nomesouls = ``
    var dsfav = sessionStorage.DS_FAVORITO;
    if(dsfav == `1`) {
        fundocont.style.backgroundImage = 'url(./img/imgsdarksouls/dark1.jpg)';
        nomesouls = `Dark Souls 1`
        ds.innerHTML += `${nomesouls}`
        return
    }
    if(dsfav == `2`) {
        fundocont.style.backgroundImage = 'url(./img/imgsdarksouls/darksouls2.jpg)';
        nomesouls = `Dark Souls 2`
        ds.innerHTML += `${nomesouls}`
        return
    }
    if(dsfav == `3`) {
        fundocont.style.backgroundImage = 'url(./img/imgsdarksouls/darksouls3.jpg)';
        nomesouls = `Dark Souls 3`
        ds.innerHTML += `${nomesouls}`
        return
    }
}


