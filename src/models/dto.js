import { voidFunction } from '../utils/constans';
import { newCitizen } from './citizens';
import { citizenSchema } from './schemas';

const voidSchema = { validate: voidFunction };

const dtoValidatorBuilder = (
    createObject = voidFunction,
    schema = voidSchema
) => {
    return (item) => {
        const { error } = schema.validate(item);
        if (error) {
            throw new Error(`Validation error: ${error.message}`);
        }
        return createObject(item);
    };
};

const citizenDto = dtoValidatorBuilder(newCitizen, citizenSchema);

const citizensDto = (citizens = []) => {
    return citizens.map(citizenDto);
};

export { citizenDto, citizensDto };
