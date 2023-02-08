/* 
    Rutas de Usuarios / Auth
    host + /api/auth
 */
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { createUser, authUser, renewToken } = require('../controllers/auth');

router.post('/new',
    [//middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'EL email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 })
    ],
    createUser);

router.post('/',
    [//middlewares
        check('email', 'EL email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 })
    ]
    , authUser);

router.get('/renew', renewToken);

module.exports = router;