module.exports = (sequelize,DataTypes) => {
    const Users = sequelize.define ("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
    });

    Users.associate = (models) => {
        Users.hasMany(models.Projects, {
          onDelete: "cascade",
        });
        Users.hasMany(models.Requests, {
            onDelete: "cascade",
          });
    };
    
    return Users;
};