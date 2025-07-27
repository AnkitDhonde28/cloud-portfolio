const { DataTypes } = require('sequelize');
const sequelize = require('../../db/database');

const Contact = sequelize.define('Contact', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

Contact.sync(); // Creates table if not exists

module.exports = Contact;
