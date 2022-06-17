module.exports = (sequelize,DataTypes) => {
    const Requests = sequelize.define ("Requests", {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        cli_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        cost: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        state: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
    });

    return Requests;
};