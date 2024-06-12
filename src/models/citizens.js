export const newCitizen = (citizen) => {
    return {
        id: Number(citizen.id),
        name: citizen.name,
        age: Number(citizen.age),
        city: citizen.city,
        someNote: citizen?.someNote || '',
        hash: citizen?.transactionHash || null,
        blockNumber: citizen?.blockNumber || null
    };
};
