/* 
    Rutas de Usuarios / Auth
    host + /api/auth
 */
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { createUser, authUser, renewToken } = require('../controllers/auth');
const router = Router();



router.post('/new',
    [//middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'EL email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    createUser);

router.post('/',
    [//middlewares
        check('email', 'EL email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ]
    , authUser);

router.get('/renew', renewToken);

module.exports = router;