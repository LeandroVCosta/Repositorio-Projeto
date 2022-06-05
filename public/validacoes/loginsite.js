function validar() {
    var emailVar = cad_email.value;
    var senhaVar = cad_senha.value;

    if (emailVar == "") {
        sumir()
        cad_msgerro.style.display = `inline`;
        cad_msgerro.style.color = `red`;
        cad_msgerro.innerHTML = 'EMAIL EM BRANCO';
        return false;
    }

    if (senhaVar == "") {
        sumir()
        cad_msgerro.style.display = `inline`;
        cad_msgerro.style.color = `red`;
        cad_msgerro.innerHTML = 'SENHA EM BRANCO';
        return false;
    }

    if (emailVar.length > 0 && senhaVar.length > 0){
        sumir()
    }

    return true;


}

function validaremail() {
    emailVar = cad_email.value;
    if (emailVar.indexOf("@") != -1 && emailVar.indexOf(".com") != -1) {
        return true;
    } 
    else if (emailVar.indexOf("@") != -1 && emailVar.indexOf(".school") != -1) {
        return true;
    } else {
        return false
    }
}

function entrar() {
    
    if (validar() == false) {
        alert (`Houve um erro no preenchimento dos campos, por favor verifique os campos novamente`)
        return;
    } 
    
    if (validaremail() == false) {
        cad_msgerro.style.display = `inline`;
        cad_msgerro.style.color = `red`;
        cad_msgerro.innerHTML = `EMAIL INVÁLIDO`
        return;
    }
    var emailVar = cad_email.value;
    var senhaVar = cad_senha.value;

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.Email;
                sessionStorage.DS_FAVORITO = json.DsFAV;
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.NOME_USUARIO = json.nomeUsuario;

                setTimeout(function () {
                    window.location = "./dashboard.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {
            alert(`Erro ao realizar o Login`)
            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function sumir() {
    cad_msgerro.style.display = 'none'
}