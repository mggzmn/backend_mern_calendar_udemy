const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

const createUser = async (req, res = response) => {
    const { email, password } = req.body;
    try {
        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: "Un usuario existe con ese correo"
            });
        }
        usuario = new Usuario(req.body);
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt)
        await usuario.save();
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name

        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "contacte al administrador"
        });
    }

}
const authUser = (req, res = response) => {
    const { email, password } = req.body;

    res.status(201).json({
        ok: true,
        msg: "auth",
        email,
        password
    })
}

const renewToken = (req, res = response) => {
    res.json({
        ok: true
    })
}

module.exports = {
    createUser,
    authUser,
    renewToken
}