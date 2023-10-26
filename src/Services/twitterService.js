const { findUsersQuery, createUserQuery } = require("../Queries/twitterQuery")

const findUsersService = async (id) => {
    try {
        const res = await findUsersQuery(id)

        return res
    } catch(err) {
        console.log(err);
    }
}

const createUsersService = async (username, email, password) => {
    try {

        const check = await findUsersQuery(username, email);
        if (check) throw new Error("User is already exist")
        const res = await createUserQuery(username, email, password);

        return res
    } catch(err) {
        throw err
    }
}

module.exports = {
    findUsersService,
    createUsersService
}