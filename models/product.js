'use strict';
module.exports = (sequelize, DataTypes) => {
  class Product extends sequelize.Sequelize.Model{}
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Name is required'
        },
        notEmpty: {
          args: true,
          msg: 'Name is required'
        }
      } 
    },
    image_url: {
      type: DataTypes.STRING,
      defaultValue: 'https://stafsite.untad.ac.id/images/noimage.jpg' 
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Price is required'
        },
        notEmpty: {
          args: true,
          msg: 'Price is required'
        },
        min: {
          args: 0,
          msg: 'Price should be greater than or equal to 0'
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Price is required'
        },
        notEmpty: {
          args: true,
          msg: 'Price is required'
        },
        min: {
          args: 0,
          msg: 'Price should be greater than or equal to 0'
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Category is required'
        },
        notEmpty: {
          args: true,
          msg: 'Category is required'
        },
        isIn: {
          args: [['bag', 'shoes', 'wallet', 'skirt', 'dress', 'other']],
          msg: 'Category is not valid'
        }
      }
    } 
  }, {
    sequelize,
    modelName: 'Product',
  })
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};