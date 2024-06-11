export const citizensContractDto = (citizens = []) => {
    return citizens.map((citizen) => ({
        hash: citizen.transactionHash,
        id: Number(citizen.returnValues.id),
        age: Number(citizen.returnValues.age),
        city: citizen.returnValues.city.slice(0, 10),
        name: citizen.returnValues.name,
        blockNumber: citizen.blockNumber
    }));
};
