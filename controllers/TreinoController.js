const TreinoController = require("../services/TreinoService")

module.exports = class TreinoController{
    static async getTreino(req, res) {
        res.status(200).send(TreinoService.getTreino())
    }

    static async save(req, res) {
        res.status(200).send(TreinoService.save(req.body))
    }
}