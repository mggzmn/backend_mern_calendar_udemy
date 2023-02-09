const { response } = require('express');
const getEventos = async (req, res = response) => {
   
    res.json({
        ok: true,
    })
}

const crearEvento = async (req, res = response) => {
   
    res.json({
        ok: true,
    })
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