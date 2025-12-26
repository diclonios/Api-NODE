const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    "cadastro",
    "root",
    "35559136",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

sequelize.authenticate().then((function(){
    console.log("Banco de dados conectado MOTHERFUCKER");
})).catch(function(erro){
    console.log("Erro ao se conectar com banco de dados " + erro);
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}