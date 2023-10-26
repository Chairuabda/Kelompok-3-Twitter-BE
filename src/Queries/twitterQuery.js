const db = require("../models");
const user = db.Users;
const { Op } = require("sequelize");

const findUsersQuery = async (id = null, username = null, email = null) => {
	try {

        const params = {}
        if(id) params.id = id;
        if(username) params.username = username;
        if(email) params.email = email;

		const res = await user.findAll({
            where:{
                ...params
            }
        });

		return res;
	} catch (err) {
		throw err;
	}
};


const createUserQuery = async (username, email, password) => {
    try {
        await db.sequelize.transaction(async (t) => {
            await user.create({
                username,
                email,
                password,
            },
            { transaction: t }
            );
        })
    } catch(err) {
        throw err
    }
}


module.exports = {
    findUsersQuery,
    createUserQuery,
}