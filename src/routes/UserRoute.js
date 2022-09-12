
const UserController = require("../controllers/UserController")

module.exports = class UserRoute {
    constructor(app) {
        app.route("/user")
            .get(UserController.buscarTodos)
            .post(UserController.criar)
            .put(UserController.atualizar)
            .delete(UserController.deletar)


        app.route('/usuarios/:idUsuario').get(UserController.buscarPorId);
    }
}