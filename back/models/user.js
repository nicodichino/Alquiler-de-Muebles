const {
  Model, DataTypes,
} = require('sequelize');
const { sequelizeDatabase } = require('../config/files/sequelize.config');

class User extends Model {
  static associate() {
    // add associations here
  }
}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [1, 32], // max username length is 32 characters
    },
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
      len: [1, 320], // max email length is 320 characters
    },
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize: sequelizeDatabase,
  modelName: 'User',
});

module.exports = { User };
