// const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
	const user = sequelize.define(
		"Users",
		{
			username: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			password: {
				type: Sequelize.STRING,
			},
		},
		{
			timestamps: false,
			tablename: "Users",
		}
	);

	// user.associate = (models) => {
	// 	user.belongsTo(models.branchs, { foreignKey: "branchId" });
	// };

	return user;
};
