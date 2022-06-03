function validar() {
    var nomeVar = cad_usuario.value;
    var emailVar = cad_email.value;
    var senhaVar = cad_senha.value;
    var confirmacaoSenhaVar = cad_senhac.value;
    var dsFAV = sel_ds.value;

    if (nomeVar == "") {
        sumir()
        cad_msgerro.style.display = `inline`;
        cad_msgerro.style.color = `red`;
        cad_msgerro.innerHTML = 'NOME DE USUARIO EM BRANCO';
        return false;
    } else if (nomeVar.length > 0) {
        sumir()
    }

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
    if (confirmacaoSenhaVar == "") {
        sumir()
        cad_msgerro.style.display = `inline`;
        cad_msgerro.style.color = `red`;
        cad_msgerro.innerHTML = 'CONFIRMAÇÃO DE SENHA EM BRANCO';
        return false;
    }
    if (dsFAV == "not") {
        sumir()
        cad_msgerro.style.display = `inline`;
        cad_msgerro.style.color = `red`;
        cad_msgerro.innerHTML = 'SELECIONE UM DARK SOULS';
        return false;
    }

    if (confirmacaoSenhaVar != senhaVar) {
        sumir()
        cad_msgerro.style.display = `inline`;
        cad_msgerro.style.color = `red`;
        cad_msgerro.innerHTML = 'SENHAS DIFERENTES';
        return false;
    }

    if (nomeVar.length > 0 && emailVar.length > 0 && senhaVar.length > 0 && confirmacaoSenhaVar.length > 0 && dsFAV != 'not' && confirmacaoSenhaVar == senhaVar){
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

function cadastrar() {
    if (validar() == false) {
        alert (`Houve um erro no preenchimento dos campos`)
        return;
    } 

    if (validaremail() == false) {
        cad_msgerro.style.display = `inline`;
        cad_msgerro.style.color = `red`;
        cad_msgerro.innerHTML = `EMAIL INVÁLIDO`
        return;
    }


    var nomeVar = cad_usuario.value;
    var emailVar = cad_email.value;
    var senhaVar = cad_senha.value;
    var confirmacaoSenhaVar = cad_senhac.value;
    var dsFAV = sel_ds.value
    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            dsServer: dsFAV
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {

            setTimeout(() => {
                window.location = "telalogin.html";
            }, "2000")

        } else {
            alert ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

function sumir() {
    cad_msgerro.style.display = 'none'
}