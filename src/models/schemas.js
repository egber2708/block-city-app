import Joi from 'joi';

const citizenSchema = Joi.object({
    id: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
    name: Joi.string().required(),
    age: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
    city: Joi.string().required(),
    someNote: Joi.string().allow(null),
    transactionHash: Joi.string().allow(null),
    blockNumber: Joi.number().allow(null),
    hash: Joi.string().allow(null)
});

export { citizenSchema };
