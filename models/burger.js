const orm = require('../config/orm.js');

//modified from CatsApp

const burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(result) {
        callback(result);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, callback) {
      orm.insertOne("burgers", cols, vals, function(res) {
        callback(result);
      });
    },
    updateOne: function(objColVals, condition, callback) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        callback(result);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;