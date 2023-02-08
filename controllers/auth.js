const { response } = require('express')
const createUser = (req, res = response) => {
    res.json({
        ok: true
    })
}
const authUser = (req, res = response) => {
    res.json({
        ok: true
    })
}

const renew = (req, res = response) => {
    res.json({
        ok: true
    })
}

module.exports = {
    createUser,
    authUser,
    renew
}