const { Schema, model } = require('mongoose')

const UserModel = new Schema({
    identificacion: {
        type: Number,
        required: ["El numero de identificación es obligatorio!"],
        unique: true
    },
    nombre: {
        type: String,
        required: ["El nombre es obligatorio!"]
    },
    apellidos: {
        type: String,
        required: ["El apellido es obligatorio!"]
    },
    direccion: {
        type: String,
        required: ["La direccion es obligatorio!"]
    },
    telefono: {
        type: Number,
        required: ["El telefono es obligatorio!"]
    },
    usuario: {
        type: String,
        required: ["El usuario es obligatorio!"],
        unique: true
    },
    password: {
        type: String,
        required: ["La password es obligatoria!"]
    },
    Estado: {
        type: Boolean,
        default: true
    }
})
// al final se exportan todas las constantes que hallamos creado
module.exports = model('user', UserModel)