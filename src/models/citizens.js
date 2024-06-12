export const newCitizen = (citizen) => {
    return {
        id: Number(citizen.id),
        name: citizen.name,
        age: Number(citizen.age),
        city: citizen.city.slice(0, 10),
        someNote: citizen?.someNote || '',
        hash: citizen?.transactionHash || null,
        blockNumber: citizen?.blockNumber || null
    };
};

export const newCitizenFromContract = (citizen) => ({
    hash: citizen.transactionHash,
    id: Number(citizen.returnValues.id),
    age: Number(citizen.returnValues.age),
    city: citizen.returnValues.city,
    name: citizen.returnValues.name,
    blockNumber: Number(citizen.blockNumber)
});
