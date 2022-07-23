const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validatore = require('./validator');

router.post(
    '/register',
    validatore.registerValidatore(),
    controller.validate,
     controller.register
);
router.post(
    '/login',
    validatore.loginValidatore(),
    controller.validate,
     controller.login
);
 


module.exports=router;