'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {});
  Author.associate = function(models) {
  };
  return Author;
};













