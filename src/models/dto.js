import { voidFunction } from '../utils/constans';
import { newCitizen, newCitizenFromContract } from './citizens';
import { citizenSchema } from './schemas';

const voidSchema = { validate: voidFunction };

const dtoValidatorBuilder = (
    createObject = voidFunction,
    schema = voidSchema
) => {
    return (item) => {
        const { error } = schema.validate(item);
        if (error) {
            console.log('Validate Error', error.message);
            throw new Error(`${error.message}`);
        }
        return createObject(item);
    };
};

const citizenDto = dtoValidatorBuilder(newCitizen, citizenSchema);

const citizensDto = (citizens = []) => {
    return citizens.map(newCitizenFromContract).map(citizenDto);
};

export { citizenDto, citizensDto };
