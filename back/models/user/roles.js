const { Model, DataTypes } = require('sequelize');
const { sequelizeDatabase } = require('../../config/files/sequelize.config');

class Role extends Model {
    static associate() {
        // add associations here
    }
}
Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30],
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 200],
            },
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            },
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                isDate: true,
            },
        },
    },
    {
        sequelize: sequelizeDatabase,
        modelName: 'Role',
    },
);
