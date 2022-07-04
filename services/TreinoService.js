var treinos = [];
module.exports = class TreinoService {
    static getTreinos() {
        return { treinos: treinos }
    }
    static save(treino) {
        treinos.push(treino)
        return { treino: treino }
    }

}