import Joi from 'joi';

export const rentalSchema = Joi.object({
    customerId: Joi.number().integer().required(),
    gameId: Joi.number().integer().required(),
    daysRented: Joi.number().greater(0).integer().required()
})