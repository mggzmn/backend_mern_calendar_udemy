const { response } = require('express');
const Evento = require("../models/Evento");
const getEventos = async (req, res = response) => {

    res.json({
        ok: true,
    })
}

const crearEvento = async (req, res = response) => {

    try {
        const evento = new Evento(req.body);
        evento.user = req.uid;
        const eventoDB = await evento.save();
        res.json({
            evento: eventoDB
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const actualizarEvento = async (req, res = response) => {

    res.json({
        ok: true,
    })
}
const eliminarEvento = async (req, res = response) => {

    res.json({
        ok: true,
    })
}


module.exports = {
    actualizarEvento,
    crearEvento,
    eliminarEvento,
    getEventos
}