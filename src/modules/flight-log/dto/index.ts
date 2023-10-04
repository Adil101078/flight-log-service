import Joi from 'joi'

export const GetAllDTO = Joi.object({
    name: Joi.string().optional(),
    companyId: Joi.string().optional(),
    traceId: Joi.string().optional(),
    source: Joi.string().optional(),
    sourceFrom: Joi.string().optional(),
    cartId: Joi.string().optional(),
    type: Joi.string().optional(),
    startIndex: Joi.string().optional(),
    itemsPerPage: Joi.string().optional(),
})