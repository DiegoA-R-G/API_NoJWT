const bcryptjs = require('bcryptjs');
const User = require('../models/user.model')

const getUser = async (req, res) => {

    const allUsers = await User.find();

    res.send({
        ok: 100,
        allUsers
    })
}
const postUser = async (req, res) => {

    const { identificacion, nombre, apellidos, direccion, telefono, usuario, password } = req.body;
    
    const user = new User({ identificacion, nombre, apellidos, direccion, telefono, usuario, password });

    
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );

    await user.save();

    res.json({
        ok: 200,
        user
    })
}
const putUser = async (req, res) => {
    
    const paramts = req.params.id;
    const { identificacion, nombre, apellidos, direccion, telefono, ususario, password } = req.body;

    
    const userUpdate = await User.findByIdAndUpdate(paramts, {identificacion, nombre, apellidos, direccion, telefono, ususario, password});

    res.send({
        ok:300,
        "Mensaje": "Usuario actualizado exitosamente"
    })
}
const deleteUser = async (req, res) => {
    const id_user = req.params.id; 

    const estado  = false;

    const userUpdate = await User.findByIdAndUpdate(id_user, {estado});
    res.send({
        ok: 400,
        "Mensaje": "Usuario eliminado exitosamente"
    })
}

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}