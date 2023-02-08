const { response } = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res = response) => {
    const { name, email, password } = req.body;

    res.status(201).json({
        ok: true,
        name,
        email,
        password
    })
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