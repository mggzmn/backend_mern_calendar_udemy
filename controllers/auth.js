const { response } = require('express');
const Usuario = require('../models/Usuario');

const createUser = async (req, res = response) => {
    const { name, email, password } = req.body;

    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.status(201).json({
            ok: true
        });
    } catch (error) {
        res.status(500).json({
            ok: false
        })
    }

}
const authUser = (req, res = response) => {
    const { email, password } = req.body;

    res.status(201).json({
        ok: true,
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