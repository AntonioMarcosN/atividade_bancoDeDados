const mongoose = require(`mongoose`);

const tarefasSchema = new mongoose.Schima({
    id : {type: String},
    descricao: {type: String},
    dataInclusao: {type: String},
    concluido: {type: Boolean},
    nomeColaborador: {type: String}
},{
    versionKey: false
});

const tarefas = mongoose.model(`tarefas`, tarefasSchima);

module.exports = tarefas;
