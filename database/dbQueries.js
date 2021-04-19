const { Athlete } = require('./Schema/models');

module.exports = {
    findAthlete,
    updateAthlete,
    getAthlete,
    increaseAmount,
    createArhlete
};
async function createArhlete (params) {
    const athlete = await Athlete.create(params);
    return athlete;
}

async function findAthlete (params) {
    const athlete = await Athlete.findOne(params);
    return athlete;
}

async function updateAthlete ( id, params) {
    const athlete = await Athlete.findByIdAndUpdate(id, params);
    return athlete;
}

async function getAthlete () {
    const athlete = await Athlete.find().sort({ points : -1 });
    return athlete;
}

async function increaseAmount (id, params) {
    const athlete = await Athlete.findByIdAndUpdate(id, {$inc: { params }});
    return athlete
}
