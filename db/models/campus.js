'use strict';

const Sequelize = require('sequelize');
var db = require('../index.js')


const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
  }
})

module.exports = Campus;
