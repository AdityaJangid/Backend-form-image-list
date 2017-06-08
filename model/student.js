'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * @module student
 * @description contain the details of student name, age 
 */

var StudentSchema = new Schema({
  FullName: { type: String },
  Age: { type: Number }
});


StudentSchema.statics = {

     /**
      findOneStudent. return the one student object.
      @param id: get id to find one student by id.
      @param callback: callback of this form.
    */
    get: function(query, callback) {
        this.findOne(query, callback);
    },
    /**
      findStudent. return the student objects.
      @param callback: callback of this form.
    */
    getAll: function(query, callback) {
        this.find(query, callback);
    },
    
    /**
      updatestudent. return the create student object result.
      @param updateData: updateData is use to update student w.r.t id.
      @param callback: callback of this form.
    */
    updateById: function(id, updateData, callback) {
        this.update(id, {$set: updateData}, callback);
    },
    removeById: function(removeData, callback) {
        this.remove(removeData, callback);
    },
    create: function(data, callback) {
        var student = new this(data);
        student.save(callback);
    }
}

var student = mongoose.model('student', StudentSchema);

/** export schema */
module.exports = {
    Student: student
};
