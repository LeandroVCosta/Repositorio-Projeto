var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = ''
 if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(Dsfav) from Usuario where DsFAV = 'ds1';`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        database.executar(instrucaoSql);
        instrucaoSql = `select count(Dsfav) from Usuario where DsFAV = 'ds2';`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        database.executar(instrucaoSql);
        instrucaoSql = `select count(Dsfav) from Usuario where DsFAV = 'ds3';`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

}

function buscarMedidasEmTempoReal() {

    instrucaoSql = ''
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(Dsfav) from Usuario where DsFAV = 'ds1';`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        database.executar(instrucaoSql);
        instrucaoSql = `select count(Dsfav) from Usuario where DsFAV = 'ds2';`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        database.executar(instrucaoSql);
        instrucaoSql = `select count(Dsfav) from Usuario where DsFAV = 'ds3';`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }  else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
