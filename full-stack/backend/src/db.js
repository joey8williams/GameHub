//This file connects to the remote prisma DB, and gives us query capability
const {Prisma} = require('prisma-binding');

const db = new Prisma({
    typeDefs:'src/generated/prisma.graphql', //This will come once the post deploy hook is run
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: true
});

module.exports = db;