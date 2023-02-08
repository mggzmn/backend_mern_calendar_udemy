/* 
    Rutas de Usuarios / Auth
    host + /api/auth
 */
const { Router } = require('express');
const router = Router();
const { createUser, authUser, renew } = require('../controllers/auth')

router.post('/new', createUser);

router.post('/', authUser);

router.get('/renew', renew);

module.exports = router;