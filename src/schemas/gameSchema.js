import Joi from 'joi';

export const gameSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string(),
    stockTotal: Joi.number().integer().greater(0).required(),
    pricePerDay: Joi.number().greater(0).required()
})