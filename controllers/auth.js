const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

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
        usuario.password = bcrypt.hashSync(password, salt);
        await usuario.save();
        const token = await generarJWT(usuario.id, usuario.name);
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token

        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "contacte al administrador"
        });
    }

}
const authUser = async (req, res = response) => {
    const { email, password } = req.body;
    try {
        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: "EL usuario no existe"
            });
        }
        const validPassword = bcrypt.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: "Password no válida"
            });
        }
        const token = await generarJWT(usuario.id, usuario.name);
        res.status(201).json({
            ok: true,
            msg: "login",
            uid: usuario.id,
            name: usuario.name,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "contacte al administrador"
        });
    }

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