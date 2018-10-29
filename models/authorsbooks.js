'use strict';
module.exports = (sequelize, DataTypes) => {
  const AuthorsBooks = sequelize.define('AuthorsBooks', {
    author_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER
  }, {});
  AuthorsBooks.associate = function(models) {
    models.Author.belongsToMany(models.Book, {through: AuthorsBooks, foreignKey: "author_id"});
    models.Book.belongsToMany(models.Author, {through: AuthorsBooks, foreignKey: "book_id"});
  };
  return AuthorsBooks;
};