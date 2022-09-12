"use strict";

const Mongoose = require("mongoose");

module.exports = class Treino extends Mongoose.Schema{
    constructor(){
        super({
            nome: String,
            tipo_treino: String,
            data_treino: String,
            status: String,
            create_at: Date,
            update_at: Date
        });
        Mongoose.model("Treino", this);
    }
};