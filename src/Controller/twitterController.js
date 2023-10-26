const { findUsersService, createUsersService } = require("../Services/twitterService")

const findUsersController = async (req, res) => {
    try {
        const {id} = req.params;
        let result = await findUsersService(id);

        res.status(200).json({
            message: "Success",
            data: result,
        })
    } catch(err) {
        res.status(500).send(err.message)
    }
}

const createUsersController = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const result = await createUsersService(username, email, password);

        res.status(200).json({
            message: "Create Succes",
            data: result,
        })
        return res
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    findUsersController,
    createUsersController
}