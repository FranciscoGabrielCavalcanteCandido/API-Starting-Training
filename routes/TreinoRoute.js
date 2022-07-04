const TreinoController = require("../controllers/TreinoController")

module.exports = class TreinoRoute {
    constructor(app) {
        app.route("/treino").get(TreinoController.getTreino);
        app.route("/treino").post(TreinoController.save);
    }
}