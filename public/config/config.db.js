const mongoose = require('mongoose');

const MongoDBConect = async () =>{
    try {
        mongoose.connect(process.env.DBConnect);
        console.log("Conexion exitosa :3")
    } catch (error) {
        console.log("error de conexion" +error)
    }
}
module.exports = {
    MongoDBConect
};