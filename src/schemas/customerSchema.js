import Joi from 'joi';
import dayjs from 'dayjs';

export const customerSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().max(11).min(10).regex(new RegExp(/^[0-9]*$/)).required(),
    cpf: Joi.string().length(11).regex(new RegExp(/^[0-9]*$/)).required(),
    birthday: Joi.date().max(dayjs().format("YYYY-MM-DD")).iso().required()
});