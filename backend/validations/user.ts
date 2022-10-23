import { body } from 'express-validator'

export const userStoreValidate = [
    body("firstName").escape().not().isEmpty().withMessage("Nome Obrigatório")
]