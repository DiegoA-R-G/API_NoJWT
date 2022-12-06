const express = require("express")
const cors = require("cors")

const { MongoDBConect } = require("../public/config/config.db")

class Server {
    constructor() {
        this.app = express();

        // Coneccion a la base de datos 
        this.DBConnect();

        // el link para entrar desde una pagina
        this.port = process.env.PORT;

        // definicion de path
        this.userPath = '/api/user';

        // Se crean los midlaware
        this.middlaware();

        // se redirecciona al metodo rutas
        this.routes();

        // Se redirecciona al metodo listen
        this.listen
    }
    //Conneccion a la base de datos
    DBConnect() {
        MongoDBConect();
    }
    middlaware() {

        // definicion de los cors
        this.app.use(cors())

        // directorio publico
        this.app.use(express.static('public'))

        // convertir a json
        this.app.use(express.json())
    }
    routes() {
        this.app.use(this.userPath, require('../public/routes/user'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("http://localhost:" + this.port);
        })
    }
}


module.exports = Server