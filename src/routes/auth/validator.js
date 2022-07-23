const expressValidatore = require('express-validator');
const check = expressValidatore.check;

module.exports = new class {
    registerValidatore() {
        return [
            check('email')
                .isEmail()
                .withMessage('email is in valid'),
            check('name')
                .not()
                .isEmpty()
                .withMessage('name cant be empty'),
            check('password')
                .not()
                .isEmpty()
                .withMessage('password cant be empty'),
        ]
    }
    loginValidatore() {
        return [
            check('email')
                .isEmail()
                .withMessage('email is in valid'),
            check('password')
                .not()
                .isEmpty()
                .withMessage('password cant be empty'),
        ]
    }
}