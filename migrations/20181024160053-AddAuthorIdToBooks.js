'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Books',
      'authorId',
     Sequelize.INTEGER
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Books', 'authorId');
  }
};
