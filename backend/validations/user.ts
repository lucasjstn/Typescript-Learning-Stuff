import { body } from 'express-validator'

export const userStoreValidate = [
    body("firstName").escape().not().isEmpty().withMessage("Nome Obrigatório"),
    body('lastName')
        .escape()
        .not().isEmpty().withMessage("Sobrenome é Obrigatório"),
    body("email").escape().not().isEmpty().isEmail().withMessage("Email não é válido"),
    body("password").escape().not().isEmpty().withMessage("Senha é obrigatório"),
]

