const express = require("express");
const cors = require("cors");
const { json } = require("express");
const TreinoRoute = require("./routes/TreinoRoute")
const UserRoute = require("./routes/UserRoute")
const porta = process.env.PORT || 3000;


class App {
    static async init() {
        let app = new express();
        app.use(cors());
        app.use(express.json());

        app.get("/", (req, res) => {
            res.json({
                name: "API Starting Training",
                version: "1.0.0",
                description: "API para o app Starting Training",
                author: "Francisco Gabriel"
            })
        })

        app.listen(porta, () => {
            console.log(`Servidor inicializado na porta: ${porta}`)
        })
        new TreinoRoute(app)
        new UserRoute(app)
    }
}
App.init();