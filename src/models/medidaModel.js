var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = ''
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(fkDS) as DS from Usuario group by FkDS order by fkDS;`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    }  else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidas,
}
