module.exports = (sequelize,DataTypes) => {
    const Projects = sequelize.define ("Projects", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
    });
    
    Projects.associate = (models) => {
        Projects.hasMany(models.Requests, {
          onDelete: "cascade",
        });
    };

    return Projects;
};